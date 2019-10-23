import { _floorWithDigits } from "@core/libraries/utils";

export const TOUCH_TOKEN = "TOUCH_TOKEN";
export const TOUCH_TOKEN_REJECTED = "TOUCH_TOKEN_REJECTED";
export const SET_TOKEN = "SET_TOKEN";
export const DELETE_TOKEN = "DELETE_TOKEN";

export const FETCH_BALANCE = "FETCH_BALANCE";
export const FETCH_BALANCE_FULFILLED = "FETCH_BALANCE_FULFILLED";

export const touchToken = (token) => ({ type: TOUCH_TOKEN, token });
export const touchTokenRejected = (payload) => ({ type: TOUCH_TOKEN_REJECTED, payload });
export const setToken = ({ token }) => ({ type: SET_TOKEN, token });
export const deleteToken = () => ({ type: DELETE_TOKEN });

export const fetchBalance = () => ({ type: FETCH_BALANCE });
export const fetchBalanceFulfilled = (payload) => ({ type: FETCH_BALANCE_FULFILLED, payload });

const InitialState = {
    token: "",
    balance: 0,
};

export default (state = InitialState, action) => {
    switch (action.type) {
        case SET_TOKEN:
            return {
                ...state,
                token: action.token,
            };
        case DELETE_TOKEN:
            return {
                ...InitialState,
            };
        case FETCH_BALANCE_FULFILLED: {
            const { balance = 0 } = action.payload;
            return {
                ...state,
                balance: _floorWithDigits(balance, { comma: true }),
            };
        }
        default:
            return state;
    }
};
