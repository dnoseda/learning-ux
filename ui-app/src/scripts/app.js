
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


// attacho un objeto al namespace, def de módulo
(function(namespace){
	var _features = ['checkout','mymp'],
		mprfont = {};

	mprfont.getFeatures() = function(){
		return _features;
	};

	namespace.mpfront = mprfont;
}(this.mp));

// dependencia entre modulos
(function(namespace,exports){
	var envios = exports.me, 	/* explota si me no está definido*/
		ap = exports.ap,
		cho = namespace.checkout;
}());
