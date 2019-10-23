import { TAB_TYPE, REGULAR_KIND, REGULAR_ZODIAC_KIND } from "..";

export const TAB_TYPE_DESC = {
    [TAB_TYPE.REGULAR]: "臣座", // 臣座
    [TAB_TYPE.ZODIAC]: "生肖", // 生肖
    [TAB_TYPE.SPECIAL]: "场景", // 場景
    [TAB_TYPE.ZODIAC_AMOUNT]: "肖数", // 肖数系列
};

export const SPECIAL_BLUE_DESC = {
    special_blue: "鬼王",
    special_blue_big: "大鬼",
    special_blue_small: "小鬼",
    special_blue_even: "鬼双",
    special_blue_odd: "鬼单",
};

export const SPECIAL_RED_DESC = {
    special_red: "斟满",
    special_red_big: "大杯",
    special_red_small: "小杯",
    special_red_even: "罚酒",
    special_red_odd: "敬酒",
};

export const SPECIAL_GREEN_DESC = {
    special_green: "炸弹",
    special_green_big: "大石",
    special_green_small: "小石",
    special_green_even: "骷髅",
    special_green_odd: "木棍",
};

export const REGULAR_KIND_DESC = {
    [REGULAR_KIND.regular_number]: "臣座全",
    [REGULAR_KIND.regular_1]: "臣座一",
    [REGULAR_KIND.regular_2]: "臣座二",
    [REGULAR_KIND.regular_3]: "臣座三",
    [REGULAR_KIND.regular_4]: "臣座四",
    [REGULAR_KIND.regular_5]: "臣座五",
    [REGULAR_KIND.regular_6]: "臣座六",
    [REGULAR_KIND.special_number]: "铁王座",
};

export const REGULAR_ZODIAC_KIND_DESC = {
    [REGULAR_ZODIAC_KIND.regular_zodiac]: "臣座全",
    [REGULAR_ZODIAC_KIND.regular_1_zodiac]: "臣座一",
    [REGULAR_ZODIAC_KIND.regular_2_zodiac]: "臣座二",
    [REGULAR_ZODIAC_KIND.regular_3_zodiac]: "臣座三",
    [REGULAR_ZODIAC_KIND.regular_4_zodiac]: "臣座四",
    [REGULAR_ZODIAC_KIND.regular_5_zodiac]: "臣座五",
    [REGULAR_ZODIAC_KIND.regular_6_zodiac]: "臣座六",
    [REGULAR_ZODIAC_KIND.special_zodiac]: "铁王座",
};

export const REGULAR_DICTIONARY = {
    [REGULAR_KIND.regular_number]: "臣座全：投注与开奖号码臣座任1相同为中奖，所选形态与开奖结果相同为中奖。",
    [REGULAR_KIND.regular_1]: "臣座一：投注与开奖号码臣座一相同为中奖，所选形态与开奖结果相同为中奖。",
    [REGULAR_KIND.regular_2]: "臣座二：投注与开奖号码臣座二相同为中奖，所选形态与开奖结果相同为中奖。",
    [REGULAR_KIND.regular_3]: "臣座三：投注与开奖号码臣座三相同为中奖，所选形态与开奖结果相同为中奖。",
    [REGULAR_KIND.regular_4]: "臣座四：投注与开奖号码臣座四相同为中奖，所选形态与开奖结果相同为中奖。",
    [REGULAR_KIND.regular_5]: "臣座五：投注与开奖号码臣座五相同为中奖，所选形态与开奖结果相同为中奖。",
    [REGULAR_KIND.regular_6]: "臣座六：投注与开奖号码臣座六相同为中奖，所选形态与开奖结果相同为中奖。",
    [REGULAR_KIND.special_number]: "铁王座：投注与开奖号码铁王座相同为中奖，所选形态与开奖结果相同为中奖。",
};

export const ZODIAC_DICTIONARY = {
    [REGULAR_ZODIAC_KIND.regular_zodiac]: "臣座全：依据开出的所有臣座为主，若开出的6个臣座有一个在下注家族范围内，则视为中奖。",
    [REGULAR_ZODIAC_KIND.regular_1_zodiac]: "臣座一：若开出的臣座一在下注家族范围内，则视为中奖。",
    [REGULAR_ZODIAC_KIND.regular_2_zodiac]: "臣座二：若开出的臣座二在下注家族范围内，则视为中奖。",
    [REGULAR_ZODIAC_KIND.regular_3_zodiac]: "臣座三：若开出的臣座三在下注家族范围内，则视为中奖。",
    [REGULAR_ZODIAC_KIND.regular_4_zodiac]: "臣座四：投注与开奖号码臣座四相同为中奖，所选形态与开奖结果相同为中奖。",
    [REGULAR_ZODIAC_KIND.regular_5_zodiac]: "臣座五：若开出的臣座五在下注家族范围内，则视为中奖。",
    [REGULAR_ZODIAC_KIND.regular_6_zodiac]: "臣座六：若开出的臣座六在下注家族范围内，则视为中奖。",
    [REGULAR_ZODIAC_KIND.special_zodiac]: "铁王座：若开出的铁王座在下注家族范围内，则视为中奖。",
};

export const COLOR_TEXT = {
    red: "红婚礼",
    blue: "蓝异鬼",
    green: "绿苔原",
};

export const ZOD_NUMBER = {
    1: "一",
    2: "二",
    3: "三",
    4: "四",
    5: "五",
    6: "六",
    7: "七",
    8: "八",
    9: "九",
    10: "十",
    11: "十一",
    12: "十二",
};
