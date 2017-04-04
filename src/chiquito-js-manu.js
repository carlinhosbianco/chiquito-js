jarl.extend( {


});


jarl.each( ( "holaManu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jarl.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );


jarl.event.special.holaManu = {
		trigger: function() {
			jarl.teDaCuen('holaaa');
		}
}
