jarl.extend( {

	// Consola

	consola: console,

	teDaCuen: function(type, message) {
	  if (jarl.consola && message) {
	    return jarl.consola[type](message);
	  }
	  message = type;
	  return alert(message);
	},

	// Agromenauers

	Agromenauer: Array,

	enElAgromenauer: function(elem, arr, i) {
		return jarl.inArray(elem, arr, i);
	},

	esUnAGromenauer: function(arr) {
		return jarl.isArray(arr);
	},

	// Duodenos

	Duodeno: Object,

	esUnDuodeno: function(arr) {
		return jarl.isPlainObject(arr);
	},

	duodenoVacior: function(arr) {
		return jarl.isPlainObject(arr) && jarl.isEmptyObject(arr);
	},

	// Acapiporlas

	acapiporla: function(obj, callback) {
		return jarl.each(obj, callback);
	},







	comorr: function(type, value) {
		if (value) {
		  if (type === 'funcioor') {
		    return jarl.isFunction(value);
		  } else if (type === 'ventanar') {
		    return jarl.isWindow(value);
		  } else if (type === 'numeror') {
		    return jarl.isNumeric(value);
			} else if (type === 'apiticainllanor') {
		    return jarl.isPlainObject(value);
			} else if (type === 'apiticainhuecor') {
		    return jarl.isEmptyObject(value);
		  }
		} else {
			value = type;
			return jarl.type(value);
		}
	},

	quitaar: function(value) {
		return value.trim();
	},

	alAtaqueer: function(code) {
		return jarl.globalEval(code);
	}

});


jarl.each( ( "fistro" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jarl.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );


jarl.event.special.fistro = {
		trigger: function() {
			jarl(this).css('background-image', 'url(http://www.emtstatic.com/2016/04/lucar.png)');
			jarl(this).css('background-position', 'center');
		}
}
