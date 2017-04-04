jarl.extend( {


});


jarl.each( ( "holaVictor" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jarl.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );


jarl.event.special.holaVictor = {
		trigger: function() {
			jarl.teDaCuen('holaaa');
		}
}
