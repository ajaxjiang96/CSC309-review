function doA(e) {
    console.log("A");
    e();
}

function doB(e) {
    console.log("B");
    // e();
}

function doC(e) {
    console.log("C");
    e();
}

function doD(e) {
    console.log("D");
    // e();
}

function doE(e) {
    console.log("E");
    // e();
}

function doF(e) {
    console.log("F");
    // e();
}



let e = "ha";

doA(function() {
    doB();
    doC(function() {
        doD();
    });
    doE();
});
doF();
