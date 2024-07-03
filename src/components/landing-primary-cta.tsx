import clsx from 'clsx';
import Image from 'next/image';

/**
 * A React component that renders the primary content for a call-to-action (CTA) section on a landing page.
 *
 * This component accepts various props to customize the appearance and content of the CTA section,
 * including the title, description, leading component, and children content.
 *
 * @param {Object} props - The component props.
 * @param {string} [props.className] - Additional CSS classes to apply to the outer container.
 * @param {string} [props.childrenClassName] - Additional CSS classes to apply to the children container.
 * @param {'center'|'left'} [props.textPosition] - The alignment of the text content.
 * @param {string|React.ReactNode} props.title - The title content for the CTA section.
 * @param {React.ReactNode} [props.titleComponent] - A custom component to render the title.
 * @param {string|React.ReactNode} props.description - The description content for the CTA section.
 * @param {React.ReactNode} [props.descriptionComponent] - A custom component to render the description.
 * @param {React.ReactNode} [props.leadingComponent] - A component to render before the title and description.
 * @param {React.ReactNode} [props.children] - Additional content to be rendered inside the CTA section.
 */
const LandingPrimaryCtaContent = ({
  className,
  childrenClassName,
  textPosition = 'left',
  title,
  titleComponent,
  description,
  descriptionComponent,
  leadingComponent,
  children
}: {
  className?: string;
  childrenClassName?: string;
  textPosition?: 'center' | 'left';
  title: string | React.ReactNode;
  titleComponent?: React.ReactNode;
  description: string | React.ReactNode;
  descriptionComponent?: React.ReactNode;
  leadingComponent?: React.ReactNode;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={clsx(
        'flex flex-col gap-4',
        textPosition === 'center'
          ? 'items-center text-center'
          : 'justify-center',
        className
      )}
    >
      {leadingComponent}

      {title ? (
        <h1 className='lg:leading-14 text-4xl font-semibold md:max-w-xl lg:text-5xl'>
          {title}
        </h1>
      ) : (
        titleComponent
      )}

      {description ? (
        <p className='md:max-w-lg md:text-lg'>{description}</p>
      ) : (
        descriptionComponent
      )}

      <div
        className={clsx(
          'mt-2 flex flex-wrap gap-4',
          textPosition === 'center' ? 'justify-center' : 'justify-start',
          childrenClassName
        )}
      >
        {children}
      </div>
    </div>
  );
};

/**
 * A React component that renders a primary call-to-action (CTA) section for a landing page.
 *
 * This component accepts various props to customize the appearance and content of the CTA section,
 * including the title, description, leading component, footer component, image, and background styles.
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode} [props.children] - Additional content to be rendered inside the CTA section.
 * @param {string} [props.className] - Additional CSS classes to apply to the outer container.
 * @param {string} [props.innerClassName] - Additional CSS classes to apply to the inner content container.
 * @param {string|React.ReactNode} props.title - The title content for the CTA section.
 * @param {React.ReactNode} [props.titleComponent] - A custom component to render the title.
 * @param {string|React.ReactNode} props.description - The description content for the CTA section.
 * @param {React.ReactNode} [props.descriptionComponent] - A custom component to render the description.
 * @param {React.ReactNode} [props.leadingComponent] - A component to render before the title and description.
 * @param {React.ReactNode} [props.footerComponent] - A component to render after the title, description, and children.
 * @param {'center'|'left'} [props.textPosition] - The alignment of the text content.
 * @param {string} [props.imageSrc] - The source URL of the image to display.
 * @param {string} [props.imageAlt] - The alternative text for the image.
 * @param {'left'|'right'|'center'} [props.imagePosition] - The position of the image relative to the text content.
 * @param {'none'|'left'|'right'|'bottom'|'bottom-lg'|'paper'} [props.imagePerspective] - The perspective effect to apply to the image.
 * @param {'none'|'soft'|'hard'} [props.imageShadow] - The type of shadow to apply to the image.
 * @param {number} [props.minHeight] - The minimum height of the CTA section.
 * @param {boolean} [props.withBackground] - Whether to render a background for the CTA section.
 * @param {'primary'|'secondary'} [props.variant] - The color variant of the CTA section.
 * @param {'primary'|'secondary'} [props.backgroundGlowVariant] - The color variant of the background glow effect.
 */
