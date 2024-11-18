import {
    Container,
    TextField,
    Button,
    Box,
    Typography,
} from "@mui/material";
import { useState } from "react";
import { useBearStore } from "../../store/store";
import { formatDate } from "../../services/FormatDate";
export const TodoForm = () => {
    const store = useBearStore();
    const [input, setInput] = useState(store.editing ? store.editItem.todo : '');

    const handleAddTodo = () => {
        if (input.trim()) {
            const todo = {
                id: store.rows.length > 0 ? Math.max(...store.rows.map(todo => todo.id)) + 1 : 1,
                todo: input.trim(),
                published: formatDate(Date.now()),
            }
            store.setTodos(store.rows, todo);
            setInput("");
            store.setOpen(false);
        }
    };

    const handleUpdateTodo = () => {
        if (input.trim()) {

            const updatedTodo = {
                id: store.editItem.id,
                todo: input.trim(),
                published: formatDate(Date.now()),
            }
            store.updateTodos(store.rows, updatedTodo);
            setInput("");
            store.setOpen(false);
            store.setEditing(false);
            store.setEditItem(null);
        }
    }

    return (
        <Container maxWidth="sm" sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom>
                Todo App
            </Typography>

            <Box display="flex" gap={2} mb={3}>
                <TextField
                    label="Add a new todo"
                    variant="outlined"
                    fullWidth
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={store.editing ? handleUpdateTodo : handleAddTodo}
                    disabled={!input.trim()}
                >
                    {store.editing ? 'Cập Nhập' : 'Thêm'}
                </Button>
            </Box>
        </Container>
    );
};