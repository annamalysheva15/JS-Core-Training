// Создаем подобие Redux
class Subject {
  constructor() {
    // все подписки
    // можем хранить набор функций и их вызывать
    this.observers = []
  }
  // класс обзервера обеспечивает более гибкий подход
  subscribe(observer) {
    this.observers.push(observer)
  }
  unsubscribe(observer) {
    this.observers = this.observers.filter(item => item !== observer)
  }
  //fire action
  init(action) {
    this.observers.forEach(observer => {
      observer.update(action)
    })
  }
}

class Observer {
  constructor(state = 1) {
    this.state = state
    this.initialState = state
  }

  update(action) {
    switch (action.type) {
      case "INCREMENT":
        this.state = ++this.state
        break;
      case "DECREMENT":
        this.state = --this.state
        break;
      case "ADD":
        this.state += action.payload
        break;
      default: this.state = this.initialState
    }
  }
}

const subject = new Subject()

const observer1 = new Observer()
const observer2 = new Observer(10)

subject.subscribe(observer1)
subject.subscribe(observer2)
//шина событий
subject.init({type: "INCREMENT"})
subject.init({type: "DECREMENT"})
//диспатч одного события сразу изменяет все подписки - СУТЬ ПАТТЕРНА
subject.init({type: "ADD", payload: 20})

console.log(observer1.state)
console.log(observer2.state)