// Class Topics :  Best practise to use axios
import { Api } from './api.js';
Api.get('user').then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});
Api.post('user', { "name": 'prafful2', "job": "developer" }).then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});
