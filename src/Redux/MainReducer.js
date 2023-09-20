import { initialState } from "./initialState";

const mainReducer = (test = initialState.test, action) => {
    switch (action.type) {
        default: {
            return test
        }
    }
}

export default mainReducer