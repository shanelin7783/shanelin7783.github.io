(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{iX3c:function(t,n,e){"use strict";e.r(n);var c=e("q1tI"),a=e.n(c),r=e("/MKj"),l=e("kOwS"),u=e("i7Ga"),i=e("c6gK"),s=e("XmPd"),o=a.a.createElement,m=function(){var t=Object(c.useState)(0),n=t[0],e=t[1],a=Object(c.useRef)({}),m=Object(c.useRef)({0:{},1:{},2:{},3:{},4:{}}),p=Object(r.c)(function(t){return t.History.list}),b=Object(c.useMemo)(function(){return p.reduce(function(t,n){return t[0]=t[0]+n.numbers.split(",")[0],t[1]=t[1]+n.numbers.split(",")[1],t[2]=t[2]+n.numbers.split(",")[2],t[3]=t[3]+n.numbers.split(",")[3],t[4]=t[4]+n.numbers.split(",")[4],t},{0:"",1:"",2:"",3:"",4:""})},[p]),h=function(t){return function(){e(t)}};return o(u.a,null,o(i.a,{title:"\u8d70\u52bf\u56fe"}),o("main",{className:"main-container"},o("article",{className:"chart"},o("ul",null,o("li",{onClick:h(0),className:"".concat(0===n?"active":"")},"\u6728"),o("li",{onClick:h(1),className:"".concat(1===n?"active":"")},"\u706b"),o("li",{onClick:h(2),className:"".concat(2===n?"active":"")},"\u571f"),o("li",{onClick:h(3),className:"".concat(3===n?"active":"")},"\u91d1"),o("li",{onClick:h(4),className:"".concat(4===n?"active":"")},"\u6c34")),o("dl",{className:"chart_tit"},o("dt",null,"\u671f\u53f7"),Object(s.e)(0,9).map(function(t){return o("dd",{key:t},o("span",null,t))})),p.map(function(t,e){return o("dl",{key:e,className:"chart_list expect ".concat(e%2===1?"bg_gray":"")},o("dt",null,t.expect),b[n][e+1]&&o(f,Object(l.a)({},(c=b[n][e]-b[n][e+1],a.current[c]?a.current[c]:(a.current[c]={length:Math.sqrt(41.81*41.81+25.19*c*(25.19*c)),rotate:"rotate(".concat((Math.atan(25.19*c/41.81)+-Math.PI/2)*(180/Math.PI),"deg)")},a.current[c])),{start:b[n][e]})),Object(s.e)(0,9).map(function(t){return o(d,Object(l.a)({},function(t,n,e){var c=b[e][n],a=m.current[e];return 0===n&&(a[t]=0),c==t?(a[t]=0,{value:t,missing:!1}):(a[t]?a[t]=a[t]+1:a[t]=1,{value:a[t],missing:!0})}(t,e,n),{key:t}))}));var c}),o("dl",{className:"chart_list chart_red"},o("dt",null,"\u5e73\u5747\u9057\u6f0f"),Object(s.e)(0,9).map(function(t){return o("dd",{key:t},o("span",null,function(t,n){var e=b[t].split(n),c=e.reduce(function(t,n){return t+n.length},0);return Math.floor(c/e.length)}(n,t)))})),o("dl",{className:"chart_list bg_gray"},o("dt",null,"\u6700\u5927\u9057\u6f0f"),Object(s.e)(0,9).map(function(t){return o("dd",{key:t},o("span",null,function(t,n){return b[t].split(n).reduce(function(t,n){return n.length>t?n.length:t},0)}(n,t)))})))))},d=function(t){var n=t.value,e=t.missing;return o("dd",null,o("span",{className:e?"":"red"},n))},f=function(t){var n=t.start,e=t.length,c=t.rotate;return o("div",{style:{borderTop:"2px solid #ef0000",position:"absolute",top:"50%",right:"calc(".concat(25.19/345*100/2+25.19/345*100*(9-n),"%)"),width:"calc(100vw / ".concat(375," * ").concat(e,")"),zIndex:1,transform:c,transformOrigin:"100% 0px 0px"}})},p=a.a.createElement;n.default=function(){var t=Object(r.c)(function(t){return t.BaseInfo.game_code});return p(c.Fragment,null,{as5fc:p(m,null)}[t]||null)}}}]);