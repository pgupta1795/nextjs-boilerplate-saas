'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { Icons } from '@/components/ui/icons';
import { useAwaitableTransition } from '@/lib/hooks/use-awaitable-transition';
import { cn } from '@/lib/utils';
import { updateImageMutation } from '@/server/actions/user/mutations';
import type { OurFileRouter } from '@/server/uploadthing/core';
import { useMutation } from '@tanstack/react-query';
import { generateReactHelpers, useDropzone } from '@uploadthing/react';
import { Trash2Icon } from 'lucide-react';
import type { User } from 'next-auth';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import { toast } from 'sonner';
import { generateClientDropzoneAccept } from 'uploadthing/client';

type UserImageFormProps = {
  user: User;
};

const content = {
  PROFILE_MAX_SIZE: 4,
  cardTitle: 'Profile Image',
  cardDescription: 'Add a profile image to make your account more personal.',
  uploadButtonLabel: 'Upload Image',
  dialogTitle: 'Upload a new profile image here',
  dialogDescription: 'Drag and drop the image here, or click to select a file',
  maxFileSizeInfo: 'Max file size: 4MB',
  recommendedSizeInfo: 'Recommended size: 600x600',
  dragDropActive: 'Drop the image here',
  dragDropInactive:
    'Drag and drop the image here, or click to select a file not more than 4MB in size.',
  fileTypeNotSupported: 'This file type is not supported',
  cancelLabel: 'Cancel',
  uploadLabel: 'Upload',
  uploadingLabel: (progress: number) => `Uploading (${progress})`,
  settingUpLabel: 'Setting up...',
  imageUploadSuccess: 'Image uploaded successfully',
  imageUploadError: 'Image could not be uploaded'
};

export function UserImageForm({ user }: UserImageFormProps) {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const { useUploadThing } = generateReactHelpers<OurFileRouter>();
  const [files, setFiles] = useState<File[]>([]);
  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(acceptedFiles);
  }, []);

  const { startUpload, permittedFileInfo, isUploading } = useUploadThing(
    'profilePicture',
    {
      onUploadProgress: (progress) => {
        setUploadProgress(progress);
      }
    }
  );

  const fileTypes = permittedFileInfo?.config
    ? Object.keys(permittedFileInfo?.config)
    : [];

  const { isDragActive, isDragAccept, getRootProps, getInputProps } =
    useDropzone({
      onDrop,
      accept: fileTypes ? generateClientDropzoneAccept(fileTypes) : undefined,
      maxFiles: 1,
      maxSize: content.PROFILE_MAX_SIZE * 1024 * 1024
    });
  const [isPending, awaitableTransition] = useAwaitableTransition();
  const { isPending: isMutatePending, mutateAsync } = useMutation({
    mutationFn: ({ imageUrl }: { imageUrl: string }) =>
      updateImageMutation({ image: imageUrl })
  });

  const handleUpdateImage = async () => {
    try {
      const images = await startUpload(files);
      await mutateAsync({ imageUrl: images![0]!.url });
      await awaitableTransition(() => {
        router.refresh();
      });
      setFiles([]);
      setModalOpen(false);
      toast.success(content.imageUploadSuccess);
    } catch (error) {
      toast.error(
        (error as { message?: string })?.message ?? content.imageUploadError
      );
    }
  };

  return (
    <Dialog
      onOpenChange={(o) => {
        if (isUploading) return;
        setModalOpen(o);
        setFiles([]);
      }}
      open={modalOpen}
    >
      <Card>
        <CardHeader>
          <CardTitle>{content.cardTitle}</CardTitle>
          <CardDescription>{content.cardDescription}</CardDescription>
        </CardHeader>
        <CardContent className='flex items-center gap-4'>
          <Avatar className='h-16 w-16'>
            <AvatarImage src={user.image ? user.image : ''} />
            <AvatarFallback className='text-3xl'>
              {user.name![0]}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className='text-sm font-light text-muted-foreground'>
              {content.maxFileSizeInfo}
            </p>
            <p className='text-sm font-light text-muted-foreground'>
              {content.recommendedSizeInfo}
            </p>
          </div>
        </CardContent>
        <CardFooter>
          <DialogTrigger asChild>
            <Button type='button'>{content.uploadButtonLabel}</Button>
          </DialogTrigger>
        </CardFooter>
      </Card>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{content.dialogTitle}</DialogTitle>
          <DialogDescription>{content.dialogDescription}</DialogDescription>
        </DialogHeader>
        {files.length > 0 ? (
          <div className='flex items-center gap-4'>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={files[0] ? URL.createObjectURL(files[0]) : ''}
              alt='preview'
              className='h-36 w-36 rounded-full object-cover'
            />
            <Button
              onClick={() => setFiles([])}
              type='button'
              variant='destructive'
              size='icon'
            >
              <Trash2Icon className='h-4 w-4' />
            </Button>
          </div>
        ) : (
          <div
            {...getRootProps()}
            className={cn(
              'flex h-36 cursor-pointer flex-col items-center justify-center rounded-md border-2 border-dashed border-border transition-[border] hover:border-primary',
              isDragActive && 'border-primary'
            )}
          >
            <input {...getInputProps()} />
            <p className='p-8 text-center text-sm text-muted-foreground'>
              {isDragActive
                ? isDragAccept
                  ? content.dragDropActive
                  : content.fileTypeNotSupported
                : content.dragDropInactive}
            </p>
          </div>
        )}
        <DialogFooter>
          <DialogClose asChild>
            <Button
              disabled={isUploading || isPending || isMutatePending}
              type='button'
              variant='outline'
            >
              {content.cancelLabel}
            </Button>
          </DialogClose>
          <Button
            onClick={handleUpdateImage}
            disabled={
              isUploading || isPending || isMutatePending || files.length === 0
            }
            type='button'
            className='gap-2'
          >
            {isUploading || isPending || isMutatePending ? (
              <Icons.loader className='h-4 w-4' />
            ) : null}
            <span>
              {isUploading && content.uploadingLabel(uploadProgress)}
              {isPending || isMutatePending ? content.settingUpLabel : null}
              {!isUploading && !isPending && !isMutatePending
                ? content.uploadLabel
                : null}
            </span>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
