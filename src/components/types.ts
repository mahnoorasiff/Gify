export interface IGifProps {
  id: string;
  title: string;
  images: {
    fixed_height: {
      url: string;
    };
  };
}