import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [
    {
      id: 1,
      name: "Alice Johnson",
      age: 20,
      grade: "A",
      email: "alice@example.com",
    },
    { id: 2, name: "Bob Smith", age: 22, grade: "B", email: "bob@example.com" },
    {
      id: 3,
      name: "Charlie Brown",
      age: 19,
      grade: "A-",
      email: "charlie@example.com",
    },
  ],
};

const studentSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    addStudent: (state, action) => {
      state.list.push({ ...action.payload, id: Date.now() }); // Simple ID generation
    },
    editStudent: (state, action) => {
      const index = state.list.findIndex(
        (student) => student.id === action.payload.id
      );
      if (index !== -1) {
        state.list[index] = action.payload;
      }
    },
    deleteStudent: (state, action) => {
      state.list = state.list.filter(
        (student) => student.id !== action.payload
      );
    },
  },
});

export const { addStudent, editStudent, deleteStudent } = studentSlice.actions;
export default studentSlice.reducer;
