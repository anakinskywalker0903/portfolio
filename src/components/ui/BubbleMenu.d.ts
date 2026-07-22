import React from 'react';

export interface BubbleMenuItem {
  label: string;
  href: string;
  ariaLabel?: string;
  rotation?: number;
  translateY?: number;
  hoverStyles?: {
    bgColor?: string;
    textColor?: string;
  };
}

export interface BubbleMenuProps {
  logo?: React.ReactNode;
  items?: BubbleMenuItem[];
  className?: string;
  style?: React.CSSProperties;
  menuAriaLabel?: string;
  menuBg?: string;
  menuContentColor?: string;
  useFixedPosition?: boolean;
  animationEase?: string;
  animationDuration?: number;
  onOpenResume?: () => void;
}

declare const BubbleMenu: React.FC<BubbleMenuProps>;
export default BubbleMenu;
