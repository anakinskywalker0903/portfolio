declare module '@/components/ui/Lanyard' {
  interface LanyardProps {
    position?: [number, number, number];
    gravity?: [number, number, number];
    fov?: number;
    transparent?: boolean;
    /** Pre-rendered data-URL for the front face. Use useIdCardTexture hook. */
    frontImage?: string | null;
    /** Pre-rendered data-URL for the back face. */
    backImage?: string | null;
    /** How the image fills the card UV rect. Default: 'contain' */
    imageFit?: 'cover' | 'contain';
    lanyardImage?: string | null;
    lanyardWidth?: number;
  }
  const Lanyard: (props: LanyardProps) => JSX.Element;
  export default Lanyard;
}
