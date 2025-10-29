"use client";

import Modal from "@/app/components/Modal";
import useModal from "@/app/hooks/useModal";
import useImageModal from "@/app/hooks/useImageModal";
import ImageSlider from "@/app/components/ImageSlider";
import { useEffect, useState } from "react";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { isOpen, onClose } = useModal();
  const { images, title } = useImageModal();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Modal
      isOpen={isOpen}
      onChange={onClose}
      title={`${title} - Images`}
      description="Gallery of project images"
    >
      <ImageSlider images={images} title={title} />
    </Modal>
  );
};

export default ModalProvider;
