var FooBar = function(number) {
    for (var j=1; j<number+1; j++) {
        if (j%3 === 0 && j%5 === 0) {
            console.log("FooBar")
        } else if (j%3 === 0) {
            console.log("Foo")
        } else if (j%5 === 0) {
            console.log("Bar")
        } else {
            console.log(j)
        };
    };
};

FooBar(20);

