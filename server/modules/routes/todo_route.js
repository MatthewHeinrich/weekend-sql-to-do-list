// require
const express = require( 'express' );
const { query } = require('../pool');
const router = express.Router();

const pool = require('../pool');

// GET
router.get( '/', ( req, res )=>{
    console.log( 'in route GET' );
    let queryString = `SELECT * FROM "to_do_list"`;
    pool.query( queryString ).then( ( results )=>{
        res.send( results.rows );
    }).catch( ( error )=>{
        console.log( error )
        res.sendStatus( 500 );
    })
}) // end GET route

// POST
router.post( '/', ( req, res )=>{
    console.log( 'in route POST', req.body );

    let queryString = `INSERT INTO "to_do_list" ( task ) VALUES ( $1 )`;
    pool.query( queryString, [ req.body.task ] ).then( ( results )=>{

    res.sendStatus( 200 );
}).catch( ( error )=>{
    console.log( error );
    res.sendStatus( 500 );
    })
})

// PUT
router.put( '/:id', ( req, res )=>{
    console.log( 'in route PUT', req.params );
    let queryString = `UPDATE "to_do_list" SET "completed"=true WHERE "id"=$1`;
    pool.query( queryString, [ req.params.id ]).then( ( results )=>{
        res.sendStatus( 200 );
    }).catch( ( error )=>{
        console.log( error );
        res.sendStatus( 500 );
    })
})
// DELETE


// export
module.exports = router;