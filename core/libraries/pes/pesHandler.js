import Base64 from './base64';

export default () => {
	var pesHandler = {
		_shiftAry:[
	        '0123',
	        '0132',
	        '0231',
	        '0213',
	        '0312',
	        '0321',
	        '1023',
	        '1032',
	        '1203',
	        '1230',
	        '1302',
	        '1320',
	        '2013',
	        '2031',
	        '2103',
	        '2130',
	        '2301',
	        '2310',
	        '3012',
	        '3021',
	        '3102',
	        '3120',
	        '3201',
	        '3210'
	    ],		
	    encrypt:function(key, text){
		    var strArr = pesHandler.splitStr(pesHandler.base64Encode(text), 4);
		    var sLen = strArr.length - 1;
		    var returnStr = '';
		    for(var i in strArr){
		        if(i != sLen){
		            returnStr += pesHandler.shiftEncodeSite(i, strArr[i]);
		        }else{
		            returnStr += strArr[i];
		        }
		    }

		    return pesHandler.base64Encode(pesHandler.xorEncryption(returnStr, key));
		},
		decrypt:function(key, text){
		    var str = pesHandler.base64Decode(text);
		    str = pesHandler.xorEncryption(str, key);

		    var strArr = pesHandler.splitStr(str, 4);
		    var returnStr = '';
		    var sLen = strArr.length - 1;
		    for(var i in strArr){
		        if(i != sLen){
		            returnStr += pesHandler.shiftDecodeSite(i, strArr[i]);
		        }else{
		            returnStr += strArr[i];
		        }
		    }

		    return pesHandler.base64Decode(returnStr);
		},
		splitStr:function(text, len){
		    var strArr = text.split("");
		    var arr = [], key = 0;
		    for(var i in strArr){
		        if(i > 0 && (i % len) == 0){
		            key ++
		        }

		        if (typeof arr[key] == "undefined"){
		            arr[key] = '';
		        }

		        arr[key] += strArr[i];
		    }

		    return arr;
		},
		shiftEncodeSite:function( index, str ){
		    var _index = parseInt(index)%pesHandler._shiftAry.length;

		    return str[parseInt(pesHandler._shiftAry[_index][0])]
		         + str[parseInt(pesHandler._shiftAry[_index][1])]
		         + str[parseInt(pesHandler._shiftAry[_index][2])]
		         + str[parseInt(pesHandler._shiftAry[_index][3])];

		},
		shiftDecodeSite:function( index, str ){
		    var _index = parseInt(index)%pesHandler._shiftAry.length;

		    var retAry = {t0:'',t1:'',t2:'',t3:''};
		    var key = '';
		    for( var i=0; i<=3; i++ )
		    {
		        key = 't'+pesHandler._shiftAry[_index][i];
		        retAry[key] = str[i];
		    }

		    return retAry.t0 + retAry.t1 + retAry.t2 + retAry.t3;
		},
		xorEncryption:function( text , keyArr){
		    var r,rPos,rText = '';
		    for (var i = 0; i < text.length; i++){
		        rPos = i % keyArr.length;

		        r = String.fromCharCode(text.charCodeAt(i) ^ keyArr.charCodeAt(rPos));
		        rText += r;
		    }
		    return rText;
		},
		base64Encode:function(text){
		     return Base64().encode(text);
		},
		base64Decode:function(text){
		    return Base64().decode(text);
		}
	};	
	return pesHandler;
};