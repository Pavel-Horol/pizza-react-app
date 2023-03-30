import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    items: [],
    status: 'loading...', // loading | success | error

}

export const fetchPizzas = createAsyncThunk('pizza/fetchPizzasStatus',
    async (params, thunkApi) => {
        const {sortBy, order, category, search, currentPage} = params
        const  {data} = await axios.get(`https://64076122862956433e6de063.mockapi.io/pizzas?page=${currentPage}&limit=4&sortBy=${sortBy}&order=${order}&${category}&${search}`)
        if(data.length === 0){
            return thunkApi.rejectWithValue('Pizzas are absent')
        }
        return thunkApi.fulfillWithValue(data)
    }
)
const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        setItems(state, action){
            state.items = action.payload
        }
    },
    extraReducers: {
       [fetchPizzas.fulfilled]: (state, action) => {
        state.items = action.payload
        state.status = 'success'
       },
       [fetchPizzas.pending]: (state, action) => {
        state.status = 'loading'
        state.items = []

       },
       [fetchPizzas.rejected]: (state, action) => {
        console.log(action)
        state.status = 'error'
        state.items = []

       },
    }
})
export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer