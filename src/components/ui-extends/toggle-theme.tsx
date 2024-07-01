'use client';

import useIsMounted from '@/lib/hooks/useIsMounted';
import { useTheme } from 'next-themes';
import { SVGProps } from 'react';

interface IconProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

export const ThemeDarkIcon = ({ className, ...rest }: IconProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    fill='currentColor'
    className={className}
    {...rest}
  >
    <path
      fillRule='evenodd'
      d='M12,2A7,7 0 0,1 19,9C19,11.38 17.81,13.47 16,14.74V17A1,1 0 0,1 15,18H9A1,1 0 0,1 8,17V14.74C6.19,13.47 5,11.38 5,9A7,7 0 0,1 12,2M9,21V20H15V21A1,1 0 0,1 14,22H10A1,1 0 0,1 9,21M12,4A5,5 0 0,0 7,9C7,11.05 8.23,12.81 10,13.58V16H14V13.58C15.77,12.81 17,11.05 17,9A5,5 0 0,0 12,4Z'
      clipRule='evenodd'
    ></path>
  </svg>
);

export const ThemeLightIcon = ({ className, ...rest }: IconProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    fill='currentColor'
    className={className}
    {...rest}
  >
    <path
      fillRule='evenodd'
      d='M20,11H23V13H20V11M1,11H4V13H1V11M13,1V4H11V1H13M4.92,3.5L7.05,5.64L5.63,7.05L3.5,4.93L4.92,3.5M16.95,5.63L19.07,3.5L20.5,4.93L18.37,7.05L16.95,5.63M12,6A6,6 0 0,1 18,12C18,14.22 16.79,16.16 15,17.2V19A1,1 0 0,1 14,20H10A1,1 0 0,1 9,19V17.2C7.21,16.16 6,14.22 6,12A6,6 0 0,1 12,6M14,21V22A1,1 0 0,1 13,23H11A1,1 0 0,1 10,22V21H14M11,18H13V15.87C14.73,15.43 16,13.86 16,12A4,4 0 0,0 12,8A4,4 0 0,0 8,12C8,13.86 9.27,15.43 11,15.87V18Z'
      clipRule='evenodd'
    ></path>
  </svg>
);

export default function ToggleTheme() {
  const { theme, setTheme } = useTheme();
  const isMounted = useIsMounted();
  if (!isMounted) return null;

  return (
    <button
      title='Toggle Dark Mode'
      aria-label='Toggle Dark Mode'
      className='hover-underline-animation inline-flex h-10 w-10 flex-row p-2 text-inherit'
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? <ThemeLightIcon /> : <ThemeDarkIcon />}
    </button>
  );
}
