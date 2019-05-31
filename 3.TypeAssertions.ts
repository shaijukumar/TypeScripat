//=========================================
//Type Assertions
//=========================================
//Will not change the type of variable at runtime
//This is a way to to tell compailer about the type of variable
let messsage;
messsage = "abc"
let endsWithC = messsage.endsWith('c');
let endsWithC1 = (<string>messsage).endsWith('c');//Type Assertions will give interesse
let endsWithC2 = (messsage as string).endsWith('c');//alternative way