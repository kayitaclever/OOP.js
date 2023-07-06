// Create a class called Person with properties name and age.
//  Add a method greet() that prints
//  a greeting message with the person's name.

class Person{
    constructor(name,age){
        this.name=name
        this.age= age
    }
   greet () {
    console.log(`Hi everyone my name is ${this.name}`)
    
   }
        
    }


const person= new Person("John",34)
person.greet()

// Create a class called Rectangle with properties
//  width and height. Add a method getArea() that calculates and returns 
//  the area of the rectangle.


class Rectangle{
    constructor(width,height){
        this.width= width
        this.height=height
    }
    getArea(){
        const area= this.width*this.height
        console.log(area)
    }

}
const rectangle= new Rectangle(34,10)
rectangle.getArea()

// Create a class called Circle with property radius. Add methods getArea()
//  and getCircumference() that calculate and return the area and 
//  circumference of the circle, respectively.

class Circle{
    constructor(radius){
        this.radius= radius

    }
    getArea(){
        console.log(this.radius*this.radius*Math.PI)
    }
    getCircumference(){
        console.log(this.radius*2*Math.PI) 
    }

}
const circle= new Circle(10)
circle.getArea()
circle.getCircumference()

// Create a class called BankAccount with properties accountNumber and balance. 
// Add methods deposit(amount) 
// and withdraw(amount) 
// to modify the balance.


class BankAccount{
    constructor(accountNumber,balance){
        this.accountNumber=accountNumber
        this.balance= balance

    }
    deposit(amount){
     this.balance+= amount
        
    }
    withdraw(amount){
        this.balance-=amount
        
    }

}
const bankAccount= new BankAccount("236457676485",7000)
bankAccount.deposit(1000)
console.log(bankAccount.balance)
bankAccount.withdraw(500)
console.log(bankAccount.balance)


// Create a class called Student with properties name and grades. Add methods addGrade(grade) 
// and getAverageGrade() to store and calculate the average grade.

class Student{
    constructor(name,grades){
        this.name= name
        this.grades=[]
    }
    addGrade(grade){
        this.grades.push(grade)
      console.log(this.grades)
    }
    getAverageGrade(){
        const sum= this.grades.reduce(function(a,b){
              return a+b
        },0
        )
        console.log(sum/this.grades.length)
    }


}
const student= new Student("Clever")
student.addGrade(30)
student.addGrade(40)
student.addGrade(57)
student.getAverageGrade()
// Create a class called Car with properties make, model, and year. Add a method start() that prints a message indicating the car has started.
// javascript

class Car{
    constructor(make,model,year){
        this.make=make
        this.model=model
        this.year= year

    }
    start(){
        console.log("The car has started")
    }  
}
const car= new Car("Toyata","Toyota3046",2023)
car.start()

// Create a class called ShoppingCart with property items. Add methods addItem(item) and removeItem(item)
//  to add or remove items from the cart.

class ShoppingCart{
    constructor(items){ 
    this.items=[]
}
addItem(item){
    this.items.push(item)
}

}
