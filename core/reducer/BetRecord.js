export const FETCH_BETRECORD = "FETCH_BETRECORD";
export const FETCH_BETRECORD_FULFILLED = "FETCH_BETRECORD_FULFILLED";

export const FETCH_BETRECORD_DETAIL = "FETCH_BETRECORD_DETAIL";
export const FETCH_BETRECORD_DETAIL_FULFILLED = "FETCH_BETRECORD_DETAIL_FULFILLED";

export const fetchBetRecord = ({ reCheck = false, rows = 100 } = {}) => ({
    type: FETCH_BETRECORD,
    reCheck,
    rows,
});
export const fetchBetRecordFulfilled = (payload) => ({ type: FETCH_BETRECORD_FULFILLED, payload });

export const fetchBetRecordDetail = (order_id) => ({
    type: FETCH_BETRECORD_DETAIL,
    order_id,
});

export const fetchBetRecordDetailFulfilled = (payload) => ({ type: FETCH_BETRECORD_DETAIL_FULFILLED, payload });

const InitialState = {
    loading: false,
    list: [
        {
            order_id: '112348356',
            expect: '201910251',
            bet_currency_amount: 1,
            status: 1,
            status_text: '未中獎',
            currency: 'RMB',
            bet_date_time: '2019-10-25 13:01:00'
        }
    ],
    detail: {},
};

export default (state = InitialState, action) => {
    switch (action.type) {
        case FETCH_BETRECORD:
            return {
                ...state,
                loading: true,
            };
        case FETCH_BETRECORD_FULFILLED:
            const { list = [] } = action.payload;
            return {
                ...state,
                loading: false,
                list,
            };
        case FETCH_BETRECORD_DETAIL:
            return {
                ...state,
                loading: true,
                detail: InitialState.detail,
            };
        case FETCH_BETRECORD_DETAIL_FULFILLED:
            return {
                ...state,
                loading: false,
                detail: action.payload,
            };
        default:
            return state;
    }
};
