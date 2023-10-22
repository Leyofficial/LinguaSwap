import toast from "react-hot-toast";

export function errorToaster(text : string) {
    toast.error(text);
}