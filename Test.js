/*const urlBacon =
    "https://fakestoreapi.com/products";
(function() {
    $.ajax({
            method: "GET",
            url: urlBacon,
            dataType: "json"
        })
        .done(function(data) {
            console.log(data);
        })
        .fail(function() {
            alert("no good");
        });
})()*/

/*$.ajax({
        url: "https://fakestoreapi.com/products",
        beforeSend: function(xhr) {
            xhr.overrideMimeType("text/plain; charset = x - user - defined ");
        }
    })
    .done(function(data) {
        if (console && console.log) {
            console.log("Sample of data:",
                data.slice(0, 100));
        }
    });*/


//Get all users
/*var url = "https://fakestoreapi.com/products";
var xhr = new XMLHttpRequest()
xhr.open('GET', url, true)
xhr.onload = function() {
    var users = JSON.parse(xhr.responseText);
    if (xhr.readyState == 4 && xhr.status == "200") {
        console.table(users);
    } else {
        console.error(users);
    }
}
xhr.send(null);*/

// Get a user
/*var url = "https://fakestoreapi.com/products";
var xhr = new XMLHttpRequest()
xhr.open('GET', url + '/1', true)
xhr.onload = function() {
    var users = JSON.parse(xhr.responseText);
    if (xhr.readyState == 4 && xhr.status == "200") {
        console.table(users);
    } else {
        console.error(users);
    }
}
xhr.send(null);*/

//POST
/*var url =
    'https://fakestoreapi.com/products';
var data = {};
data.firstname = "John";
data.lastname = "Snow";
var json = JSON.stringify(data);
var xhr = new XMLHttpRequest();
xhr.open("POST", url, true);
xhr.setRequestHeader('Content-type',
    'application/json; charset=utf-8');
xhr.onload = function() {
    var users = JSON.parse(xhr.responseText);
    if (xhr.readyState == 4 && xhr.status == "201") {
        console.table(users);
    } else {
        console.error(users);
    }
}
xhr.send(json);*/

//PUT
// Update a user
/*var url = 'https://fakestoreapi.com/products';
var data = {};
data.firstname = "John2";
data.lastname = "Snow2";
var json = JSON.stringify(data);
var xhr = new XMLHttpRequest();
xhr.open("PUT", url + '/12', true);
xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
xhr.onload = function() {
    var users = JSON.parse(xhr.responseText);
    if (xhr.readyState == 4 && xhr.status == "200") {
        console.table(users);
    } else {
        console.error(users);
    }
}
xhr.send(json);*/

//PROMISE
var f = function(relsolve, reject) {
    relsolve();
    //reject();
}
var promise = new Promise(f);
/*promise
    .then(
        function() {
            console.log('Successful!');
        }
    )
    .catch(
        function() {
            console.log('UnSuccessful!');
        }
    )
    .finally(
        function() {
            console.log('Finally!');
        }
    );*/
promise
    .then(
        function() {
            console.log('1!');
        }
    )
    .then(
        function() {
            console.log('2!');
        }
    )
    .then(
        function() {
            console.log('3!');
        }
    )