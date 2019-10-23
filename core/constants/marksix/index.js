export const TAB_TYPE = {
    SPECIAL: "SPECIAL", // 特碼
    SUM: "SUM", // 两面
    REGULAR: "REGULAR", // 正码
    COLOR: "COLOR", // 色波
    TAIL: "TAIL", // 头尾数
    ZODIAC: "ZODIAC", // 生肖
    SERIAL: "SERIAL", // 连码
    ZODIAC_TAIL: "ZODIAC_TAIL", // 一肖尾数
    ZODIAC_AMOUNT: "ZODIAC_AMOUNT", // 总肖
    ZODIAC_MULTI: "ZODIAC_MULTI", // 合肖
};

export const KIND_TYPE = {
    DEFAULT: "DEFAULT", // 沒玩法
    // 正码
    REGULAR: "REGULAR", // 正码
    REGULAR_1: "REGULAR_1", // 正一特
    REGULAR_2: "REGULAR_2", // 正二特
    REGULAR_3: "REGULAR_3", // 正三特
    REGULAR_4: "REGULAR_4", // 正四特
    REGULAR_5: "REGULAR_5", // 正五特
    REGULAR_6: "REGULAR_6", // 正六特
    REGULAR_1_6: "REGULAR_1_6", // 正码1-6
    // 正码 (小網)
    REGULAR_1_6_1: "REGULAR_1_6_1", // 正码1-6-1
    REGULAR_1_6_2: "REGULAR_1_6_2", // 正码1-6-2
    REGULAR_1_6_3: "REGULAR_1_6_3", // 正码1-6-3
    REGULAR_1_6_4: "REGULAR_1_6_4", // 正码1-6-4
    REGULAR_1_6_5: "REGULAR_1_6_5", // 正码1-6-5
    REGULAR_1_6_6: "REGULAR_1_6_6", // 正码1-6-6
    // 色波 (小網)
    BALL: "BALL", // 色波
    ONE_COMB: "ONE_COMB", // 半波
    TWO_COMB: "TWO_COMB", // 半半波
    // 生肖
    SPECIAL_ZODIAC: "SPECIAL_ZODIAC", // 特肖
    REGULAR_ZODIAC: "REGULAR_ZODIAC", // 正肖
    SERIAL_2_ZODIAC: "SERIAL_2_ZODIAC", // 二肖
    SERIAL_3_ZODIAC: "SERIAL_3_ZODIAC", // 三肖
    SERIAL_4_ZODIAC: "SERIAL_4_ZODIAC", // 四肖
    SERIAL_5_ZODIAC: "SERIAL_5_ZODIAC", // 五肖
    SERIAL_2_ZODIAC_NO_HIT: "SERIAL_2_ZODIAC_NO_HIT", // 二肖连不中
    SERIAL_3_ZODIAC_NO_HIT: "SERIAL_3_ZODIAC_NO_HIT", // 三肖连不中
    SERIAL_4_ZODIAC_NO_HIT: "SERIAL_4_ZODIAC_NO_HIT", // 四肖连不中
    // 连码
    SPECIAL_SERIAL: "SPECIAL_SERIAL", // 特串
    SERIAL_2_SPECIAL: "SERIAL_2_SPECIAL", // 二中特
    SERIAL_3_HIT_3: "SERIAL_3_HIT_3", // 三全中
    SERIAL_3_HIT_2: "SERIAL_3_HIT_2", // 三中二
    SERIAL_2_HIT_2: "SERIAL_2_HIT_2", // 二全中
    SERIAL_4_HIT_1: "SERIAL_4_HIT_1", // 四中一
    SERIAL_5_NO_HIT: "SERIAL_5_NO_HIT", // 五不中
    SERIAL_6_NO_HIT: "SERIAL_6_NO_HIT", // 六不中
    SERIAL_7_NO_HIT: "SERIAL_7_NO_HIT", // 七不中
    SERIAL_8_NO_HIT: "SERIAL_8_NO_HIT", // 八不中
    SERIAL_9_NO_HIT: "SERIAL_9_NO_HIT", // 九不中
    SERIAL_10_NO_HIT: "SERIAL_10_NO_HIT", // 十不中
    SERIAL_11_NO_HIT: "SERIAL_11_NO_HIT", // 十一不中
    SERIAL_12_NO_HIT: "SERIAL_12_NO_HIT", // 十二不中
    SERIAL_2_TAIL: "SERIAL_2_TAIL", // 二尾连中
    SERIAL_2_TAIL_NO_HIT: "SERIAL_2_TAIL_NO_HIT", // 二尾连不中
    SERIAL_3_TAIL: "SERIAL_3_TAIL", // 三尾连中
    SERIAL_3_TAIL_NO_HIT: "SERIAL_3_TAIL_NO_HIT", // 三尾连不中
    SERIAL_4_TAIL: "SERIAL_4_TAIL", // 四尾连中
    SERIAL_4_TAIL_NO_HIT: "SERIAL_4_TAIL_NO_HIT", // 四尾连不中
    // 一肖尾数
    ZODIAC: "ZODIAC", // 一肖
    TAIL: "TAIL", // 尾数
};

