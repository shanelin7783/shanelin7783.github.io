export const FETCH_RECENTINFO = "FETCH_RECENTINFO";
export const FETCH_RECENTINFO_FULFILLED = "FETCH_RECENTINFO_FULFILLED";
export const CURRENT_FINISHEN = "CURRENT_FINISHEN";
export const SET_SERVER_TIME = "SET_SERVER_TIME";

export const fetchRecentInfo = (payload = {}) => ({ type: FETCH_RECENTINFO, payload });
export const fetchRecentInfoFulfilled = (payload) => ({ type: FETCH_RECENTINFO_FULFILLED, payload });
export const currentFinished = () => ({ type: CURRENT_FINISHEN });

const InitialState = {
    loading: false,
    current: {},
    next: {},
    previous: {},
    recent_code: "",
};

export default (state = InitialState, action) => {
    switch (action.type) {
        case FETCH_RECENTINFO:
            return {
                ...state,
                loading: true,
            };
        case FETCH_RECENTINFO_FULFILLED:
            const { current = {}, next = {}, previous = {} } = action.payload.info || {};
            return {
                ...state,
                loading: false,
                current,
                next,
                previous,
                recent_code: action.payload.recent_code,
            };
        case CURRENT_FINISHEN:
            return {
                ...state,
                previous: state.current,
                current: state.next,
                next: {},
            };
        default:
            return state;
    }
};
