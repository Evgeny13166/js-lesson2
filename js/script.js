"use strict";
let boris = {
    firstName: "Boris", 
    lastName: "Borovikov", 
    age: 20, 
    grades:[3, 4, 3, 2, 5], 
    course: 3, 
    gender: "male",
};
let oksana = {
    firstName: "Oksana", 
    lastName: "Sinichkina", 
    age: 19, 
    grades:[4, 4, 3, 4, 5], 
    course: 2, 
    gender: "female",
};
let peter = {
    firstName: "Peter", 
    lastName: "Voronova", 
    age: 17, 
    grades:[3, 3, 3, 4, 5], 
    course: 1, 
    gender: "male",
};
let dmitry = {
    firstName: "Dmitry", 
    lastName: "Konovalov", 
    age: 19, 
    grades:[3, 3, 3, 3, 3], 
    course: 2, 
    gender: "male",
};
let ekaterina = {
    firstName: "Ekaterina", 
    lastName: "Ivanova", 
    age: 21, 
    grades:[2, 3, 2, 3, 3], 
    course: 4, 
    gender: "female",
};
let andrey = {
    firstName: "Andrey", 
    lastName: "Gorbachev", 
    age: 20, 
    grades:[5, 4, 3, 5, 5], 
    course: 3, 
    gender: "male",
};
let ivan = {
    firstName: "Ivan", 
    lastName: "Bochkarev", 
    age: 18, 
    grades:[2, 3, 3, 4, 2], 
    course: 1, 
    gender: "male",
};
let valery = {
    firstName: "Valery", 
    lastName: "Demyanov", 
    age: 21, 
    grades:[5, 4, 5, 4, 5], 
    course: 4, 
    gender: "female",
};
let maria = {
    firstName: "Maria", 
    lastName: "Feldman", 
    age: 19, 
    grades:[4, 4, 3, 4, 5], 
    course: 2, 
    gender: "female",
};
let artem = {
    firstName: "Artem", 
    lastName: "Stepanov", 
    age: 19, 
    grades:[2, 3, 3, 2, 3], 
    course: 2, 
    gender: "male",
};

let students = [boris, oksana, peter, dmitry, ekaterina, andrey,ivan, valery, maria, artem];

for (let i = 0; i < students.length; i++){
    let tmp = students[i].grades;
    let sum = 0;
    for (let k = 0; k < tmp.length; k++){
        sum += tmp[k];
    };

    let avg = sum / tmp.length;

    if(students[i].age >= 18 && students[i].age < 27 &&  students[i].gender === "male" && avg < 3) {
        students[i].isReadyForArmy = "yes";
        delete students[i].course;
        delete students[i].grades;
        /*console.log(students[i].firstName + " " + students[i].lastName + ": " + avg + " " + "true" + " " + students[i].isReadyForArmy+ ": ");*/
    }; 
};

let studentsInArmy = [];
    console.log(studentsInArmy);

for( let l = 0; l < students.length; l++){
    if( students[l].isReadyForArmy === "yes"){
        studentsInArmy.push(students[l].firstName + " " + students[l].lastName)
    };
};
















