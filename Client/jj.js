var Doc = document.getElementsByClassName.bind(document);
//var username = document.getElementById('username');
var firstName = Doc('first-name-inp')[0],
lastName = Doc('last-name-inp')[0],
username = Doc('username-input')[0],
password = Doc('password-input')[0];
//var username = document.getElementById('username');
var inf = JSON.parse(localStorage["information"]);
var UName = inf.username;
var fName = inf.firstName;
var LName = inf.lastName;

    document.getElementById('username').innerHTML = UName + '</br>' + fName +'</br>'+ LName;




    
