$( document ).ready( function(){
    setupClickListeners();
    getTasks();
});

function setupClickListeners(){
    $('#submitButton').on('click', addTask );
    $('#taskOut').on('click', '.completedTaskButton', taskCompletedButton );
    $('#taskOut').on('click', '.deleteTaskButton', deleteTask );
} // end onReady

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
    }).then( function( response ){
        console.log( 'back from GET:', response );
        showTasks(response);
    }).catch( function ( error ){
        console.log( error );
        alert('sorry cannot get tasks')

    })
} // end getTasks

function showTasks(tasks){
    let el = $('#taskOut');
    el.empty();
    for (let i=0; i < tasks.length; i++ ){
        let completedTask = `<button data-id="${tasks[i].id}" class="completedTaskButton"> Check it Off </button>`
        if (tasks[i].completed){
            completedTask = '';
        }
        el.append(`<tr>
            <td> ${tasks[i].task} </td>
            <td> ${completedTask} </td>
            <td> <button class="deleteTaskButton"> Delete </button> </td>
        </tr>`)
    } // end for loop
} // end showTasks

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
    })
}// end taskCompletedButton


function deleteTask(){
    console.log('in deleteTask');
}