import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { IoMdClose } from "react-icons/io";

interface ModalProps {
  isOpen: boolean;
  onChange: (open: boolean) => void;
  title: string;
  description: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onChange,
  title,
  description,
  children,
}) => {
  return (
    <Dialog.Root open={isOpen} defaultOpen={isOpen} onOpenChange={onChange}>
      <Dialog.Portal>
        <Dialog.Overlay
          className="bg-black/60 backdrop-blur-md fixed inset-0"
          style={{
            animation: 'modalFadeIn 0.2s ease-out forwards'
          }}
        />
        <Dialog.Content
          className="fixed drop-shadow-md border border-white/10 top-[50%] left-[50%]
          max-h-full h-full md:h-auto md:max-h-[85vh] w-full md:w-[90vw] md:max-w-[900px]
          translate-x-[-50%] translate-y-[-50%] rounded-lg bg-[#0A0A0A] p-[25px] focus:outline-none"
          style={{
            animation: 'modalZoomIn 0.2s ease-out forwards'
          }}
        >
            <Dialog.Title className="text-xl text-white font-bold mb-4">
                {title}
            </Dialog.Title>
            <Dialog.Description className="mb-5 text-sm leading-normal text-white/60">
                {description}
            </Dialog.Description>
            <div className="">
                {children}
            </div>
            <Dialog.Close asChild>
                <button className="text-white/60 hover:text-white absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px]
                appearance-none items-center justify-center rounded-full focus:outline-none transition-colors duration-200">
                    <IoMdClose size={20} />
                </button>
            </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
