// require
const express = require( 'express' );
const router = express.Router();

const pool = require('../pool');

// GET
router.get( '/', ( req, res )=>{
    console.log( 'in route GET' );
}).catch( ( error )=>{
    console.log( error )
    res.sendStatus( 500 );
}) // end GET route

// POST
router.post( '/', ( req, res )=>{
    console.log( 'in route POST', req.body );
    res.sendStatus( 200 );
}).catch( ( error )=>{
    console.log( error );
    res.sendStatus( 500 );
})

// PUT

// DELETE


// export
module.exports = router;