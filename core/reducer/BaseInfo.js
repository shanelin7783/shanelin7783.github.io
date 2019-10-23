export const FETCH_BASEINFO = "FETCH_BASEINFO";
export const FETCH_BASEINFO_FULFILLED = "FETCH_BASEINFO_FULFILLED";
export const SET_GAME_INFO = "SET_GAME_INFO";

export const fetchBaseInfo = () => ({ type: FETCH_BASEINFO });
export const fetchBaseInfoFulfilled = (payload) => ({ type: FETCH_BASEINFO_FULFILLED, payload });
export const setGameInfo = (game_code) => ({ type: SET_GAME_INFO, game_code });

const InitialState = {
    loading: false,
    game_list: {},
    game_list_by_category: {},
    game_list_by_config_group: {},
    game_code: "as5fcn1_f",
    game_name: "學貓叫",
    game_group: "ssc_n1",
};

export default (state = InitialState, action) => {
    switch (action.type) {
        case FETCH_BASEINFO:
            return {
                ...state,
                loading: true,
            };
        case FETCH_BASEINFO_FULFILLED: {
            const { game_list, game_list_by_category, game_list_by_config_group } = action.payload;
            return {
                ...state,
                loading: false,
                game_list,
                game_list_by_category,
                game_list_by_config_group,
            };
        }
        case SET_GAME_INFO: {
            const { game_code } = action;
            const { game_list = {} } = state;
            const { name = "", config_group = "" } = game_list[game_code] || {};
            return {
                ...state,
                game_code,
                game_name: name,
                game_group: config_group,
            };
        }
        default:
            return state;
    }
};
