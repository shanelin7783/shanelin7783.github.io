(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{bqo3:function(l,e,n){"use strict";n.r(e);var t=n("q1tI"),a=n.n(t),u=n("/MKj"),c=n("rm3j"),d=n("3LL7"),i=n("i7Ga"),r=n("yT3Q"),s=n("XmPd"),o=a.a.createElement,m=function(){var l=Object(c.c)(),e=Object(u.b)(),n=Object(t.useState)(!1),a=n[0],m=n[1],b=Object(t.useState)(null),_=b[0],p=b[1],f=Object(u.c)(function(l){return l.BetRecord.list}),j=Object(d.a)(),N=function(l){return function(){m(!0),p(l),e(Object(r.d)(l.order_id))}},y=Object(t.useCallback)(function(){a?m(!1):j()},[a]);return o(i.a,null,o("header",{className:"inside_header"},o("nav",null,o("div",{className:"left-menu"},o("a",{onClick:y},o("img",{src:l("backindex.png"),alt:""}))),o("div",{className:"title"},a?"\u6ce8\u5355\u8be6\u60c5":"\u6295\u6ce8\u8bb0\u5f55"),o("div",{className:"right-menu"}))),o("main",{style:{flex:1,overflow:"auto"}},o("article",{className:"lhc_kind2"},o("div",{className:"topborder"}),o("article",{className:"lhc_my_bets mybet"},o("p",null,"\u203b \u70b9\u9009\u53ef\u770b\u8be6\u60c5"),o("div",{id:"bets"},o("dl",null,o("dt",null,o("div",null,"\u671f\u53f7"),o("div",null,"\u6295\u6ce8\u91d1\u989d"),o("div",null,"\u4e2d\u5956\u72b6\u6001")),f.map(function(l){return o("dd",{key:l.order_id,onClick:N(l)},o("div",null,l.expect),o("div",null,Object(s.b)(l.bet_currency_amount,{comma:!0}),"(",l.currency,")"),o("div",null,{1:o("span",{className:"gray_sta"},l.status_text),2:o("span",{className:"red_sta"},l.status_text),3:o("span",{className:"green_sta"},l.status_text)}[l.status]||null))}))))),o("div",{className:"detail_container ".concat(a?"active":"")},o("div",{className:"topborder"}),_&&o(v,{order:_}))))},v=function(l){var e=l.order,n=Object(u.c)(function(l){return l.BetRecord.detail}),a=Object(u.c)(function(l){return l.BetRecord.loading}),c=n.code,d=n.list,i=n.win_numbers,r=1==c;return o("div",{className:"detail"},o(t.Fragment,null,o("dl",null,o("dd",null,o("div",null,"\u671f\u53f7\uff1a"),o("div",null,e.expect)),o("dd",null,o("div",null,"\u5f00\u5956\u53f7\u7801\uff1a"),o("div",null,a?"\u8f09\u5165\u4e2d":r?i:"\u8f09\u5165\u5931\u6557")),o("dd",null,o("div",null,"\u6295\u6ce8\u5355\u53f7\uff1a"),o("div",null,e.order_id)),o("dd",null,o("div",null,"\u6295\u6ce8\u65f6\u95f4\uff1a"),o("div",null,e.bet_date_time))),r&&d.map(function(l){var e=l.id,n=l.bet_type,t=l.bet_detail,a=l.bets,u=l.bet_currency_amount,c=l.currency,d=(l.multiple,l.status),i=l.status_text,r=l.win_currency_amount,m=l.odds;return o("dl",{key:e},o("dd",{className:"tit"},o("div",null,"\u73a9\u6cd5\u540d\u79f0"),o("div",null,n)),o("dd",null,o("div",null,"\u6295\u6ce8\u5185\u5bb9"),o("div",null,t)),o("dd",null,o("div",null,"\u6295\u6ce8\u91d1\u989d"),o("div",null,a,"\u6ce8 / ",Object(s.b)(u,{comma:!0}),c)),o("dd",null,o("div",null,"\u73a9\u6cd5\u8d54\u7387"),o("div",null,Object(s.b)(m))),o("dd",null,o("div",null,"\u4e2d\u5956\u72b6\u6001"),o("div",null,{1:o("span",{className:"gray_sta"},i),2:o("span",{className:"red_sta"},"\u5df2\u4e2d\u5956",Object(s.b)(r,{comma:!0}),c),3:o("span",{className:"green_sta"},i)}[d]||null)))}),o("dl",null,o("dd",{className:"total"},o("div",null,"\u603b\u6295\u6ce8\u91d1\u989d"),o("div",null,Object(s.b)(e.bet_currency_amount,{comma:!0}),e.currency)),o("dd",{className:"total"},o("div",null,"\u603b\u4e2d\u5956\u91d1\u989d"),o("div",null,Object(s.b)(e.win_currency_amount,{comma:!0}),e.currency)))))},b=a.a.createElement;e.default=function(){var l=Object(u.c)(function(l){return l.BaseInfo.game_code});return b(t.Fragment,null,{as5fhk6:b(m,null)}[l]||null)}}}]);