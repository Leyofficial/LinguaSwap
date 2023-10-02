import { initialState } from "../initialState";
import { FETCH_USER_PENDING } from "./loginactions";

const authReducer = (user = initialState.registerUser, action) => {
    switch (action.type) {
      case FETCH_USER_PENDING:
        return action.newUser;
      default:
        return user;
    }
};
  
export default authReducer;