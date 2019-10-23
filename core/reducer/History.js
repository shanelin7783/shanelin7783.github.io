export const FETCH_HISTORY = "FETCH_HISTORY";
export const FETCH_HISTORY_FULFILLED = "FETCH_HISTORY_FULFILLED";

export const fetchHistory = ({ reCheck = false, rows = 10 } = {}) => ({
    type: FETCH_HISTORY,
    reCheck,
    rows,
});
export const fetchHistoryFulfilled = (payload) => ({ type: FETCH_HISTORY_FULFILLED, payload });

const InitialState = {
    loading: false,
    list: [
        {expect: '201910255', numbers: "6,7,8,0,1", open_date_time: '2019-10-25 13:04:00'},
        {expect: '201910254', numbers: "3,3,2,9,7", open_date_time: '2019-10-25 13:03:00'},
        {expect: '201910253', numbers: "4,2,1,9,0", open_date_time: '2019-10-25 13:02:00'},
        {expect: '201910252', numbers: "2,5,5,6,1", open_date_time: '2019-10-25 13:01:00'},
        {expect: '201910251', numbers: "1,2,5,3,7", open_date_time: '2019-10-25 13:00:00'},
    ],
};

export default (state = InitialState, action) => {
    switch (action.type) {
        case FETCH_HISTORY:
            return {
                ...state,
                loading: true,
            };
        case FETCH_HISTORY_FULFILLED:
            const { list = [] } = action.payload;
            return {
                ...state,
                loading: false,
                list,
            };
        default:
            return state;
    }
};
