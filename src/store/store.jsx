import { create } from 'zustand'
export const useBearStore = create((set) => ({
    open: false,
    editing: false,
    editItem: null,
    selectedRows: [],
    setSelectedRows: (selectedRows) => set({ selectedRows }),
    setOpen: (open) => set({ open }),
    setEditing: (editing) => set({ editing }),
    setEditItem: (editItem) => set({ editItem }),
    rows: localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [],
    setTodos: (rows, todo = null) => {
        let newTodos
        if (todo == null) {
            newTodos = [...rows];
        } else {
            newTodos = [...rows, todo];
        }
        localStorage.setItem('todos', JSON.stringify(newTodos));
        console.log(newTodos);

        set({ rows: newTodos });
    },
    updateTodos: (rows, todo) => {
        console.log(todo);

        const updatedTodos = rows.map((row) =>
            row.id === todo.id ? { ...row, todo: todo.todo, published: todo.published } : row
        );

        localStorage.setItem("todos", JSON.stringify(updatedTodos));
        set({ rows: updatedTodos });
    },
    handleDelete: (id) => {
        if (confirm("Bạn có chắc muốn xoá mục này ???")) {
            set((state) => {
                const filteredTodos = state.rows.filter((row) => row.id !== id);
                localStorage.setItem("todos", JSON.stringify(filteredTodos));
                return { rows: filteredTodos };
            })
        }
    },

    handleEdit: (rows, id) => {
        console.log(id);
        let editItem = rows.find((item) => item.id === id);
        set({ editing: true, editItem: editItem, open: true });
    },
}))