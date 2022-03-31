"use strict";
// alert("Welcome to your life !!!!");
let message = "";
function saymessage(part1, part2, part3) {
    return part1 + " " + part2 + " " + part3;
}
;
document.addEventListener("DOMContentLoaded", function () {
    var _a;
    (_a = document.querySelector(".log")) === null || _a === void 0 ? void 0 : _a.innerHTML = saymessage("Hello", "World", "again");
});
