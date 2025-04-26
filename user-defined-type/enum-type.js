// 
// enum number
var RequestType;
(function (RequestType) {
    RequestType[RequestType["readData"] = 0] = "readData";
    RequestType[RequestType["saveData"] = 1] = "saveData";
    RequestType[RequestType["deleteData"] = 2] = "deleteData";
})(RequestType || (RequestType = {}));
console.log(RequestType);
// string enum
var RequestType1;
(function (RequestType1) {
    RequestType1["readData"] = "Arifa apu";
    RequestType1["saveData"] = "Yeasmin apu";
    RequestType1["deleteData"] = "Minaj apu";
})(RequestType1 || (RequestType1 = {}));
console.log(RequestType1.readData);
