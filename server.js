var http = require('http');
var path = require('path');
var express = require('express');

//
// ## SimpleServer `SimpleServer(obj)`
//
// Creates a new instance of SimpleServer with the following options:
//  * `port` - The HTTP port to listen on. If `process.env.PORT` is set, _it overrides this value_.
//
var router = express();
var server = http.createServer(router);

router.use(express.static(path.resolve(__dirname, 'client')));

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Survey server listening at", addr.address + ":" + addr.port);
});

var display = function (data){
	console.log('imported data: '+ data);
}

function getData (){
	return data;
}

var createObject = function () {
	return {
		name: 'Uurtsaikh',
		email: 'uurtsaikh.ba@gmail.com'
	};
} 
