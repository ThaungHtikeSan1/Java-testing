class Test {
    x="";
    a(){
        this.x += "a method ";
        return this
    }
    b(){
        this.x += "b method ";
        return this
    }
    c(){
        this.x += "c method ";
        return this
    }
}

const test = new Test()
console.log(test.a().b().c().a());
console.log(test.x);

const str = "    hello world   "
console.log(str.trim().toUpperCase().replace("HELLO","HI"));