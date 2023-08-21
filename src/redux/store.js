import { configureStore } from '@reduxjs/toolkit';
import cart from '../redux/slices/cartSlice'; 
import favorites from '../redux/slices/favoritesSlice'; 
import search from '../redux/slices/searchSlice'; 
import category from '../redux/slices/categoriesSlice';

const store = configureStore({
  reducer: {
    cart,
    favorites,
    search,
    category,
  }
});

export default store;