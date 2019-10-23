import { keyBy, sortBy } from "lodash";

export const FETCH_CONFIG = "FETCH_CONFIG";
export const FETCH_CONFIG_FULFILLED = "FETCH_CONFIG_FULFILLED";

export const FETCH_INTRODUCTION = "FETCH_INTRODUCTION";
export const FETCH_INTRODUCTION_FULFILLED = "FETCH_INTRODUCTION_FULFILLED";

export const CHANGE_GAME = "CHANGE_GAME";
export const CHANGE_KIND = "CHANGE_KIND";
export const STOP_RETRY = "STOP_RETRY";

export const fetchConfig = () => ({ type: FETCH_CONFIG });
export const fetchConfigFulfilled = (payload) => ({ type: FETCH_CONFIG_FULFILLED, payload });

export const fetchIntroduction = () => ({ type: FETCH_INTRODUCTION });
export const fetchIntroductionFulfilled = ({ introduction = "" }) => ({
    type: FETCH_INTRODUCTION_FULFILLED,
    introduction,
});

export const changeGame = (game_code) => ({ type: CHANGE_GAME, game_code });
export const changeKind = (kind) => ({ type: CHANGE_KIND, kind });

export const stopRetry = () => ({ type: STOP_RETRY });

const InitialState = {
    loading: false,
    config: {
        ssc_n1: [
            {
                list: [
                    {
                        game: [
                            {
                                id: 'ssc_n1_dxds',
                                odds: 1,
                                name: '混合',
                                rule: {
                                    a: {
                                        name: '万位', num: [ 'b','s','sn','dn'],
                                    },
                                    b: {
                                        name: '千位', num: [ 'b','s','sn','dn'],
                                    },
                                    c: {
                                        name: '百位', num: [ 'b','s','sn','dn'],
                                    },
                                    d: {
                                        name: '十位', num: [ 'b','s','sn','dn'],
                                    },
                                    e: {
                                        name: '个位', num: [ 'b','s','sn','dn'],
                                    }
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    introduction: "時時彩是中國福利彩票發行管理中心組織發行的即開型數字彩票，玩法簡單多樣、固定獎金、中獎率高",
    game_kind: "",
};

export default (state = InitialState, action) => {
    switch (action.type) {
        case FETCH_CONFIG:
            return {
                ...state,
                loading: true,
            };
        case FETCH_CONFIG_FULFILLED: {
            let { config, config_group, category } = action.payload;
            const { bet_odds_config = [], color_config = {}, bet_lower_limit = 1, bet_upper_limit = 1 } = config;
            if (category == "marksix") {
                const { red_numbers, blue_numbers, green_numbers } = color_config;
                const allNumbers = sortBy([...red_numbers, ...blue_numbers, ...green_numbers]);
                config = {
                    ...config,
                    bet_lower_limit: Number(bet_lower_limit),
                    bet_upper_limit: Number(bet_upper_limit),
                    bet_odds_config: keyBy(bet_odds_config, "bet_type"),
                    numbers_config: _transformColorConfig(color_config),
                    tails_config: allNumbers.reduce((prev, cur) => {
                        if (!prev[cur % 10]) prev[cur % 10] = [cur];
                        else prev[cur % 10].push(cur);
                        return prev;
                    }, {}),
                };
            }

            if (config_group == "pc28") {
                config = {
                    ...config,
                    bet_lower_limit: Number(bet_lower_limit),
                    bet_upper_limit: Number(bet_upper_limit),
                    bet_odds_config: keyBy(bet_odds_config, "bet_type"),
                    numbers_config: _transformColorConfig(color_config),
                };
            }

            if (config_group == "pc28_n1") {
                config = {
                    ...config,
                    bet_lower_limit: Number(bet_lower_limit),
                    bet_upper_limit: Number(bet_upper_limit),
                    bet_odds_config: keyBy(bet_odds_config, "bet_type"),
                };
            }

            return {
                ...state,
                loading: false,
                config: {
                    ...state.config,
                    [config_group]: config,
                },
            };
        }
        case FETCH_INTRODUCTION_FULFILLED:
            const { introduction } = action;
            return {
                ...state,
                introduction,
            };
        case CHANGE_KIND:
            return {
                ...state,
                game_kind: action.kind,
            };

        default:
            return state;
    }
};

const _transformColorConfig = (color_config = {}) => {
    const { red_numbers, blue_numbers, green_numbers } = color_config;
    return red_numbers.reduce(
        (prev, cur) => {
            prev[cur] = "red";
            return prev;
        },
        blue_numbers.reduce(
            (prev, cur) => {
                prev[cur] = "blue";
                return prev;
            },
            green_numbers.reduce((prev, cur) => {
                prev[cur] = "green";
                return prev;
            }, {}),
        ),
    );
};
