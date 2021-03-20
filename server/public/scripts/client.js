$( document ).ready( function(){
    setupClickListeners();
    getTasks();
}); // end ready

function setupClickListeners(){
    $('#submitButton').on('click', addTask );
    $('#taskOut').on('click', '#1', taskCompletedButton);
    $('#taskOut').on('click', '#deleteTaskButton', deleteTask );
} // end onReady

// POST
function addTask(){
    console.log( 'in addTask' );
    let taskToAdd = {
        task: $('#createTask').val()
    };
    // send object to server
    $.ajax({
        method: 'POST',
        url: '/tasks',
        data: taskToAdd
    }).then( function ( response ){
        console.log( 'in POST with:', response );
        getTasks();
        clearInputs();
    }).catch( function ( error ){
        console.log( error );
        alert('Cannot add task');
    })
} // end addTask

// GET
function getTasks(){
    console.log( 'in getTask' );
    $.ajax({
        method: 'GET',
        url: '/tasks'
    }).then( function( response ){
        console.log( 'back from GET:', response );
        showTasks(response);
    }).catch( function ( error ){
        console.log( error );
        alert('sorry cannot get tasks')

    }) // end ajax
} // end getTasks

// display 
function showTasks(tasks){
    let el = $('#taskOut');
    el.empty();
    for (let i=0; i < tasks.length; i++ ){
        let completedTask = `<input data-id="${tasks[i].id}" type="checkbox" ${tasks[i].completed ? "checked":""} name="layout" id="1" value="option">
        <label for="1"></label>
        <label class="text" for="1">
        </label>`
        el.append(`<tr style="${tasks[i].completed ? "background-color: rgba(124, 242, 124, 0.824)":''}">
            <td> ${tasks[i].task} </td>
            <td> ${completedTask} </td>
            <td> <button data-id="${tasks[i].id}" id="deleteTaskButton" class="btn btn-danger"> Delete </button> </td>
        </tr>`)
    } // end for loop
} // end showTasks

// PUT
function taskCompletedButton(){
    
    const myId = $(this).data( 'id' );
    console.log('in completedTask', myId);
    $.ajax({
        method: 'PUT',
        url: '/tasks/' + myId
    }).then( function ( response ){
        console.log( 'back from PUT', response );
        getTasks();
    }).catch( function ( error ){
        console.log( error );
        alert( 'Can not update' );
    }) // end ajax
}// end taskCompletedButton


// DELETE
function deleteTask(){
    const myId = $(this).data( 'id' );
    console.log('in deleteTask', myId);

    $.ajax({
        method: 'DELETE',
        url: '/tasks/' + myId
    }).then( function ( response ){
        console.log( 'in delete with:', response )
        getTasks();
    }).catch( function ( error ){
        console.log( error );
        alert( 'could not delete' );
    }) // end ajax
} // end deleteTasks

function clearInputs(){
    $('#createTask').val('');
} // end clearInputs