$( document ).ready( onReady );

function onReady(){
    $('#submitButton').on('click', addTask );
    // getTasks();
} // end onReady

function addTask(){
    console.log( 'in addTask' );
    let taskToAdd = {
        task: $('#createTask').val(),
        complete: false
    }
    // send object to server
    $.ajax({
        method: 'POST',
        url: '/tasks',
        data: taskToAdd
    }).then( function ( response ){
        console.log( 'in POST with:', response );
        
    }).catch( function ( error ){
        console.log( error );
        alert('Cannot add task');
    })
} // end addTask

function getTasks(){
    console.log( 'in getTask' );

    $.ajax({
        method: 'GET',
        url: '/tasks'
    }).then( function ( response ){
        console.log( 'back from GET:', response );

    }).catch( function ( error ){
        console.log( error );
        alert('sorry cannot get tasks')
    })
} // end getTasks
