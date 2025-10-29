import { create } from 'zustand';

interface ImageModalStore {
  images: string[];
  title: string;
  setImages: (images: string[], title: string) => void;
}

const useImageModal = create<ImageModalStore>((set) => ({
  images: [],
  title: '',
  setImages: (images, title) => set({ images, title }),
}));

export default useImageModal;
