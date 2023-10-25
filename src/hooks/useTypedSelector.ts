import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "../Redux/rootReduce.ts";


export const useTypedSelector : TypedUseSelectorHook<RootState>  = useSelector