import { _floorWithDigits } from "@core/libraries/utils";

export const SEND_BETLIST = "SEND_BETLIST";
export const SEND_BETLIST_FULFILLED = "SEND_BETLIST_FULFILLED";
export const SEND_BETLIST_FAILURE = "SEND_BETLIST_FAILURE";
export const CLEAN_BETLIST = "CLEAN_BETLIST";

export const sendBetList = (payload) => ({ type: SEND_BETLIST, payload });
export const sendBetListFulfilled = (payload) => ({ type: SEND_BETLIST_FULFILLED, payload });
export const sendBetListFailure = (payload) => ({ type: SEND_BETLIST_FAILURE, payload });
export const cleanBetList = () => ({ type: CLEAN_BETLIST });

const InitialState = {
    loading: false,
    code: "",
    expect: "",
    bet_amount: 0,
    desc: "",
};

export default (state = InitialState, action) => {
    switch (action.type) {
        case SEND_BETLIST: {
            return {
                ...InitialState,
                loading: true,
            };
        }
        case SEND_BETLIST_FULFILLED: {
            const { code = "", expect = "", bet_amount = 0 } = action.payload;
            return {
                ...state,
                code,
                expect,
                loading: false,
                bet_amount: _floorWithDigits(bet_amount, { comma: true }),
                desc: InitialState.desc,
            };
        }
        case SEND_BETLIST_FAILURE: {
            const { code = "", desc = "" } = action.payload;
            return {
                ...state,
                code,
                desc,
                loading: false,
                expect: InitialState.expect,
                bet_amount: InitialState.bet_amount,
            };
        }
        case CLEAN_BETLIST:
            return {
                ...InitialState,
            };
        default:
            return state;
    }
};
