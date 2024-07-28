'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import Image from 'next/image';

const content = {
  cardTitle: 'Appearance',
  cardDescription: 'Customize your app appearance',
  buttonLabel: 'Personalize',
  dialogTitle: 'Personalize your app appearance',
  dialogDescription: 'Choose your app theme, color, and more'
};

export function UserAppearanceForm() {
  const { themes, theme, setTheme } = useTheme();

  return (
    <Dialog>
      <Card>
        <CardHeader>
          <CardTitle>{content.cardTitle}</CardTitle>
          <CardDescription>{content.cardDescription}</CardDescription>
        </CardHeader>
        <CardFooter>
          <DialogTrigger asChild>
            <Button className='gap-2'>
              <span>{content.buttonLabel}</span>
            </Button>
          </DialogTrigger>
        </CardFooter>
      </Card>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{content.dialogTitle}</DialogTitle>
          <DialogDescription>{content.dialogDescription}</DialogDescription>
        </DialogHeader>
        <div className='flex flex-wrap items-center gap-4'>
          {themes.map((t) => (
            <button
              onClick={() => setTheme(t)}
              key={t}
              className={cn(
                'relative h-32 w-32 overflow-hidden rounded-md border-2 border-border',
                t === theme &&
                  'outline outline-2 outline-offset-2 outline-primary'
              )}
            >
              <Image src={`/${t}.png`} alt={t} fill />
              <span className='absolute bottom-0 left-0 right-0 bg-background bg-opacity-50 p-2 text-center text-sm font-medium capitalize text-foreground '>
                {t}
              </span>
            </button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
