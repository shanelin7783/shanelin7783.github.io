export const TAB_TYPE = {
    SPECIAL: 'SPECIAL', // 特碼
    GUESS_NUMBER: 'GUESS_NUMBER', // 猜一碼
}

export const KIND_TYPE = {
    SUM: 'SUM', // 和值
    DIVISOR_THREE: 'DIVISOR_THREE', // 除三余数
    BIG_SMALL: 'BIG_SMALL', // 大小单双
    EXTREMELY_BIG_SMALL: 'EXTREMELY_BIG_SMALL', // 极大极小
    COLOR: 'COLOR', // 色波
    SIDE: 'SIDE', // 大中小边
    LEOPARD: 'LEOPARD', // 豹子

    GUESS_NUMBER: 'GUESS_NUMBER', // 猜一碼
}

export const config = {
    [TAB_TYPE.SPECIAL]: [
        { category: '特串', kinds: [
            { name: '和值', kind: KIND_TYPE.SUM },
            { name: '除三余数', kind: KIND_TYPE.DIVISOR_THREE }
        ]},
        { category: '混合', kinds: [
            { name: '大小单双', kind: KIND_TYPE.BIG_SMALL },
            { name: '极大极小', kind: KIND_TYPE.EXTREMELY_BIG_SMALL },
          
        ]},
        { category: '趣味', kinds: [
            { name: '色波', kind: KIND_TYPE.COLOR }
        ]},
        { category: '中边', kinds: [
            { name: '大中小边', kind: KIND_TYPE.SIDE }
        ]},
        { category: '豹子', kinds: [
            { name: '豹子', kind: KIND_TYPE.LEOPARD }
        ]}
    ]
};

export const PICK_LIMITS = {
    
}