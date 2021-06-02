// Class Topic: Moment JS
import Moment from 'moment';
const date = new Date();
const formattedDate = Moment(date).format('MMMM Do YYYY, h:mm:ss a');
const formattedDate2 = Moment(date).format('L');
console.log(formattedDate)
console.log(formattedDate2)



//const date = new Date();
//const date2 = Date.now();

//console.log(date)
//console.log(date2)
