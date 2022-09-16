 
 function setBasket(state, payload){
    const basket = payload;
    return {...state, basket}
 } 

 function setUser(state, payload){
    const user = payload;
    return { ...state, user}
 }
 
 function reducer (state = 0, action) {
    const payload = action.payload;
    switch (action.type) {
        case "SET_USER":
            return setUser(payload);
        case "SET_BASKET":
            return setBasket(payload);
      case "INCREMENT":
        return state + 1;
      case "DECREMENT":
        return state - 1;
      default:
        return state;
    }
  };

  export default reducer;