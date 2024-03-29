'use client';

import { cn } from '@/lib/utils';
import { mdiMenu } from '@mdi/js';
import Icon from '@mdi/react';
import { usePathname } from 'next/navigation';
import React, { FC, useEffect, useState } from 'react';
import { v4 } from 'uuid';
import Logo from '../branding/logo';
import { navLinks } from './nav';
import NavLink from './nav-link';

interface NavProps {
  children?: React.ReactNode;
  className?: string;
  intent:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'success'
    | 'error'
    | 'warning'
    | 'info'
    | 'neutral'
    | null
    | undefined;
  linkSize: 'small' | 'medium' | 'large' | null | undefined;
  size?: 'small' | 'medium' | 'large' | null | undefined;
}

const MobileNav: FC<NavProps> = ({ className, linkSize, intent, size }: NavProps) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const pathname = usePathname();

  const modalOffset = () => {
    switch (size) {
      case 'small':
        return 'top-large';
      case 'medium':
        return 'top-large';
      case 'large':
        return 'top-extra-large';
    }
  };

  useEffect(() => {
    setShowMenu(false);
  }, [pathname]);

  return (
    <nav className={className}>
      <Logo
        linkVisibility="max-mobile-large:hidden h-[80px] mb-medium overflow-hidden"
        href="/"
        className="flex items-start   text-heading-sub-extra-large font-thin leading-[60px] "
        intent={intent}
        textType="heading--large"
      >
        <span>m</span>
        <span className="flex origin-top-left scale-[44%] flex-col gap-[-2px] pt-8 font-light">
          ton
          <br />
          archi
        </span>
      </Logo>
      <Logo
        linkVisibility="mobile-large:hidden h-[55px] mb-medium overflow-hidden"
        href="/"
        className="flex items-start  text-heading-large font-light leading-[60px] "
        intent={intent}
        textType="heading--large"
      >
        <span>m</span>
        <span className="flex origin-top-left scale-[33%] flex-col gap-[-2px] pt-[4.6rem] font-normal">
          ton
          <br />
          archi
        </span>
      </Logo>
      <button onClick={() => setShowMenu(!showMenu)}>
        <Icon className="[&>*]:path-stroke-1" path={mdiMenu} size={2.6}></Icon>
      </button>
      <div
        className={cn(
          '-ml-medium h-screen   w-[106vw] bg-primary1 pl-small duration-700',
          'absolute z-[90]',
          showMenu ? 'left-0' : '-left-[1070px] ',
          modalOffset()
        )}
      >
        <ul className={'mt-large flex flex-col justify-center  gap-large'}>
          <div className="group relative w-fit duration-slow" key={v4()}>
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className={cn(
                'absolute -z-20 -translate-y-1/2 rotate-[150deg] overflow-visible fill-primary1 transition-all duration-slow group-hover:fill-tertiary20',
                pathname === '/a-propos' && '-z-10 fill-tertiary20'
              )}
            >
              <path
                d="M16.6,-33.7C21.7,-19.2,25.9,-14.5,35.1,-6.6C44.4,1.4,58.7,12.5,62.3,26.1C66,39.7,59,55.6,46.8,63.5C34.7,71.3,17.3,71,-0.2,71.3C-17.8,71.6,-35.5,72.5,-43.5,63.3C-51.4,54.1,-49.5,34.8,-56.2,17.5C-63,0.2,-78.3,-15.1,-78,-28.1C-77.6,-41.1,-61.5,-51.8,-45.9,-62.9C-30.3,-73.9,-15.1,-85.3,-4.7,-78.9C5.8,-72.5,11.6,-48.2,16.6,-33.7Z"
                transform="translate(120 75) scale(1.8, 0.9)"
              />
            </svg>
            <NavLink
              rounded="small"
              size={linkSize}
              href={navLinks[0].href}
              intent={intent}
              className="px-0"
            >
              {navLinks[0].name}
            </NavLink>
          </div>

          <div className="group relative w-fit duration-slow" key={v4()}>
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className={cn(
                'absolute -z-20 -translate-y-1/2  overflow-visible fill-primary1 transition-all duration-slow group-hover:fill-primary20',
                pathname.includes('/design-d-espaces') && '-z-10 fill-primary20'
              )}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M34.2,-43.8C43.7,-40.3,50.1,-29.3,57.4,-16.4C64.7,-3.5,72.7,11.4,68.6,21.7C64.4,32.1,48.1,37.9,34.6,40.3C21.2,42.8,10.6,41.9,0.5,41.1C-9.5,40.4,-19.1,39.9,-33.3,37.7C-47.6,35.5,-66.5,31.6,-68.1,23C-69.7,14.4,-53.9,1,-47.4,-14.3C-40.9,-29.5,-43.6,-46.7,-37.3,-51.3C-30.9,-55.9,-15.5,-47.9,-1.5,-45.7C12.4,-43.6,24.8,-47.4,34.2,-43.8Z"
                transform="translate(90 115) scale(1.65, 0.8)"
              />
            </svg>
            <NavLink
              rounded="small"
              size={linkSize}
              href={navLinks[1].href}
              intent={intent}
              className="px-0"
            >
              {navLinks[1].name}
            </NavLink>
          </div>

          <div className="group relative  w-fit" key={v4()}>
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className={cn(
                'absolute -z-20 -translate-y-1/2 overflow-visible fill-primary1 transition-all duration-slow group-hover:fill-secondary20',
                pathname.includes('/design-de-service') && '-z-10 fill-secondary20'
              )}
            >
              <path
                transform="translate(100 110) scale(1.8, 0.7)"
                className=""
                d="M32,-60.3C39.3,-51.1,41.6,-38.2,44.5,-27.5C47.5,-16.9,51.2,-8.4,56.2,2.9C61.3,14.2,67.6,28.5,61.9,34.4C56.2,40.4,38.4,38,26.1,36.2C13.7,34.4,6.9,33,-3.3,38.8C-13.6,44.6,-27.1,57.5,-40.4,59.9C-53.7,62.3,-66.7,54.2,-66.8,42.4C-66.9,30.7,-54,15.3,-48.5,3.2C-42.9,-8.9,-44.6,-17.8,-40.1,-21.9C-35.6,-26,-24.9,-25.2,-17.1,-34.2C-9.4,-43.2,-4.7,-61.9,3.8,-68.5C12.3,-75.1,24.6,-69.6,32,-60.3Z"
              />
            </svg>
            <NavLink
              className="px-0"
              rounded="small"
              size={linkSize}
              href={navLinks[2].href}
              intent={intent}
            >
              {navLinks[2].name}
            </NavLink>
          </div>

          <div className="group relative w-fit" key={v4()}>
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className={cn(
                'absolute -z-20 -translate-y-1/2 overflow-visible fill-primary1 transition-all duration-slow group-hover:fill-tertiary20',
                pathname === '/contact' && '-z-10 fill-tertiary20'
              )}
            >
              <path
                d="M16.6,-33.7C21.7,-19.2,25.9,-14.5,35.1,-6.6C44.4,1.4,58.7,12.5,62.3,26.1C66,39.7,59,55.6,46.8,63.5C34.7,71.3,17.3,71,-0.2,71.3C-17.8,71.6,-35.5,72.5,-43.5,63.3C-51.4,54.1,-49.5,34.8,-56.2,17.5C-63,0.2,-78.3,-15.1,-78,-28.1C-77.6,-41.1,-61.5,-51.8,-45.9,-62.9C-30.3,-73.9,-15.1,-85.3,-4.7,-78.9C5.8,-72.5,11.6,-48.2,16.6,-33.7Z"
                transform="translate(110 115) scale(1.8, 0.9)"
              />
            </svg>
            <NavLink
              rounded="small"
              className="px-0"
              size={linkSize}
              href={navLinks[3].href}
              intent={intent}
            >
              {navLinks[3].name}
            </NavLink>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default MobileNav;
