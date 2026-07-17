declare module '@/components/ui/BubbleMenu' {
  import { CSSProperties, ReactNode } from 'react';

  interface HoverStyles {
    bgColor?: string;
    textColor?: string;
  }

  interface MenuItem {
    label: string;
    href: string;
    ariaLabel?: string;
    rotation?: number;
    hoverStyles?: HoverStyles;
  }

  interface BubbleMenuProps {
    logo?: ReactNode | string;
    onMenuClick?: (open: boolean) => void;
    className?: string;
    style?: CSSProperties;
    menuAriaLabel?: string;
    menuBg?: string;
    menuContentColor?: string;
    useFixedPosition?: boolean;
    items?: MenuItem[];
    animationEase?: string;
    animationDuration?: number;
    staggerDelay?: number;
  }

  const BubbleMenu: (props: BubbleMenuProps) => JSX.Element;
  export default BubbleMenu;
}
