import { createSlice } from '@reduxjs/toolkit'

export const searchTermSlice = createSlice({
    name: 'searchTerm',
    initialState: {
        searchTerm: ''
    },
    reducers: {
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload
        },
        clearSearchTerm: (state) => {
            state.searchTerm = ''
        }
    }
})

export const { setSearchTerm, clearSearchTerm } = searchTermSlice.actions
export default searchTermSlice.reducer





// const initialState = '';
// export const searchTermReducer = (
//   state = initialState,
//   action
// ) => {
//   switch (action.type) {
//     case 'searchTerm/setSearchTerm': {
//       const newTerm = action.payload;
//       return newTerm;
//     }
//     case 'searchTerm/clearSearchTerm': {
//       return '';
//     }
//     default: {
//       return state;
//     }
//   }
// };

// export const setSearchTerm = (term) => {
//   return {
//     type: 'searchTerm/setSearchTerm',
//     payload: term
//   };
// };

// export const clearSearchTerm = () => {
//   return {
//     type: 'searchTerm/clearSearchTerm',
//   };
// };

