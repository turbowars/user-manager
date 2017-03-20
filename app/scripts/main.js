/* @name ContextMenu
 * @calls the context menu function on the user list item 
$(function(){
    $.contextMenu({
        selector: '.user-list-item button', 
        items: $.contextMenu.fromMenu($('#contextMenu'))
    });
});
 */



/* @name ModuleName 
 * @description multiline 
 * @params A What a does here 
 * @returns Object 
 */
 


var context;

//Read the list of users
var getUsers = function() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'data/users.json');
    xhr.onload = function() {
        if (xhr.status === 200) {
            context = JSON.parse(xhr.responseText);
            localStorage.setItem("data", xhr.responseText);
            console.log('data: \n' + context);
            bindData();
        } else {
            alert('Request failed.  Returned status of ' + xhr.status);
        }
    };
    xhr.send();
}

//Create a user

//Update the users
var updateUsers = function(id) {


}

//Delete a user
var deactivate = function(id) {

    var xhr = new XMLHttpRequest(), updatedData;
    xhr.open('PUT', 'data/users.json');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
        if (xhr.status === 200) {
            var userData = JSON.parse(xhr.responseText);
            for (i = 0; i < userData.length(); i++) {
                if (userData[i].id == id) {
                    alert('Om nama shivay!');
                    updatedData = userData;
                }
            }
        }
    };
    xhr.send(JSON.stringify(updatedData));

}

//Helper Functions

var bindData = function() {

    //Binding data
    var source = $("#user-template").html();
    var template = Handlebars.compile(source);
    var html = template(context);
    $('.user-list tbody').append(html);
}

getUsers();
