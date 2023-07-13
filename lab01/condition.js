//conditional statement
//1 possible case: if
//2 possible cases :if else
//more than 2 possible cases: if + else if + else
grade = 3
if(grade >= 5.0){
    console.log("Your grade is "+grade)
    console.log("You have passed this subject")
}
   
else{
    console.log("Your grade is "+grade)
    console.log("You have failed this subject")
}

a = 3
b = 4
c = 5

if(a >= b && a >= c)
    console.log("Max is a")
else if( b>=a && b >= c)
    console.log("Max is b")
else
    console.log("Max is c")

option = 1
switch(option){
    case 1:
        console.log("Your option is 1")
        break;
    case 2:
        console.log("Your option is 2")
        break;
    case 3:
        console.log("Your option is 3")
        break;
    case 4:
        console.log("Your option is 4")
        break;
    default:
        console.log("Invalid choice")
        break;
}