import { Button } from "@mui/material"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useBearStore } from "../../store/store";
import { ModalComponent } from "./Modal";
export const DeleteSelectedButton = () => {
    const { rows, selectedRows, setSelectedRows, setTodos } = useBearStore();
    const removeSelectedRows = () => {
        if (selectedRows.length == 0) {
            return;
        }
        if (confirm("Bạn có chắc muốn xoá các mục đã chọn ??")) {
            const newRows = rows.filter((row) => {
                return !selectedRows.includes(row.id);
            })
            setTodos(newRows);
            setSelectedRows([]);
        }
    }
    return (
        <div className="flex justify-end mb-3">
            <Button onClick={removeSelectedRows} variant="contained" color="error" endIcon={<DeleteForeverIcon />}>
                Xoá các mục đã chọn
            </Button>
            <ModalComponent />
        </div>
    )
}