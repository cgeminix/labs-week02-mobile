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
/*var f = function(relsolve, reject) {
    relsolve();
    //reject();
}
var promise = new Promise(f);*/
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
/*promise
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
    )*/
/*promise
    .then(
        function() {
            return new
            Promise(function(resolve) {
                setTimeout(resolve,
                    3000);
            });
        }
    )
    .then(
        function(data) {
            console.log(data);
            return 2;
        }
    )
    .then(
        function(data) {
            console.log(data);
        }
    )*/

// FETCH
/*fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(
        (data) => {
            var htmls = data.map(
                function(posts) {
                    return `<li> 
<h2>${posts.id}</h2>
<h2>${posts.title}</h2>
</li>`
                }
            );
            var html = htmls.join();
            var text =
                document.getElementById('info').innerHTML = html;
        }
    )
    .catch(() => console.log('Có lỗi!'))*/
/*fetch('https://fakestoreapi.com/products')
    .then((response) => response.json())
    .then((json) => console.log(json));*/
/*fetch('https://fakestoreapi.com/products/1')
    .then((response) => response.json())
    .then((json) => console.log(json));*/
/*fetch('https://fakestoreapi.com/products/1', {
        method: 'PUT',
        body: JSON.stringify({
            id: 1,
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));*/

//Axios
//Get Axios
/*axios({
    method: 'get',
    url: 'https://fakestoreapi.com/products/1',

})
    .then(function (response) {
        console.log(response);
    });*/

//ASYNC-AWAIT
//function - callback hell
function httpGetAsync(Url, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == XMLHttpRequest.DONE && xmlHttp.status == 200)
            callback(xmlHttp);
        };
        xmlHttp.open('GET', Url, true);
        xmlHttp.send(null);
}
/*httpGetAsync('https://picsum.photos/200/300', (data) => {
    console.log('1',data);
    document.getElementById('img_1').setAttribute('src', data.responseURL);
    httpGetAsync('https://picsum.photos/200/300', (data) => {
        console.log('2',data);
        document.getElementById('img_2').setAttribute('src', data.responseURL);
            httpGetAsync('https://picsum.photos/200/300', (data) => {
                console.log('3',data);
                document.getElementById('img_3').setAttribute('src',data.responseURL);
            });
        }); 
});*/
//Make - Run promise
/*const myPromise1 = new Promise(function(relsolve, reject){
    httpGetAsync('https://picsum.photos/200/300', relsolve);
});
const myPromise2 = new Promise(function(relsolve, reject){
    httpGetAsync('https://picsum.photos/200/300', relsolve);
});
const myPromise3 = new Promise(function(relsolve, reject){
    httpGetAsync('https://picsum.photos/200/300', relsolve);
});

myPromise1
        .then((data)=>{
            document.getElementById('img_1').setAttribute('src', data.responseURL);
            return myPromise2;})
        .then((data)=>{
            document.getElementById('img_2').setAttribute('src', data.responseURL);
            return myPromise3;})
        .then(
            (data)=>{
            document.getElementById('img_3').setAttribute('src', data.responseURL);
            })*/
const curentPromise = new Promise(function(relsolve, reject){
            httpGetAsync('https://picsum.photos/200/300', relsolve);
        });
const myPromise2 = new Promise(function(relsolve, reject){
            httpGetAsync('https://picsum.photos/200/300', relsolve);
        });
const myPromise3 = new Promise(function(relsolve, reject){
            httpGetAsync('https://picsum.photos/200/300', relsolve);
        });
