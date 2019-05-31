//tsc 1.test1.ts
//node  1.test1.js
//

function test1(){
    for(var i=0;i<5;i++){
        console.log(i);
    }

    //in is accessable inside function in JS
    console.log(i);

}

function test2(){
    for(let i=0;i<5;i++){
        console.log(i);
    }

    //not accessable in typescript, showing error
    //still compail and genrate JS
    console.log(i);
}

test1();
test2();
