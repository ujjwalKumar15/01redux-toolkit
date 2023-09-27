import { createSlice, nanoid, current } from "@reduxjs/toolkit";

const initialState = {
    users: [],
    edit: {}
}

const userSlice = createSlice({
    name: 'userReducers',
    initialState,
    reducers: {
        addUser: (state, action) => {

            let newUser = {
                id: nanoid(),
                name: action.payload
            }
            
            state.users.push(newUser);
        },
        editUser: (state, action) => {

            let editName = {
                id: action.payload.id,
                name: action.payload.name
            }
            state.edit = editName;
        },
        updateUser: (state, action) => {
            // console.log(current(state));
            state.users = state.users.map((items) => items.id === action.payload.id ? { ...items, id: action.payload.id, name: action.payload.name } : items)
        },
        deleteUser : (state,action) =>{

            state.users = state.users.filter((items)=> items.id !== action.payload)

        }
    }
})

export const { addUser, editUser, updateUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;