import React from "react";

interface ListProps<T> {
    items : T[] | any,
    rerender : (item : T , index : number) => React.ReactNode;
}

function List<T>(props : ListProps<T>) {
    if (!props.items) {
        return null;
    }

    return (
        <>{props.items.map(props.rerender)}</>
    )

}
export default List

