import { setUserAction,
setBasketAction } from "../actions/actions";

export const setUserDispatch = dispatch => payload => {
    dispatch(setUserAction(payload))
}

export const setBasketDispatch = dispatch => payload => {
    dispatch(setBasketAction(payload))
}