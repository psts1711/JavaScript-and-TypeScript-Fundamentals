"use strict";
// class: api
exports.__esModule = true;
var axios_1 = require("axios");
// get
/* const baseUrl = 'https://reqres.in/api/users'
axios.get(baseUrl).then(response =>{
    console.log(response.data)
}).catch(err=>{
    console.log(err)
}) */
// error
/* const baseUrl = 'https://reqres.in/api/users'
axios.get(baseUrl + '/900').then(response =>{
    console.log(response.data)
}).catch(err=>{
   if(err.response)
   {
       const msg = err.response.data.message
       console.log(msg)
   }
   console.log('something went wrong')
}) */
// post
/* const baseUrl = 'https://reqres.in/api/users'
axios.post(baseUrl, {"name":'shagun',"job":"developer"}).then(response =>{
    console.log(response.data)
}).catch(err=>{
    if(err.response)
    {
        const msg = err.response.data.message
        console.log(msg)
    }
})  */
// put and patch
var baseUrl = 'https://reqres.in/api/users/919';
axios_1["default"].put(baseUrl, { "name": 'prafful', "job": "developer" }).then(function (response) {
    console.log(response.data);
})["catch"](function (err) {
    if (err.response) {
        var msg = err.response.data.message;
        console.log(msg);
    }
});
