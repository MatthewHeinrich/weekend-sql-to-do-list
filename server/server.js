// requires
const express = require( 'express');
const app = express();
const bodyParser = require( 'body-parser' );
// require module routes

// uses
app.use( express.static( 'server/public' ) );
app.use(bodyParser.urlencoded( { extended: true } ) );
// use module routes

// globals
const port = 5000;

// spin up server
app.listen( port, ()=>{
    console.log( 'server is up on:', port );
})