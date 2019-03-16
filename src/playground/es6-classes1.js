class Person
{
    constructor (name = "Anonymous", age = 0)
    {
        this.name = name;
        this.age = age;
    }

    getGreetings()
    {
        return `Hi ${this.name}.`;
    }

    getDescription()
    {
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Student extends Person
{
    constructor(name, age, major)
    {
        super(name, age);
        this.major = major;
    }

    hasMajor()
    {
        return !!this.major;
    }

    getDescription()
    {
        let description = super.getDescription();

        if (this.hasMajor)
        {
            description += ` Their major is ${this.major}.`
        }

        return description;
    }
}

class Traveler extends Person {
    constructor(name, location)
    {
        super(name);
        this.location = location;
    }

    getGreetings()
    {
        let greeting = super.getGreetings();

        if (this.location)
        {
            greeting += ` Your location is ${this.location}.`
        }

        return greeting;
    }
}

const me = new Person("Rasitha Ariyarathna");
console.log(me.getGreetings());
console.log(me.getDescription("Rasitha", 27));

const other = new Person();
console.log(other.getGreetings());
console.log(other.getDescription());

const student = new Student("John",21, "Computer Science");
const student1 = new Student("Mala",23,);
console.log(student);
console.log(student1.hasMajor());
console.log(student.getDescription());

const traveler = new Traveler("Rasitha", "Alawwa");
console.log(traveler.getGreetings());
