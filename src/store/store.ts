import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { rtkQueryErrorLogger } from '../middleware/middleware';
import { setupListeners } from '@reduxjs/toolkit/query';
import clientReducer from '../pages/site/client.slice';
import { clientApi } from '../pages/site/client.service';
import categoriesReducer from '../pages/admin/Categories/categories.slice';
import { categoriesApi } from '../pages/admin/Categories/categories.service';
import productsReducer from '../pages/admin/Products/product.slice';
import { productsApi } from '../pages/admin/Products/products.service';

const rootReducer = combineReducers({
  client: clientReducer,
  [clientApi.reducerPath]: clientApi.reducer,

  categories: categoriesReducer,
  [categoriesApi.reducerPath]: categoriesApi.reducer,

  products: productsReducer,
  [productsApi.reducerPath]: productsApi.reducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      clientApi.middleware,
      categoriesApi.middleware,
      productsApi.middleware,
      rtkQueryErrorLogger
    )
});

// Cài đặt listeners cho các tính năng như refetchOnFocus/refetchOnReconnect
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
