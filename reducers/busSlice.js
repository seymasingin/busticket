import { createSlice } from '@reduxjs/toolkit'
import buses from '../Buses.js'

const initialState = {
  allbuses: buses,
}

export const busSlice = createSlice({
    name: "bus",
    initialState,
    reducers:{
        
    }
})
 
export default busSlice.reducer;


