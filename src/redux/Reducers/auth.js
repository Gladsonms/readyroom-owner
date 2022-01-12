//userstate
let userState;
if (window.localStorage.getItem("ownerData")) {
  userState = JSON.parse(window.localStorage.getItem("ownerData"));
} else {
  userState = null;
}

export const authReducer = (state = userState, action) => {
  switch (action.type) {
    case "LOGGED_IN_USER":
      return { ...state, ...action.payload };
    case "LOGOUT":
      return action.payload;
    default:
      return state;
  }
};
