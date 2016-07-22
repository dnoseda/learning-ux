
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

(function(htmlDocument){
	var productNames = ["iPhone","iPad","iPen"];
	var products = [];

	for(var index in productNames){
		
		var product = {
			name:productNames[index],
			price:432, 
			decimalPrice:32,
			status:"approved",
			statusMessage:"El vendedor ya tiene el dinero"
		}
		
		products.push(product);
	}


	var strBody = '';
	for(var index in products){
		var product = products[index]
		strBody = strBody+ '<article data-type="item"> \
						<input type="checkbox"></input> \
						<span class="ch-price"> \
							<sup>$</sup> \
							'+product.price+' \
							<sup>'+product.decimalPrice+'</sup> \
						</span> \
						<span class="product-name">' + product.name + '</span>\
						<article class="status-'+product.status+'"> \
							'+product.statusMessage+' \
						</article> \
					</article>';
	}
	this.document.getElementById("list").insertAdjacentHTML('beforeEnd',strBody)

}(this.document));

(function(exports){
	exports.getElementById("delete").addEventListener("click",function(e){
		var elements = exports.querySelectorAll(":checked")
		for (var i = elements.length - 1; i >= 0; i--) {
			var element = elements[i];
			element.parentElement.remove();
			element.checked = false;
		}
	});

	exports.getElementById("archive").addEventListener("click",function(e){
		var elements = exports.querySelectorAll(":checked");
		var archList = exports.getElementById("archived-list");
		for (var i = elements.length - 1; i >= 0; i--) {
			var element = elements[i];
			archList.appendChild(element.parentElement);
			element.checked = false;
		}
	})
	
	

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
