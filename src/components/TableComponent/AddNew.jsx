import { Button } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import { useBearStore } from "../../store/store";
import { ModalComponent } from "./Modal";
export const AddNew = () => {
    const store = useBearStore();
    function openModal() {
        store.setOpen(true);
    }
    return (
        <div className="flex justify-end mb-3">
            <Button onClick={() => openModal()} variant="contained" endIcon={<AddIcon />}>
                Thêm Mới
            </Button>
            <ModalComponent />
        </div>
    )
}