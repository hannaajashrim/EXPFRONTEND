import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories:[],
    expensemodel:[]
}
export const expenseSlice = createSlice({
    name:'Expense',
    initialState,
    reducers:{
        getExpensemodel:(state)=>{

        }
    }

})

export const {getExpensemodel} = expenseSlice.actions;
export default expenseSlice.reducer;