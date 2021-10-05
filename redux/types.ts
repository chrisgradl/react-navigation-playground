import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {makeStore} from "./store";




// Infer the `RootState` and `AppDispatch` types from the store itself
const store = makeStore()
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
