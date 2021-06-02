// Class Topics :  Best practise to use axios

import {Api} from './api';

Api.get('user').then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})


Api.post('user', {"name":'prafful',"job":"developer"}).then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})