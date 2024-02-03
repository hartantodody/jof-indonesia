export interface ImageCarouselProps {
  src: string;
  title: string;
  description: string;
  venue?: string;
  held?: string;
}

export interface ModalProps {
  text: string;
  buttonText: string;
  handleClose: () => void;
}
