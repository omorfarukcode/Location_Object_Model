const url = document.getElementById("url")
const origin = document.getElementById("origin")
const hostName = document.getElementById("host-name")
const port = document.getElementById("port")
const protocal = document.getElementById("protocal")
const pathName = document.getElementById("path-name")

// console.log(location.origin);

url.innerText = location.origin;
origin.innerText = location.origin;
hostName.innerText = location.hostname;
port.innerText = location.port;
protocal.innerText = location.protocol;
pathName.innerText = location.pathname;

function locationReload(){
    location.reload();
}
function replaceLocation(){
    location.replace('https://omorfarukcode.github.io/Digital-Tasbih/');
}
function assignLocation(){
    location.assign("https://omorfarukcode.github.io/fother_bank/");
}