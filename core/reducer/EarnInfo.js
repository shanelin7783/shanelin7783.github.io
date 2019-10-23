export const FETCH_EARN_INFO = "FETCH_EARN_INFO";
export const FETCH_EARN_INFO_FULFILLED = "FETCH_EARN_INFO_FULFILLED";
export const CLEAR_BADGE = "CLEAR_BADGE";

export const fetchEarnInfo = (payload) => ({ type: FETCH_EARN_INFO, payload });
export const fetchEarnInfoFulfilled = (payload) => ({ type: FETCH_EARN_INFO_FULFILLED, payload });
export const setClearBadge = (expect) => ({ type: CLEAR_BADGE, expect });

const InitialState = {
    showBadge: false,
    clearBadge: {},
};

export default (state = InitialState, action) => {
    switch (action.type) {
        case FETCH_EARN_INFO_FULFILLED: {
            const { code } = action.payload;
            return {
                ...state,
                showBadge: code === 1,
            };
        }
        case CLEAR_BADGE: {
            const { expect } = action;
            return {
                ...state,
                clearBadge: {
                    ...state.clearBadge,
                    [expect]: true,
                },
                showBadge: false,
            };
        }
        default:
            return state;
    }
};
