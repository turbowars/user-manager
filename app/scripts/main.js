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
 

//Create a user

//Read the list of users
var context, xhr = new XMLHttpRequest();
xhr.open('GET', 'data/users.json');
xhr.onload = function() {
    if (xhr.status === 200) {
    	context = JSON.parse(xhr.responseText);
        console.log('data: \n' + context);
        bindData();
    }
    else {
        alert('Request failed.  Returned status of ' + xhr.status);
    }
};
xhr.send();

function bindData() {

//Binding data
var source   = $("#user-template").html();
var template = Handlebars.compile(source);
var html    = template(context);
$('.user-list tbody').append(html);
}

//Update the users

//Delete a user


