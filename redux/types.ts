import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import {makeStore} from "./store";


type ConfiguredStore = ReturnType<typeof makeStore>;
type StoreGetState = ConfiguredStore["getState"];


export type RootState = ReturnType<StoreGetState>;
export type AppDispatch = ConfiguredStore["dispatch"];


export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
