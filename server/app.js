var express = require( 'express' );
var app = express();
var path = require( 'path' );
var bodyParser = require( 'body-parser' );

app.listen( 8081, 'localhost', function() {
  console.log( 'Hailing frequencies open. Listening on PORT 8081.' );
});

app.use( express.static( 'public' ) );

app.get( '/', function( req, res ) {
  res.sendFile( path.resolve('public/views/index.html' ) );
});
