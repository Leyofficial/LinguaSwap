import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "../Redux/combineReducer.ts";

export const useTypedSelector : TypedUseSelectorHook<RootState>  = useSelector