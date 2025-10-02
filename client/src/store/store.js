import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slice/user/userSlice';
import messageReducer from './slice/message/messageSlice';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "user",
    storage,
    whitelist: ["isAuthenticated"]
};

const persistedReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
    reducer: {
        user: persistedReducer,
        message: messageReducer
    }
});

export const persistor = persistStore(store);