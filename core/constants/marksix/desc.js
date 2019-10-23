import { TAB_TYPE, KIND_TYPE } from "./index";

const dictionary = {
    [TAB_TYPE.SPECIAL]: {
        [KIND_TYPE.DEFAULT]: {
            desc: "从49个号码中选一个下注。若下注的号码与开奖号码的特码相同，即为中奖。低赔率高返点。奖金{odds}。",
            sample: "投注01，开奖号码的第7个开出的号码（特码）开出01即为中奖。",
        },
    },
    [TAB_TYPE.SUM]: {
        [KIND_TYPE.DEFAULT]: {
            desc: "投注与开奖号码6个正码任1相同为中奖；7个开奖号总和形成投注项，所选型态与开奖结果相同为中奖。奖金{odds}。",
            sample: "投注特大单，开奖号码的特码为41，即为中奖。",
        },
    },
    [TAB_TYPE.COLOR]: {
        [KIND_TYPE.DEFAULT]: {
            desc: "分为「红、蓝、绿」三个色波，从中选择一注，所选型态与开奖结果相同即为中奖。奖金{odds}。",
            sample: "投注绿双，开奖号码的特码为28，即为中奖。",
        },
    },
    [TAB_TYPE.REGULAR]: {
        [KIND_TYPE.REGULAR]: {
            desc: "投注与开奖号码6个正码任1相同为中奖；7个开奖号总和形成投注项，所选型态与开奖结果相同为中奖。奖金{odds}。",
            sample: "投注07，开奖号码的正码依序為03,45,34,07,15,23，即为中奖。",
        },
        [KIND_TYPE.REGULAR_1]: {
            desc: "正码第1位配合不同条件组成选项，每个型态为一注，所选型态与开奖结果相同即为中奖。奖金{odds}。",
            sample: "投注07，开奖号码的正码依序为07,03,45,34,15,23，即为中奖。",
        },
        [KIND_TYPE.REGULAR_2]: {
            desc: "正码第2位配合不同条件组成选项，每个型态为一注，所选型态与开奖结果相同即为中奖。奖金{odds}。",
            sample: "投注07，开奖号码的正码依序为03,07,45,34,15,23，即为中奖。",
        },
        [KIND_TYPE.REGULAR_3]: {
            desc: "正码第3位配合不同条件组成选项，每个型态为一注，所选型态与开奖结果相同即为中奖。奖金{odds}。",
            sample: "投注正三大，开奖号码的正码依序为03,07,45,34,15,23，即为中奖。",
        },
        [KIND_TYPE.REGULAR_4]: {
            desc: "正码第4位配合不同条件组成选项，每个型态为一注，所选型态与开奖结果相同即为中奖。奖金{odds}。",
            sample: "投注正四双，开奖号码的正码依序为03,07,45,34,15,23，即为中奖。",
        },
        [KIND_TYPE.REGULAR_5]: {
            desc: "正码第5位配合不同条件组成选项，每个型态为一注，所选型态与开奖结果相同即为中奖。奖金{odds}。",
            sample: "投注正五单，开奖号码的正码依序为03,07,45,34,15,23，即为中奖。",
        },
        [KIND_TYPE.REGULAR_6]: {
            desc: "正码第6位配合不同条件组成选项，每个型态为一注，所选型态与开奖结果相同即为中奖。奖金{odds}。",
            sample: "投注正六合单，开奖号码的正码依序为03,07,45,34,15,23，即为中奖。",
        },
        [KIND_TYPE.REGULAR_1_6]: {
            desc: "以正码1-6不同位置选择定位，配合各正码型态形成一注，所选型态与开奖结果相同即为中奖。奖金{odds}。",
            sample: "正码一位置投注红波，正码一开奖号码为34，即为中奖。",
        },
    },
    [TAB_TYPE.TAIL]: {
        [KIND_TYPE.DEFAULT]: {
            desc: "若下注型态与特码所属头尾数吻合，即为中奖。奖金{odds}。",
            sample: "投注1头，开奖特码为13，即为中奖。",
        },
    },
    [TAB_TYPE.ZODIAC]: {
        [KIND_TYPE.SPECIAL_ZODIAC]: {
            desc: "以特码和生肖为一个投注组合，开出特码出现在投注组合中，即为中奖，其余情况为不中奖。奖金{odds}。",
            sample: "鸡年时，投注鸡，开奖号码的特码为01，即为中奖。",
        },
        [KIND_TYPE.REGULAR_ZODIAC]: {
            desc: "依据开出的所有正码为主，若开出的6个正码有一个在下注生肖范围内，则视为中奖。奖金{odds}。",
            sample: "鸡年时，投注鸡，开奖号码的正码为01,23,14,27,33,20，即为中奖。",
        },
        [KIND_TYPE.SERIAL_2_ZODIAC]: {
            desc: "从12个生肖中选2～6个下注。若下注的生肖和开奖号码的七个号码的生肖中任2个相同，则为中奖。奖金{odds}。",
            sample: "投注羊,猪，开奖号码为羊,猴,兔,马,兔,鸡,猪，即为中奖。",
        },
        [KIND_TYPE.SERIAL_3_ZODIAC]: {
            desc: "从12个生肖中选3~6个下注。若下注的生肖和开奖号码的七个号码的生肖中任3个相同，则为中奖。奖金{odds}。",
            sample: "投注羊,兔,猪，开奖号码为羊,猴,兔,马,兔,鸡,猪，即为中奖。",
        },
        [KIND_TYPE.SERIAL_4_ZODIAC]: {
            desc: "从12个生肖中选4~6个下注。若下注的生肖和开奖号码的七个号码的生肖中任4个相同，则为中奖。奖金{odds}。",
            sample: "投注羊,兔,马,猪，开奖号码为羊,猴,兔,马,兔,鸡,猪，即为中奖。",
        },
        [KIND_TYPE.SERIAL_5_ZODIAC]: {
            desc: "从12个生肖中选5~6个下注。若下注的生肖和开奖号码的七个号码的生肖中任5个相同，则为中奖。奖金{odds}。",
            sample: "投注羊,马,兔,猴,猪，开奖号码为羊,猴,兔,马,兔,鸡,猪，即为中奖。",
        },
        [KIND_TYPE.SERIAL_2_ZODIAC_NO_HIT]: {
            desc:
                "从12个生肖中选2~6个生肖下注。如下注的生肖中，与开奖结果七个号码所属生肖任2个不相同，即为中奖（下注某生肖且该生肖开奖没开出）。奖金{odds}。",
            sample: "投注狗,蛇，开奖号码为羊,猴,兔,马,兔,鸡,猪，即为中奖。",
        },
        [KIND_TYPE.SERIAL_3_ZODIAC_NO_HIT]: {
            desc:
                "从12个生肖中选3~6个生肖下注。如下注的生肖中，与开奖结果七个号码所属生肖任3个不相同，即为中奖（下注某生肖且该生肖开奖没开出）。奖金{odds}。",
            sample: "投注狗,蛇,龙，开奖号码为羊,猴,兔,马,兔,鸡,猪，即为中奖。",
        },
        [KIND_TYPE.SERIAL_4_ZODIAC_NO_HIT]: {
            desc:
                "从12个生肖中选4~6个生肖下注。如下注的生肖中，与开奖结果七个号码所属生肖任4个不相同，即为中奖（下注某生肖且该生肖开奖没开出）。奖金{odds}。",
            sample: "投注狗,蛇,龙,鼠，开奖号码为羊,猴,兔,马,兔,鸡,猪，即为中奖。",
        },
    },
    [TAB_TYPE.SERIAL]: {
        [KIND_TYPE.SPECIAL_SERIAL]: {
            desc: "49选2下注。下注两个号其一与开奖号特码同且下注另一号与开奖号任意正码同则中奖。奖金{odds}。",
            sample: "投注22,32，开奖号码为10,11,31,21,22,03;特码32，即为中奖。",
        },
        [KIND_TYPE.SERIAL_2_SPECIAL]: {
            desc: "49选2下注。一个是正码，一个是特别号码，叫中特；二个号码都是开奖号码之正码，叫中二。奖金{odds}。",
            sample: "投注11,32，开奖号码为10,11,31,21,22,03;特码32，即为中奖。",
        },
        [KIND_TYPE.SERIAL_3_HIT_3]: {
            desc: "从49个号码中选3~10个下注。若下注的三个号码与开奖号码的任三个正码相同，则为中奖。奖金{odds}。",
            sample: "投注11,31,21，开奖号码为10,11,31,21,22,03特码32，即为中奖。",
        },
        [KIND_TYPE.SERIAL_3_HIT_2]: {
            desc: "从49个号码中选3~10个下注。若下注的三个号码中至少两个与开奖号码的任两个正码相同，则为中奖。奖金{odds}。",
            sample: "投投注11,31,18，开奖号码为10,11,31,21,22,03特码32，即为中奖。",
        },
        [KIND_TYPE.SERIAL_2_HIT_2]: {
            desc: "从49个号码中选2~10个下注。若下注的两个号码与开奖号码的任两个正码相同，则为中奖。奖金{odds}。",
            sample: "投注11,31，开奖号码为10,11,31,21,22,03特码32，即为中奖。",
        },
        [KIND_TYPE.SERIAL_4_HIT_1]: {
            desc: "从49个号码中选4~10个下注。若下注的四个号码中有任何号码与开奖号码的正码相同，则为中奖。奖金{odds}。",
            sample: "投注11,15,27,28，开奖号码为10,11,31,21,22,03特码32，即为中奖。",
        },
        [KIND_TYPE.SERIAL_5_NO_HIT]: {
            desc: "从49个号码中选5~10个下注。若下注的5个号码和开奖号码的七个号码都不相同，则为中奖。奖金{odds}。",
            sample: "投注02,10,15,27,28，开奖号码为10,11,31,21,22,03特码32，即为中奖。",
        },
        [KIND_TYPE.SERIAL_6_NO_HIT]: {
            desc: "从49个号码中选6~10个下注。若下注的6个号码和开奖号码的七个号码都不相同，则为中奖。奖金{odds}。",
            sample: "投注02,10,15,27,28,39，开奖号码为10,11,31,21,22,03特码32，即为中奖。",
        },
        [KIND_TYPE.SERIAL_7_NO_HIT]: {
            desc: "从49个号码中选7~10个下注。若下注的7个号码和开奖号码的七个号码都不相同，则为中奖。奖金{odds}。",
            sample: "投注02,10,15,27,28,39,40，开奖号码为10,11,31,21,22,03特码32，即为中奖。",
        },
        [KIND_TYPE.SERIAL_8_NO_HIT]: {
            desc: "从49个号码中选8~11个下注。若下注的8个号码和开奖号码的七个号码都不相同，则为中奖。奖金{odds}。",
            sample: "投注02,08,09,15,27,28,39,40，开奖号码为10,11,31,21,22,03特码32，即为中奖。",
        },
        [KIND_TYPE.SERIAL_9_NO_HIT]: {
            desc: "从49个号码中选9~12个下注。若下注的9个号码和开奖号码的七个号码都不相同，则为中奖。奖金{odds}。",
            sample: "投注02,08,09,15,19,27,28,39,40，开奖号码为10,11,31,21,22,03特码32，即为中奖。",
        },
        [KIND_TYPE.SERIAL_10_NO_HIT]: {
            desc: "从49个号码中选10~13个下注。若下注的号码和开奖号码的七个号码都不相同，则为中奖。奖金{odds}。",
            sample: "投注02,08,09,15,17,19,27,28,39,40，开奖号码为10,11,31,21,22,03特码32，即为中奖。",
        },
        [KIND_TYPE.SERIAL_11_NO_HIT]: {
            desc: "从49个号码中选11~13个下注。若下注的号码和开奖号码的七个号码都不相同，则为中奖。奖金{odds}。",
            sample: "投注02,08,09,15,17,19,25,27,28,39,40，开奖号码为10,11,31,21,22,03特码32，即为中奖。",
        },
        [KIND_TYPE.SERIAL_12_NO_HIT]: {
            desc: "从49个号码中选12~14个下注。若下注的号码和开奖号码的七个号码都不相同，则为中奖。奖金{odds}。",
            sample: "投注02,08,09,15,17,19,25,27,28,33,39,40，开奖号码为10,11,31,21,22,03特码32，即为中奖。",
        },
        [KIND_TYPE.SERIAL_2_TAIL]: {
            desc: "从0-9中选2～6个数字下注。如下注的2个号码，与开奖结果七个号码的个位数中任2个相同，即为中奖。奖金{odds}。",
            sample: "投注1尾,2尾，开奖号码为10,11,31,21,22,03特码32，即为中奖。",
        },
        [KIND_TYPE.SERIAL_2_TAIL_NO_HIT]: {
            desc: "从0-9中选2～6个数字下注。如下注号码与开奖结果七个号码的个位数没有相同的号码，即为中奖。奖金{odds}。",
            sample: "投注4尾,5尾，开奖号码为10,11,31,21,22,03特码32，即为中奖。",
        },
        [KIND_TYPE.SERIAL_3_TAIL]: {
            desc: "从0-9中选3～6个数字下注。如下注的3个号码，与开奖结果七个号码的个位数中任3个相同，即为中奖。奖金{odds}。",
            sample: "投注0尾,1尾,2尾，开奖号码为10,11,31,21,22,03特码32，即为中奖。",
        },
        [KIND_TYPE.SERIAL_3_TAIL_NO_HIT]: {
            desc: "从0-9中选3～6个数字下注。如下注号码与开奖结果七个号码的个位数没有相同的号码，即为中奖。奖金{odds}。",
            sample: "投注4尾,5尾,6尾，开奖号码为10,11,31,21,22,03特码32，即为中奖。",
        },
        [KIND_TYPE.SERIAL_4_TAIL]: {
            desc: "从0-9中选4～6个数字下注。如下注的4个号码，与开奖结果七个号码的个位数中任4个相同，即为中奖。奖金{odds}。",
            sample: "投注0尾,1尾,2尾,3尾，开奖号码为10,11,31,21,22,03特码32，即为中奖。",
        },
        [KIND_TYPE.SERIAL_4_TAIL_NO_HIT]: {
            desc: "从0-9中选4～6个数字下注。如下注号码与开奖结果七个号码的个位数没有相同的号码，即为中奖。奖金{odds}。",
            sample: "投注4尾,5尾,6尾,7尾，开奖号码为10,11,31,21,22,03特码32，即为中奖。",
        },
    },
    [TAB_TYPE.ZODIAC_TAIL]: {
        [KIND_TYPE.ZODIAC]: {
            desc: "从12个生肖中选1个下注。如下注的生肖，与开奖结果7个号码任一个的所属生肖相同，即为中奖。奖金{odds}。",
            sample: "投注鼠，开奖号码为11,23,35,10,22,09特码21（鼠鼠鼠牛牛虎虎），即为中奖。",
        },
        [KIND_TYPE.TAIL]: {
            desc: "从0~9中选1个尾数下注。如下注的尾数，与开奖结果7个号码任一个的尾数相同，即为中奖。奖金{odds}。",
            sample: "投注1尾，开奖号码为10,11,31,21,22,03特码32，即为中奖。",
        },
    },
    [TAB_TYPE.ZODIAC_AMOUNT]: {
        [KIND_TYPE.DEFAULT]: {
            desc:
                "总肖2/总肖3/总肖4/总肖5/总肖6/总肖7/总肖单/总肖双，从8种中选择一个型态下注。如下注的型态，与开奖结果7个号码的所属生肖型态相同，即为中奖。奖金{odds}。",
            sample: "投注3肖，开奖号码为11,23,35,10,22,09特码21（鼠鼠鼠牛牛虎虎），即为中奖。",
        },
    },
    [TAB_TYPE.ZODIAC_MULTI]: {
        [KIND_TYPE.DEFAULT]: {
            desc: "从12个生肖中选2~11个下注。如下注的生肖，与开奖结果的特码所属生肖相同，即为中奖。奖金{odds}。",
            sample: "投注鼠,虎，开奖号码为鼠,鼠,鼠,牛,牛,虎,虎，即为中奖。",
        },
    },
};

