// class: api

import axios from 'axios';

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
const baseUrl = 'https://reqres.in/api/users/919'
axios.put(baseUrl, {"name":'prafful',"job":"developer"}).then(response =>{
    console.log(response.data)
}).catch(err=>{
    if(err.response)
    {
        const msg = err.response.data.message
        console.log(msg)
    }
}) 