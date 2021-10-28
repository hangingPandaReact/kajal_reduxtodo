import { configureStore } from '@reduxjs/toolkit'
import { reducer } from './reducer'
//imported reducer.js file
const store = configureStore({
        reducer:reducer
});

export default store;