export const TABS_NAME = {
    [TAB_TYPE.SPECIAL]: "特码",
    [TAB_TYPE.SUM]: "两面",
    [TAB_TYPE.COLOR]: "色波",
    [TAB_TYPE.ZODIAC]: "生肖",
    [TAB_TYPE.TAIL]: "头尾数",
    [TAB_TYPE.REGULAR]: "正码",
    [TAB_TYPE.SERIAL]: "连码",
    [TAB_TYPE.ZODIAC_TAIL]: "一肖尾数",
    [TAB_TYPE.ZODIAC_AMOUNT]: "总肖",
    [TAB_TYPE.ZODIAC_MULTI]: "合肖",
};

export const KINDS_NAME = {
    [KIND_TYPE.DEFAULT]: "",
    [KIND_TYPE.REGULAR]: "正码",
    [KIND_TYPE.REGULAR_1]: "正一特",
    [KIND_TYPE.REGULAR_2]: "正二特",
    [KIND_TYPE.REGULAR_3]: "正三特",
    [KIND_TYPE.REGULAR_4]: "正四特",
    [KIND_TYPE.REGULAR_5]: "正五特",
    [KIND_TYPE.REGULAR_6]: "正六特",
    [KIND_TYPE.REGULAR_1_6]: "正码1-6",
    [KIND_TYPE.SPECIAL_ZODIAC]: "特肖",
    [KIND_TYPE.REGULAR_ZODIAC]: "正肖",
    [KIND_TYPE.SERIAL_2_ZODIAC]: "二肖",
    [KIND_TYPE.SERIAL_3_ZODIAC]: "三肖",
    [KIND_TYPE.SERIAL_4_ZODIAC]: "四肖",
    [KIND_TYPE.SERIAL_5_ZODIAC]: "五肖",
    [KIND_TYPE.SERIAL_2_ZODIAC_NO_HIT]: "二肖连不中",
    [KIND_TYPE.SERIAL_3_ZODIAC_NO_HIT]: "三肖连不中",
    [KIND_TYPE.SERIAL_4_ZODIAC_NO_HIT]: "四肖连不中",
    [KIND_TYPE.SPECIAL_SERIAL]: "特串",
    [KIND_TYPE.SERIAL_3_HIT_3]: "三全中",
    [KIND_TYPE.SERIAL_3_HIT_2]: "三中二",
    [KIND_TYPE.SERIAL_2_HIT_2]: "二全中",
    [KIND_TYPE.SERIAL_4_HIT_1]: "四中一",
    [KIND_TYPE.SERIAL_5_NO_HIT]: "五不中",
    [KIND_TYPE.SERIAL_6_NO_HIT]: "六不中",
    [KIND_TYPE.SERIAL_7_NO_HIT]: "七不中",
    [KIND_TYPE.SERIAL_8_NO_HIT]: "八不中",
    [KIND_TYPE.SERIAL_9_NO_HIT]: "九不中",
    [KIND_TYPE.SERIAL_10_NO_HIT]: "十不中",
    [KIND_TYPE.SERIAL_11_NO_HIT]: "十一不中",
    [KIND_TYPE.SERIAL_12_NO_HIT]: "十二不中",
    [KIND_TYPE.SERIAL_2_TAIL]: "二尾连中",
    [KIND_TYPE.SERIAL_2_TAIL_NO_HIT]: "二尾连不中",
    [KIND_TYPE.SERIAL_3_TAIL]: "三尾连中",
    [KIND_TYPE.SERIAL_3_TAIL_NO_HIT]: "三尾连不中",
    [KIND_TYPE.SERIAL_4_TAIL]: "四尾连中",
    [KIND_TYPE.SERIAL_4_TAIL_NO_HIT]: "四尾连不中",
    [KIND_TYPE.ZODIAC]: "一肖",
    [KIND_TYPE.TAIL]: "尾数",
    // 小網專用
    [KIND_TYPE.REGULAR_1_6_1]: "正码1",
    [KIND_TYPE.REGULAR_1_6_2]: "正码2",
    [KIND_TYPE.REGULAR_1_6_3]: "正码3",
    [KIND_TYPE.REGULAR_1_6_4]: "正码4",
    [KIND_TYPE.REGULAR_1_6_5]: "正码5",
    [KIND_TYPE.REGULAR_1_6_6]: "正码6",
    [KIND_TYPE.BALL]: "色波",
    [KIND_TYPE.ONE_COMB]: "半波",
    [KIND_TYPE.TWO_COMB]: "半半波",
};

export const COLOR_TEXT = {
    red: "红",
    blue: "蓝",
    green: "绿",
};

export default dictionary;
