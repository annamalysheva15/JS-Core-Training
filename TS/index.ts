//npm i -g typescript
// tsc --init
//tsc .\index.ts

//Types
const str: string = "Hello!"

const num: number = 15

const isLoading: boolean = true

let year: number = 2021
// year = "" // error

let year2: any = 2021
year2 = "2021"
year2 = ["20", 21]

const arr: number[] = [1, 2, 3]
//Generic
const arr2: Array<number> = [4, 5, 6]
const arr3: [number, string, number] = [1, "2", 3]

//Function
function greet(name: string): void {
    console.log(`Hello ${name}`)
}
// greet("Alex")

//Never
function getMessage(message: string): never {
    throw new Error(message)
    // while(true) {}
}

//Type
type Message = string

const message: Message = "123"

// const message2: Message = 123 - error
type Id = string | number
const id: Id = 123

//Interface
interface Vehicle {
    readonly id: number
    engine: {
        type: string
        volume: number
    }
    color?: string
}

const vehicle: Vehicle = {
    id: 123,
    engine: {
        type: "injector",
        volume: 1.6
    }
}

vehicle.color = "white"
// vehicle.id = "456" - error

const vehicle2 = {} as Vehicle

const vehicle3 = <Vehicle>{}

//Interface inheritance
interface Car extends Vehicle {
    getVolume: () => number
}

const vehicle4: Car = {
    id: 456,
    engine: {
        type: "injector",
        volume: 1.6
    },
    getVolume(): number {
        return this.engine.volume
    }
}

const style = {
    width: "100px",
    height: "100px",
    border: "1px solid black"
    //...
    //...
}

interface Style {
    width: string
    height: string
    border: string
    //...
    //...
}

interface IStyle {
    [key: string]: string
}

//Interfaces with classes
interface IReport {
    dateCreated: Date
    getData(date: Date): void
}

class MailingReport implements IReport {
    dateCreated: Date = new Date()
    getData(date: Date) {
        this.dateCreated = date
    }
}

//Enums
enum Cards {
    Standard,
    Gold,
    Platinum,
    VIP = "VIP"
}

const card = Cards.Standard //0
const card2 = Cards[2] //"Platinum"
const card3 = Cards.VIP //"VIP"

//Class
class TypeScript {
    version: string //private variable

    constructor(version: string) {
        this.version = version
    }

    getInfo(name: string) {
        return `[${name}]: TypeScript version ${this.version}`
    }
}
class Bus {
    readonly wheels: number = 4
    readonly color: string

    constructor(color: string) {
        this.color = color
    }
}
// Just another way of creating the same class as Bus
class Bus2 {
    readonly wheels: number = 4

    constructor(readonly color: string) {
        this.color = color
    }
}
class Animal {
    protected voice: string = "" //available in all subclasses
    public color: string = "white" //available in all subclasses

    constructor() {
        this.create()
    }

    private create() { //available only in Animal
        console.log("Created")
    }
}
class Cat extends Animal {
    public setVoice(voice: string): void {
        this.voice = voice
    }
}

const cat = new Cat()
//cat.voice //error
console.log(cat);

const dog = new Animal()
console.log(dog);
// dog.voice //error

cat.setVoice("Meow")
console.log(cat.color)

//Function
function add(a: number, b: number): number {
    return a + b
}

function toUppercase(str: string): string {
    return str.trim().toUpperCase()
}
