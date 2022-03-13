let EventEmitter = require("events").EventEmitter;

let myevent = new EventEmitter();


function ischoolHandler1(event){
    console.log("iSchoolevent Happend", event);
};
function yschoolHandler1(event){
    console.log("ySchoolevent Happend", event);
};
function ischoolHandler2(event){
    console.log("iSchoolevent Happend", event);
};
myevent.addListener("ischoolevent", ischoolHandler1);
myevent.addListener("ischoolevent", ischoolHandler2);
myevent.addListener("yschoolevent", yschoolHandler1);

// console.llog(myevent.listenerCount("ischoolevent"));
// eventnames with listeners attached
console.log(myevent.eventNames());

myevent.emit("ischoolevent",{time : new Date(), message : "hello from ischool"});
myevent.emit("ischoolevent",{time : new Date(), message : "hello from ischool"});
