//class => object template
// const myself={
//     myName : "Thaung Htike San",
//     age : 26,
//     township : "Mingaladon",
//     canTeach(){
//         return `${this.myName} can teach`
//     }

// }
// console.log(myself.myName);
// console.log(myself.canTeach());

// class Myself{
//     myName = "May";
//     age = 28;
//     township = "South Okkapa"
//     canTeach(){
//         return `${this.myName} can teach`
//     }
// }

// console.log(Myself);
// const myself1 = new Myself();
// console.log(myself1.myName);
// console.log(myself1.canTeach());

// class Student{
//     constructor(inputName,inputAge,inputTownship){
//         this.Name = inputName ;
//         this.Age = inputAge;
//         this.Township = inputTownship   
//     }
// }

// const myself1= new Student('Thaung',26,'Mingaladon')
// const myself2= new Student('May',28,'South Okkalapa')
// console.log(myself1.Name);
// console.log(myself2);

// Inheritance
// class Person {
//     name = "Thaung";
//     aga = 26;
// }

// class Student extends Person {
//     name = "May";
//     age = 28;
//     school = "no4";
// }

// const person = new Person()
// const student = new Student()

// console.log(person);
// console.log(student);

// class Person {
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
// }

// class Student extends Person {
//     constructor(name,age,school){
//         super(name,age);
//         this.school = school;
//     }  
// }

// const person = new Person("Thaung",26)
// const student = new Student("May",28,"no4")

// console.log(person);
// console.log(student);

// class Free{
//     repo = "unlimited";
//     pull(){}
//     push(){} 
// }

// class Team extends Free{
//     codeSpace = true;
//     online(){}
// }
// class Enterprice extends Team{
//     data = true;
//     run(){}
// }

// const free = new Free()
// const team = new Team()
// const enterprice = new Enterprice()

// console.log(free);
// console.log(team);
// console.log(enterprice);

// Encapsulation
// class A{
//     #x=10;
//     // getter,setter
//     getter(){
//         return this.#x
//     }
//     setter(newValue){
//         return this.#x = newValue;
//     }
// }

// const a = new A()
// console.log(a.getter());
// console.log(a.setter(15));

// class Bank{
//     #money = 0;

//     checkMoney(){
//         return this.#money;
//     }

//     deposit(amount){
//         return this.#money += amount;
//     }

//     withdraw(amount){
//         if(amount <= this.#money){
//             this.#money -= amount
//             return `withdraw money ${amount} successfully`
//         }else{
//             return `not enough money`;
//         }
//     }

//     transfer(amount,whom){
//         if(amount <= this.#money){
//             this.#money -= amount
//             return `transfer ${amount} to ${whom} Ssuccessfully`
//         }else{
//             return `not enough money`
//         }
//     }
// }

// const bank = new Bank()

// console.log("check money => " + bank.checkMoney());
// console.log("deposit money => " + bank.deposit(60000));
// console.log("withdraw money => " + bank.withdraw(20000));
// console.log("transfer money => " + bank.transfer(10000,"May"));
// console.log("check money => " + bank.checkMoney());

