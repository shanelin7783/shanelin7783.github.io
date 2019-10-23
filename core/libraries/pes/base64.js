global.Buffer = global.Buffer || require('buffer').Buffer;
const atob = (str) => {
	return new Buffer(str, 'binary').toString('base64');
}
const btoa = (b64Encoded) => {
	return new Buffer(b64Encoded, 'base64').toString('binary');
}

export default () => {
	var Base64 = {
		// public method for encoding
		encode : function (input) {
			return atob(unescape(encodeURIComponent(input)));
		},
		// public method for decoding
		decode : function (input) {
			try {
				btoa(input);
			}
			catch(err) {
				console.log('decode:err',err);
			}
			return decodeURIComponent(escape(btoa(input)));
		}
	};
	return Base64;
};
