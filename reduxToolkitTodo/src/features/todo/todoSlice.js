import { createSlice,nanoid } from "@reduxjs/toolkit";

// create slice is used for making reducers
// nanoid is used to generate unique id's


// make a initial state for you store 
const initialState = {
    todos : []
}


// now we'll make a slice =>slicer is just a bigger version of reducer

export const todoSlice=createSlice({
    // every slice has a name
    name: 'todo',
    initialState,
    // reducers have properties and functions
    reducers: {
        // in redux we get access to two things one is state and other is action 
        // state gives the current values in store 
        
        addTodo: (state,action)=>{
            const todo={
                id: nanoid(),
                text:action.payload
            }
            // updating state
            state.todos.push(todo)
        },
        removeTodo: (state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
        },
        updateTodo:(state,action)=>{
            console.log("hi i am shresht")
            console.log(action.payload.id)
            state.todos = state.todos.map((todo) => {
                if (todo.id === action.payload.id) {
                  console.log("found"); // Log when the todo is found
                  return { ...todo, text: action.payload.input }; // Update the todo with new input
                } else {
                  console.log("not found"); // Log when not found
                  return todo; // Keep the todo unchanged
                }
              });
            }
        
    }
})

export const {addTodo,removeTodo,updateTodo}=todoSlice.actions

export default todoSlice.reducer 
