import { initialState } from "./initialState";

const mainReducer = (main = initialState.mainData, action) => {
    switch (action.type) {
        default: {
            return main
        }
    }
}

export default mainReducer