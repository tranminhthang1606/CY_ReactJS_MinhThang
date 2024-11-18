import { ModalContent } from '../ReusingComponent/ModalContent';
import { useBearStore } from '../../store/store';
import { Modal } from "@mui/material"
import { TodoForm } from '../ReusingComponent/TodoForm';
export const ModalComponent = () => {


    const store = useBearStore();
    const handleClose = () => {
        store.setOpen(false);
    }

    return (
        <Modal
            aria-labelledby="unstyled-modal-title"
            aria-describedby="unstyled-modal-description"
            open={store.open}
            onClose={handleClose}
        >
            <ModalContent sx={{ width: 400 }}>
                <TodoForm />
            </ModalContent>
        </Modal>
    )
}