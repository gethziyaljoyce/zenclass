



class calculator {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    getA() {
        return this.a;
    }
    getB() {
        return this.b;
    }
}
class add extends calculator {
    constructor(a, b, c) {
        super(a, b);
        this.c = c;
    }
    getC() {
        this.c=this.a+this.b;
        console.log(this.c);
    }
}

var dddd = new add(2,5);
dddd.getC();