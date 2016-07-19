
// definición de namespace
(function(exports){
	
	var mp = this.mp||{};
	
	exports.mp = mp;
	
}(this));

// attacho un objeto al namespace
(function(namespace){
	var _paymentMethod = ['visa','amex'],
		checkout = {};

	checkout.getPaymentMethods = function(){
		return _paymentMethod;
	};
	checkout.pay = function(){
		console.log("Pago!")
	};
	namespace.cho = checkout;
}(this.mp));





function Operation(type){
	var _type = type
	this.getType = function(){
		return _type;
	};
	this.setType = function(input){
		_type = input;
	};
}

Operation.prototype.execute = function(){
	console.log("execute: "+ this.getType());
};
Operation.prototype.cancel = function(){
	console.log("cancel: "+ this.getType());
};
Operation.prototype.refund = function(){
	console.log("refund: "+ this.getType());
};





(function(exports){
	var titles = ["Hola Mundo", "olo", "javo"];

	var ulElement = exports.createElement("ul")
	for(var i in titles){
		var liElement = exports.createElement("li");
		liElement.innerHTML = titles[i];
		ulElement.appendChild(liElement);
	}
	exports.body.appendChild(ulElement);
}(this.document));








// attacho un objeto al namespace, def de módulo
//(function(namespace){
	//var _features = ['checkout','mymp'],
		//mpfront = {};
//
	//mpfront.getFeatures = function(){
		//return _features;
	//};
//
	//namespace.mpfront = mpfront;
//}(this.mp));
//
//// dependencia entre modulos
//(function(namespace,exports){
	//var envios = exports.me, 	/* explota si me no está definido*/
		//ap = exports.ap,
		//cho = namespace.checkout;
//}());
