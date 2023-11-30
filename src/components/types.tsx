export interface GifProps {
  id: string;
  title: string;
  images: {
    fixed_height: {
      url: string;
    };
  };
}