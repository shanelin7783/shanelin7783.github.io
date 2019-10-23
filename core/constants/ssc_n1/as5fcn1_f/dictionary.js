import { GAME_KIND } from "..";

export const GAME_KIND_DESC = {
    [GAME_KIND.DXDS]: "混合",
    [GAME_KIND.NP1]: "猜一个号就中奖",
    [GAME_KIND.NP2]: "二不同号",
    [GAME_KIND.FRONT_THREE_SUM]: "前三位和值",
    [GAME_KIND.MIDDLE_THREE_SUM]: "中三位和值",
    [GAME_KIND.LAST_THREE_SUM]: "后三位和值",
    [GAME_KIND.FRONT_TWO_SUM]: "前二位和值",
    [GAME_KIND.LAST_TWO_SUM]: "后二位和值",
};

export const RULE_DICTIONARY = {
    [GAME_KIND.DXDS]: {
        title: GAME_KIND_DESC.DXDS,
        desc:
            "<p>投注『万、千、百、十、个』所选择位置，且开出如下对应号码<br/><br/>大：开奖号码为5~9，即中奖<br/>小：开奖号码为0~4，即中奖<br/>单：开奖号码为单数，即中奖<br/>双：开奖号码为双数，即中奖<br/><br/>如：<br/>投注万位大，拉霸开出94321，万位为9，即中奖</p>",
    },
    [GAME_KIND.NP1]: {
        title: GAME_KIND_DESC.NP1,
        desc:
            "<p>万位：从0~9任意选择一个号码，只要开奖号码有出现所选号码，即中奖(如：选择3，开出34567)<br/>千位：从0~9任意选择一个号码，只要开奖号码有出现所选号码，即中奖(如：选择3，开出23456)<br/>百位：从0~9任意选择一个号码，只要开奖号码有出现所选号码，即中奖(如：选择3，开出12345)<br/>十位：从0~9任意选择一个号码，只要开奖号码有出现所选号码，即中奖(如：选择3，开出01234)<br/>个位：从0~9任意选择一个号码，只要开奖号码有出现所选号码，即中奖(如：选择3，开出76543)</p>",
    },
    [GAME_KIND.NP2]: {
        title: GAME_KIND_DESC.NP2,
        desc:
            "任意选择2个不重复的号码(如：12,34)，所选号码与开出的任意2个拉霸号码相同，即中奖(如：选择12，开出92018，包含1和2)",
    },
    [GAME_KIND.FRONT_THREE_SUM]: {
        title: GAME_KIND_DESC.FRONT_THREE_SUM,
        desc:
            "从0~27任选一个数字投注，所选数字符合开奖后拉霸前三位数字加总，即中奖(如：选择9，开出13579，前三位加总为9)",
    },
    [GAME_KIND.MIDDLE_THREE_SUM]: {
        title: GAME_KIND_DESC.MIDDLE_THREE_SUM,
        desc:
            "从0~27任选一个数字投注，所选数字符合开奖后拉霸中间三位数字加总，即中奖(如：选择9，开出71359，中间三位加总为9)",
    },
    [GAME_KIND.LAST_THREE_SUM]: {
        title: GAME_KIND_DESC.LAST_THREE_SUM,
        desc:
            "从0~27任选一个数字投注，所选数字符合开奖后拉霸后三位数字加总，即中奖(如：选择9，开出79135，后三位加总为9)",
    },
    [GAME_KIND.FRONT_TWO_SUM]: {
        title: GAME_KIND_DESC.FRONT_TWO_SUM,
        desc:
            "从0~18任选一个数字投注，所选数字符合开奖后拉霸前二位数字加总，即中奖(如：选择9，开出72345，前二位加总为9)",
    },
    [GAME_KIND.LAST_TWO_SUM]: {
        title: GAME_KIND_DESC.LAST_TWO_SUM,
        desc:
            "从0~18任选一个数字投注，所选数字符合开奖后拉霸后二位数字加总，即中奖(如：选择9，开出34572，后二位加总为9)",
    },
};