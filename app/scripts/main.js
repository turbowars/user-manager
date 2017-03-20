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

//Handlebar helpers
Handlebars.registerHelper('for', function(from, to, incr, block) {
    var accum = '';
    for(var i = from; i < to; i += incr)
        accum += block.fn(i);
    return accum;
});

//Create a user

//Read the list of users
var xhr = new XMLHttpRequest();
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


