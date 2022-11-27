import Box from "@mui/material/Box";
import ModalComponent from "@mui/material/Modal";
import { colors } from "@/components/styles/variables";

type ModalType = {
  open: boolean;
  setOpen: any;
  children: any;
  className?: any;
  modalStyle?: any;
};

const basicStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  borderRadius: "5px",
  background: "red",
};

const Modal = ({
  open,
  setOpen,
  children,
  modalStyle,
  className,
  ...props
}: ModalType) => {
  const style = { ...basicStyle, ...modalStyle };
  return (
    <ModalComponent
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className={className}
    >
      <Box
        sx={{
          ...style,
          background: colors.background,
          color: colors.text,
        }}
      >
        {children}
      </Box>
    </ModalComponent>
  );
};

export default Modal;
