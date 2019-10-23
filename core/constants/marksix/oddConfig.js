import { KIND_TYPE } from "./index";

export const SPECIAL_LIST = [
    "special_big",
    "special_small",
    "special_odd",
    "special_even",
    "special_big_odd",
    "special_big_even",
    "special_small_odd",
    "special_small_even",
    "special_sum_big",
    "special_sum_small",
    "special_sum_odd",
    "special_sum_even",
    "special_tail_big",
    "special_tail_small",
];

export const SUM_LIST = [...SPECIAL_LIST, "sum_big", "sum_small", "sum_odd", "sum_even"];

export const REGULAR_UNIT = [
    "regular_unit_odd",
    "regular_unit_even",
    "regular_unit_big",
    "regular_unit_small",
    "regular_unit_sum_odd",
    "regular_unit_sum_even",
    "regular_unit_sum_big",
    "regular_unit_sum_small",
    "regular_unit_green",
    "regular_unit_red",
    "regular_unit_blue",
    "regular_unit_tail_big",
    "regular_unit_tail_small",
];

export const REGULAR_LIST = [1, 2, 3, 4, 5, 6].map((v) => REGULAR_UNIT.map((type) => type.replace("unit", v)));

export const REGULAR_ODD = {
    [KIND_TYPE.REGULAR]: "regular_number",
    [KIND_TYPE.REGULAR_1]: "regular_1",
    [KIND_TYPE.REGULAR_2]: "regular_2",
    [KIND_TYPE.REGULAR_3]: "regular_3",
    [KIND_TYPE.REGULAR_4]: "regular_4",
    [KIND_TYPE.REGULAR_5]: "regular_5",
    [KIND_TYPE.REGULAR_6]: "regular_6",
    [KIND_TYPE.REGULAR_1_6]: REGULAR_LIST,
};

export const COLOR_LIST = {
    BALL: ["special_red", "special_blue", "special_green"],
    ONE_COMB: [
        "special_red_odd",
        "special_red_even",
        "special_red_big",
        "special_red_small",
        "special_blue_odd",
        "special_blue_even",
        "special_blue_big",
        "special_blue_small",
        "special_green_odd",
        "special_green_even",
        "special_green_big",
        "special_green_small",
    ],
    TWO_COMB: [
        "special_red_big_odd",
        "special_red_big_even",
        "special_red_small_odd",
        "special_red_small_even",
        "special_red_sum_odd",
        "special_red_sum_even",
        "special_blue_big_odd",
        "special_blue_big_even",
        "special_blue_small_odd",
        "special_blue_small_even",
        "special_blue_sum_odd",
        "special_blue_sum_even",
        "special_green_big_odd",
        "special_green_big_even",
        "special_green_small_odd",
        "special_green_small_even",
        "special_green_sum_odd",
        "special_green_sum_even",
    ],
};

export const TAIL_LIST = [
    "special_head_0",
    "special_head_1",
    "special_head_2",
    "special_head_3",
    "special_head_4",
    "special_tail_1",
    "special_tail_2",
    "special_tail_3",
    "special_tail_4",
    "special_tail_5",
    "special_tail_6",
    "special_tail_7",
    "special_tail_8",
    "special_tail_9",
    "special_tail_0",
];

export const ZODIAC_LIST = {
    [KIND_TYPE.SPECIAL_ZODIAC]: "special_zodiac_",
    [KIND_TYPE.REGULAR_ZODIAC]: "regular_zodiac_",
    [KIND_TYPE.SERIAL_2_ZODIAC]: "serial_2_zodiac",
    [KIND_TYPE.SERIAL_3_ZODIAC]: "serial_3_zodiac",
    [KIND_TYPE.SERIAL_4_ZODIAC]: "serial_4_zodiac",
    [KIND_TYPE.SERIAL_5_ZODIAC]: "serial_5_zodiac",
    [KIND_TYPE.SERIAL_2_ZODIAC_NO_HIT]: "serial_2_zodiac_not_hit",
    [KIND_TYPE.SERIAL_3_ZODIAC_NO_HIT]: "serial_3_zodiac_not_hit",
    [KIND_TYPE.SERIAL_4_ZODIAC_NO_HIT]: "serial_4_zodiac_not_hit",
};

export const SERIAL_LIST = {
    [KIND_TYPE.SPECIAL_SERIAL]: "serial_special_mix",
    [KIND_TYPE.SERIAL_3_HIT_3]: "regular_3_hit_3",
    [KIND_TYPE.SERIAL_3_HIT_2]: "regular_3_hit_2",
    [KIND_TYPE.SERIAL_2_HIT_2]: "regular_2_hit_2",
    [KIND_TYPE.SERIAL_4_HIT_1]: "regular_4_hit_1",
    [KIND_TYPE.SERIAL_5_NO_HIT]: "serial_5_not_hit",
    [KIND_TYPE.SERIAL_6_NO_HIT]: "serial_6_not_hit",
    [KIND_TYPE.SERIAL_7_NO_HIT]: "serial_7_not_hit",
    [KIND_TYPE.SERIAL_8_NO_HIT]: "serial_8_not_hit",
    [KIND_TYPE.SERIAL_9_NO_HIT]: "serial_9_not_hit",
    [KIND_TYPE.SERIAL_10_NO_HIT]: "serial_10_not_hit",
    [KIND_TYPE.SERIAL_11_NO_HIT]: "serial_11_not_hit",
    [KIND_TYPE.SERIAL_12_NO_HIT]: "serial_12_not_hit",
    [KIND_TYPE.SERIAL_2_TAIL]: "serial_2_tail",
    [KIND_TYPE.SERIAL_2_TAIL_NO_HIT]: "serial_2_tail_not_hit",
    [KIND_TYPE.SERIAL_3_TAIL]: "serial_3_tail",
    [KIND_TYPE.SERIAL_3_TAIL_NO_HIT]: "serial_3_tail_not_hit",
    [KIND_TYPE.SERIAL_4_TAIL]: "serial_4_tail",
    [KIND_TYPE.SERIAL_4_TAIL_NO_HIT]: "serial_4_tail_not_hit",
};

export const ZODIAC_TAIL_LIST = {
    ZODIAC: [
        "zodiac_1",
        "zodiac_2",
        "zodiac_3",
        "zodiac_4",
        "zodiac_5",
        "zodiac_6",
        "zodiac_7",
        "zodiac_8",
        "zodiac_9",
        "zodiac_10",
        "zodiac_11",
        "zodiac_12",
    ],
    TAIL: ["tail_0", "tail_1", "tail_2", "tail_3", "tail_4", "tail_5", "tail_6", "tail_7", "tail_8", "tail_9"],
};

export const ZODIAC_AMOUNT_LIST = [
    "zodiac_amount_2",
    "zodiac_amount_3",
    "zodiac_amount_4",
    "zodiac_amount_5",
    "zodiac_amount_6",
    "zodiac_amount_7",
    "zodiac_amount_odd",
    "zodiac_amount_even",
];

export const ZODIAC_MULTI_LIST = [
    "special_multi_2_zodiac",
    "special_multi_3_zodiac",
    "special_multi_4_zodiac",
    "special_multi_5_zodiac",
    "special_multi_6_zodiac",
    "special_multi_7_zodiac",
    "special_multi_8_zodiac",
    "special_multi_9_zodiac",
    "special_multi_10_zodiac",
    "special_multi_11_zodiac",
];
