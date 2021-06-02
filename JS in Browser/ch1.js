// Class Topic: Call in Browser

console.log('Call in browser')

// Local Storage
localStorage.setItem("eid", 1)
localStorage.setItem("ename","prafful")

const euser = localStorage.getItem("eid")
const euser2 = localStorage.getItem("ename")
console.log(euser, euser2)

// Session Storage
sessionStorage.setItem("sname","Session Anamika")
const suser = sessionStorage.getItem("ename")
console.log(suser)

// Cookies Storage
// document.cookie = "username=prafful;max-age="+60*60*24*10
