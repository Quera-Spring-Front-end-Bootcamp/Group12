import { Modal as MantineModal } from '@mantine/core';

interface ModalProps {
    opened: boolean;
    onClose: () => void;
    title: string;
    size?: string;
}

export default function Modal({opened ,onClose , title, size} : ModalProps ) {

  return (
    <>
      <MantineModal opened={opened} onClose={onClose} title={title} size={size}>
      </MantineModal>

    </>
  );
}