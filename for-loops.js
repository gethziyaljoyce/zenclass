function forDetails() {
    var obj = [
        { person: "Name 1", age: "2", company: "GUVI" },
        { person: "Name 2", age: "5", company: "GUVI geek" },
        { person: "Name 3", age: "8", company: "GUVI geek network" },
    ]
    for (i = 0; i < obj.length; i++) {
        console.log(obj[i]);
    }
}

forDetails();

function forEachDetails() {
    var obj = [
        { person: "Name 1", age: "2", company: "GUVI" },
        { person: "Name 2", age: "5", company: "GUVI geek" },
        { person: "Name 3", age: "8", company: "GUVI geek network" },
    ]
    obj.forEach(myFunction);
}

function myFunction(item, index) {
    console.log(item);
}

forEachDetails();


function forInDetails() {
    var obj = [
        { person: "Name 1", age: "2", company: "GUVI" },
        { person: "Name 2", age: "5", company: "GUVI geek" },
        { person: "Name 3", age: "8", company: "GUVI geek network" },
    ]
    var i;
    for (i in obj) {
        console.log(obj[i]);
        var j;
        for (j in obj[i]) {
            console.log(obj[i][j]);
        }
    }
}
forInDetails();

function forOfDetails() {
    var obj = [
        { person: "Name 1", age: "2", company: "GUVI" },
        { person: "Name 2", age: "5", company: "GUVI geek" },
        { person: "Name 3", age: "8", company: "GUVI geek network" },
    ]
    for (const x of obj) {
        console.log(x);
    }
}
forOfDetails();
