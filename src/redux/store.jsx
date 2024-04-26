// import { configureStore } from '@reduxjs/toolkit';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import rootReducer from './root-reduser';

// // Конфигурация для redux-persist
// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['favoriteCars', 'modalCar'],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: true, // Отключаем проверку на сериализуемость
//     }),
// });

// const persistor = persistStore(store);

// export { store, persistor };

import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './root-reduser';

// Конфигурация для redux-persist
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['favoriteCars'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

const persistor = persistStore(store);

export { store, persistor };