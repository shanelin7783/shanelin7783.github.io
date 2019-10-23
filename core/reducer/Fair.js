export const FETCH_FAIR = "FETCH_FAIR";
export const FETCH_FAIR_FULFILLED = "FETCH_FAIR_FULFILLED";
export const FETCH_FAIR_FAILURE = "FETCH_FAIR_FAILURE";

export const fetchFair = () => ({ type: FETCH_FAIR });
export const fetchFairFulfilled = (payload) => ({ type: FETCH_FAIR_FULFILLED, payload });
export const fetchFairFailure = () => ({ type: FETCH_FAIR_FAILURE });

const InitialState = {
    loading: "",
    url: "",
    isError: false,
};

export default (state = InitialState, action) => {
    switch (action.type) {
        case FETCH_FAIR: {
            return {
                ...state,
                loading: true,
                url: "",
                isError: false,
            };
        }
        case FETCH_FAIR_FULFILLED: {
            return {
                ...state,
                loading: false,
                url: action.payload,
                isError: false,
            };
        }
        case FETCH_FAIR_FULFILLED: {
            return {
                ...state,
                loading: false,
                url: "",
                isError: true,
            };
        }

        default:
            return state;
    }
};