export const LandingPrimaryImageCtaSection = ({
  children,
  className,
  innerClassName,
  title,
  titleComponent,
  description,
  descriptionComponent,
  leadingComponent,
  footerComponent,
  textPosition = 'left',
  imageSrc,
  imageAlt = '',
  imagePosition = 'right',
  imagePerspective = 'none',
  imageShadow = 'hard',
  minHeight = 350,
  withBackground = false,
  variant = 'primary',
  backgroundGlowVariant = 'primary'
}: {
  children?: React.ReactNode;
  className?: string;
  innerClassName?: string;
  title: string | React.ReactNode;
  titleComponent?: React.ReactNode;
  description: string | React.ReactNode;
  descriptionComponent?: React.ReactNode;
  leadingComponent?: React.ReactNode;
  footerComponent?: React.ReactNode;
  textPosition?: 'center' | 'left';
  imageSrc?: string;
  imageAlt?: string;
  imagePosition?: 'left' | 'right' | 'center';
  imagePerspective?:
    | 'none'
    | 'left'
    | 'right'
    | 'bottom'
    | 'bottom-lg'
    | 'paper';
  imageShadow?: 'none' | 'soft' | 'hard';
  minHeight?: number;
  withBackground?: boolean;
  variant?: 'primary' | 'secondary';
  backgroundGlowVariant?: 'primary' | 'secondary';
}) => {
  return (
    <section
      className={clsx(
        'flex w-full flex-col items-center justify-center gap-8 py-12 lg:py-16',
        withBackground && variant === 'primary'
          ? 'bg-primary-97/20 dark:bg-primary/10'
          : '',
        withBackground && variant === 'secondary'
          ? 'bg-secondary/20 dark:bg-secondary/10'
          : '',
        imagePerspective !== 'none' ? 'overflow-x-hidden' : '',
        imagePerspective === 'paper' ? 'md:pb-24' : '',
        className
      )}
    >
      <div
        className={clsx(
          'relative flex w-full flex-col gap-8 p-6',
          imagePosition === 'center'
            ? 'container-narrow'
            : 'container-wide grid max-w-full items-center lg:grid-cols-2',
          textPosition === 'center' ? 'items-center' : 'items-start',
          innerClassName
        )}
        style={{
          minHeight
        }}
      >
        <LandingPrimaryCtaContent
          className={clsx(
            imagePosition === 'left' && 'lg:col-start-2 lg:row-start-1'
          )}
          title={title}
          titleComponent={titleComponent}
          description={description}
          descriptionComponent={descriptionComponent}
          textPosition={textPosition}
          leadingComponent={leadingComponent}
        >
          {children}
        </LandingPrimaryCtaContent>

        {imageSrc ? (
          <>
            {imagePosition === 'center' ? (
              <section className={clsx('mt-6 w-full md:mt-8')}>
                <Image
                  className={clsx(
                    'w-full overflow-hidden rounded-md',
                    imageShadow === 'soft' && 'shadow-md',
                    imageShadow === 'hard' && 'hard-shadow'
                  )}
                  src={imageSrc}
                  alt={imageAlt}
                  width={minHeight + 75}
                  height={minHeight + 75}
                />
              </section>
            ) : null}

            {imagePosition === 'left' || imagePosition === 'right' ? (
              <Image
                className={clsx(
                  'relative z-10 w-full rounded-md',
                  imageShadow === 'soft' && 'shadow-md',
                  imageShadow === 'hard' && 'hard-shadow',
                  imagePerspective === 'left' && 'lg:perspective-left',
                  imagePerspective === 'right' && 'lg:perspective-right',
                  imagePerspective === 'bottom' && 'lg:perspective-bottom',
                  imagePerspective === 'bottom-lg' &&
                    'lg:perspective-bottom-lg',
                  imagePerspective === 'paper' &&
                    'lg:perspective-paper lg:ml-[7%]',
                  imagePerspective === 'none' ? 'my-4' : 'my-8'
                )}
                alt={imageAlt}
                src={imageSrc}
                width={minHeight + 75}
                height={minHeight + 75}
              />
            ) : null}
          </>
        ) : null}
      </div>

      {footerComponent}
    </section>
  );
};

