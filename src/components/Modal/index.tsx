import { Modal as MantineModal } from '@mantine/core';
import { ModalProps as MantineModalProps } from '@mantine/core';

export default function Modal(props: MantineModalProps) {
  return (
    <>
      <MantineModal {...props}></MantineModal>
    </>
  );
}
