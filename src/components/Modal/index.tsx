import { Modal as MantineModal } from '@mantine/core';

interface ModalProps {
    opened: boolean;
    onClose: () => void;
    title: string;
    size?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}

export default function Modal({children ,opened ,onClose , title, size, style} : ModalProps ) {

  return (
    <>
      <MantineModal opened={opened} onClose={onClose} title={title} size={size} style={style}>
        {children}
      </MantineModal>

    </>
  );
}