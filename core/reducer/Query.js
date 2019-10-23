export const SET_QUERY = "SET_QUERY";
export const TOGGLE_MUTE = "TOGGLE_MUTE";
export const CLEAN_FIRST_TIME = "CLEAN_FIRST_TIME";

export const setQuery = (payload) => ({
    type: SET_QUERY,
    payload,
});

export const toggleMute = () => ({
    type: TOGGLE_MUTE,
});

export const cleanFirstTime = () => ({
    type: CLEAN_FIRST_TIME,
});

const InitialState = {
    os: "",
    vendor_id: "",
    first_time: false,
    currency: "RMB",
    mute: false,
    currency_rate: "1",
};

export default (state = InitialState, action) => {
    switch (action.type) {
        case SET_QUERY:
            const { os, vendor_id, first_time, currency, mute, currency_rate } = action.payload;
            return {
                ...state,
                os,
                vendor_id,
                first_time,
                currency,
                mute,
                currency_rate,
            };
        case TOGGLE_MUTE:
            return {
                ...state,
                mute: !state.mute,
            };
        case CLEAN_FIRST_TIME:
            return {
                ...state,
                first_time: false,
            };
        default:
            return state;
    }
};
