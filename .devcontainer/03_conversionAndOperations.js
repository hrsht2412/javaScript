let score =33
let convertNumber=String(score);
// console.log(typeof (convertNumber))
// console.log(convertNumber)

// stack memory
// name_01="harshit"
// name_02=name_01;
// console.log(name_02);
// name_02="ram"
// console.table([name_01,name_02])

// heap memory
let obj_01={
    namee:"harshit",
    age:25

}
let obj_02=obj_01
console.log(obj_02);
obj_02.age=27;


console.table([obj_01,obj_02])
