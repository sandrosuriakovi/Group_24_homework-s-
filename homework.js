//1
let num = Number(prompt('please enter a number:'))

if (num % 2 == 0){
    console.log('your number is even')
}
else {
    console.log('your number is odd')
}

//2
let celsius = Number(prompt('please enter the current tempreture:'))
if (celsius <= 10){
    console.log('the wether is cold')
}
else if(celsius <= 20){
    console.log('the wether is warm')
}
else {
    console.log('the wether is hot')
}
//3
let school = Number(prompt('enter a grade between 0-100:'))

if (school <= 100){
    console.log('A')
}
else if (school <= 89){
    console.log('B')
}
else if (school <= 79){
    console.log('C')
}
else if (school <= 69){
    console.log('D')
}
else if (school <= 59){
    console.log('F')
}