/**
 * A component meant to be used in the landing page as the primary Call to Action section.
 *
 * A section that shows a title, description and a video.
 * Optionally, it can have actions (children), leading components and a background glow.
 */
export const LandingPrimaryVideoCtaSection = ({
  children,
  className,
  innerClassName,
  title,
  titleComponent,
  description,
  descriptionComponent,
  leadingComponent,
  footerComponent,
  textPosition = 'left',
  minHeight = 350,
  withBackground = false,
  variant = 'primary'
}: {
  children?: React.ReactNode;
  className?: string;
  innerClassName?: string;
  title?: string | React.ReactNode;
  titleComponent?: React.ReactNode;
  description?: string | React.ReactNode;
  descriptionComponent?: React.ReactNode;
  leadingComponent?: React.ReactNode;
  footerComponent?: React.ReactNode;
  textPosition?: 'center' | 'left';
  minHeight?: number;
  withBackground?: boolean;
  variant?: 'primary' | 'secondary';
}) => {
  return (
    <section
      className={clsx(
        'flex w-full flex-col items-center justify-center gap-8 py-12 lg:py-16',
        withBackground && variant === 'primary'
          ? 'bg-primary-97/20 dark:bg-primary/10'
          : '',
        withBackground && variant === 'secondary'
          ? 'bg-white-shades-97 dark:bg-secondary/10'
          : '',
        className
      )}
    >
      <div
        className={clsx(
          'relative flex w-full flex-col gap-8 p-6',
          'container-wide grid max-w-full items-center lg:grid-cols-2',
          textPosition === 'center' ? 'items-center' : 'items-start',
          innerClassName
        )}
        style={{
          minHeight
        }}
      >
        <LandingPrimaryCtaContent
          className={clsx('lg:col-start-2 lg:row-start-1')}
          title={title}
          titleComponent={titleComponent}
          description={description}
          descriptionComponent={descriptionComponent}
          textPosition={textPosition}
          leadingComponent={leadingComponent}
        >
          {children}
        </LandingPrimaryCtaContent>
      </div>

      {footerComponent}
    </section>
  );
};

/**
 * A component meant to be used in the landing page as the primary Call to Action section.
 *
 * A section that shows a title & description.
 * Optionally, it can have actions (children) and a background.
 */
export const LandingPrimaryTextCtaSection = ({
  children,
  className,
  innerClassName,
  title,
  titleComponent,
  description,
  descriptionComponent,
  leadingComponent,
  footerComponent,
  textPosition = 'center',
  withBackground = false,
  variant = 'primary'
}: {
  children?: React.ReactNode;
  className?: string;
  innerClassName?: string;
  title?: string | React.ReactNode;
  titleComponent?: React.ReactNode;
  description?: string | React.ReactNode;
  descriptionComponent?: React.ReactNode;
  leadingComponent?: React.ReactNode;
  footerComponent?: React.ReactNode;
  textPosition?: 'center' | 'left';
  withBackground?: boolean;
  variant?: 'primary' | 'secondary';
}) => {
  return (
    <section
      className={clsx(
        'flex w-full flex-col items-center justify-center gap-8 py-12 lg:py-16',
        withBackground && variant === 'primary'
          ? 'bg-primary-97/20 dark:bg-primary/10'
          : '',
        withBackground && variant === 'secondary'
          ? 'bg-white-shades-97 dark:bg-secondary/10'
          : '',
        className
      )}
    >
      <div
        className={clsx(
          'relative flex w-full flex-col gap-8 p-6',
          textPosition === 'center'
            ? 'container-narrow'
            : 'container-wide max-w-full',
          textPosition === 'center' ? 'items-center' : 'items-start',
          innerClassName
        )}
      >
        <LandingPrimaryCtaContent
          className={clsx(
            textPosition === 'center' ? 'items-center' : 'items-start'
          )}
          childrenClassName={clsx(
            textPosition === 'center' ? 'flex-col items-center' : ''
          )}
          title={title}
          titleComponent={titleComponent}
          description={description}
          descriptionComponent={descriptionComponent}
          textPosition={textPosition}
          leadingComponent={leadingComponent}
        >
          {children}
        </LandingPrimaryCtaContent>
      </div>

      {footerComponent}
    </section>
  );
};
