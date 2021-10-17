import { createSlice } from '@reduxjs/toolkit'

const initialState={
    books:[],
    lists:[],
    numberOfLists:9,
    prevScrollpos:window.pageYOffset,
    visible:true
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
      handleFetchBooks:(state,action)=>{
          state.lists=[...action.payload]
  },
  handleShowMore:(state,action)=>{
    state.numberOfLists+=6
  },


    
    },
  })
  
  
  export const {handleFetchBooks,handleShowMore} = counterSlice.actions
  
  export default counterSlice.reducer
