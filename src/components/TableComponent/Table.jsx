import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { useBearStore } from '../../store/store';
import { Button } from '@mui/material';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
export default function DataTable() {
    const rows = useBearStore((state) => state.rows);
    const { handleDelete, handleEdit, setSelectedRows } = useBearStore();
    const columns = [
        { field: 'id', headerName: 'ID', width: 20 },
        { field: 'todo', headerName: 'Todo', width: 300 },
        { field: 'published', headerName: 'Khởi Tạo', width: 300 },
        {
            field: 'Thao Tác',
            headerName: 'Thao Tác',
            sortable: false,
            width: 300,
            renderCell: (params) => (
                <div><Button onClick={() => handleEdit(rows, params.row.id)} variant="contained" color="warning">Sửa <EditNoteIcon /></Button> | <Button onClick={() => handleDelete(params.row.id)} variant="contained" color="error">Xoá <DeleteForeverIcon /></Button></div>
            )
        },
    ]
    const paginationModel = { page: 0, pageSize: 5 };

    const handleSelectionChange = (ids) => {
        setSelectedRows(ids);
    };
    return (
        <Paper sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{ pagination: { paginationModel } }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
                onRowSelectionModelChange={handleSelectionChange}
                sx={{ border: 0 }}
            />
        </Paper>
    );
}