export const PICK_LIMITS = {
    [KIND_TYPE.DEFAULT]: [1],
    // 特碼
    [TAB_TYPE.SPECIAL]: [1],
    // 两面
    [TAB_TYPE.SUM]: [1],
    // 色波
    [TAB_TYPE.COLOR]: [1],
    // 色波 (小網)
    [KIND_TYPE.BALL]: [1],
    [KIND_TYPE.ONE_COMB]: [1],
    [KIND_TYPE.TWO_COMB]: [1],
    // 头尾数
    [TAB_TYPE.TAIL]: [1],
    // 生肖
    [KIND_TYPE.SPECIAL_ZODIAC]: [1, 12],
    [KIND_TYPE.REGULAR_ZODIAC]: [1, 12],
    [KIND_TYPE.SERIAL_2_ZODIAC]: [2, 6],
    [KIND_TYPE.SERIAL_3_ZODIAC]: [3, 6],
    [KIND_TYPE.SERIAL_4_ZODIAC]: [4, 6],
    [KIND_TYPE.SERIAL_5_ZODIAC]: [5, 6],
    [KIND_TYPE.SERIAL_2_ZODIAC_NO_HIT]: [2, 6],
    [KIND_TYPE.SERIAL_3_ZODIAC_NO_HIT]: [3, 6],
    [KIND_TYPE.SERIAL_4_ZODIAC_NO_HIT]: [4, 6],
    // 正码
    [KIND_TYPE.REGULAR]: [1],
    [KIND_TYPE.REGULAR_1]: [1],
    [KIND_TYPE.REGULAR_2]: [1],
    [KIND_TYPE.REGULAR_3]: [1],
    [KIND_TYPE.REGULAR_4]: [1],
    [KIND_TYPE.REGULAR_5]: [1],
    [KIND_TYPE.REGULAR_6]: [1],
    [KIND_TYPE.REGULAR_1_6]: [1],
    // 正码 (小網)
    [KIND_TYPE.REGULAR_1_6_1]: [1],
    [KIND_TYPE.REGULAR_1_6_2]: [1],
    [KIND_TYPE.REGULAR_1_6_3]: [1],
    [KIND_TYPE.REGULAR_1_6_4]: [1],
    [KIND_TYPE.REGULAR_1_6_5]: [1],
    [KIND_TYPE.REGULAR_1_6_6]: [1],
    // 连码
    [KIND_TYPE.SPECIAL_SERIAL]: [2, 10],
    [KIND_TYPE.SERIAL_3_HIT_3]: [3, 10],
    [KIND_TYPE.SERIAL_3_HIT_2]: [3, 10],
    [KIND_TYPE.SERIAL_2_HIT_2]: [2, 10],
    [KIND_TYPE.SERIAL_4_HIT_1]: [4, 10],
    [KIND_TYPE.SERIAL_5_NO_HIT]: [5, 10],
    [KIND_TYPE.SERIAL_6_NO_HIT]: [6, 10],
    [KIND_TYPE.SERIAL_7_NO_HIT]: [7, 10],
    [KIND_TYPE.SERIAL_8_NO_HIT]: [8, 11],
    [KIND_TYPE.SERIAL_9_NO_HIT]: [9, 12],
    [KIND_TYPE.SERIAL_10_NO_HIT]: [10, 13],
    [KIND_TYPE.SERIAL_11_NO_HIT]: [11, 13],
    [KIND_TYPE.SERIAL_12_NO_HIT]: [12, 14],
    [KIND_TYPE.SERIAL_2_TAIL]: [2, 6],
    [KIND_TYPE.SERIAL_2_TAIL_NO_HIT]: [2, 6],
    [KIND_TYPE.SERIAL_3_TAIL]: [3, 6],
    [KIND_TYPE.SERIAL_3_TAIL_NO_HIT]: [3, 6],
    [KIND_TYPE.SERIAL_4_TAIL]: [4, 6],
    [KIND_TYPE.SERIAL_4_TAIL_NO_HIT]: [4, 6],
    // 一肖尾数
    [KIND_TYPE.ZODIAC]: [1],
    [KIND_TYPE.TAIL]: [1],
    // 总肖
    [TAB_TYPE.ZODIAC_AMOUNT]: [1],
    // 合肖
    [TAB_TYPE.ZODIAC_MULTI]: [2, 11],
};
