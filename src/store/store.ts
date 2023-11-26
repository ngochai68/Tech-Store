import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { rtkQueryErrorLogger } from '../middleware/middleware';
import { setupListeners } from '@reduxjs/toolkit/query';
import clientReducer from '../pages/site/client.slice';
import { clientApi } from '../pages/site/client.service';
// Import các reducers khác nếu bạn có

const rootReducer = combineReducers({
  client: clientReducer,
  [clientApi.reducerPath]: clientApi.reducer
  // Thêm các reducers khác ở đây
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(clientApi.middleware, rtkQueryErrorLogger)
});

// Cài đặt listeners cho các tính năng như refetchOnFocus/refetchOnReconnect
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
