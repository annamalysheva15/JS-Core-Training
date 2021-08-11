class Database {
  constructor(data) {
    if(Database.isCreated) {
      return Database.instance
    }
    Database.instance = this
    Database.isCreated = true
    this.data = data
  }

  getData() {
    return this.data
  }
}

const db1 = new Database("MongoDB")
console.log(db1.getData())

const db2 = new Database("MySQL")
console.log(db2.getData());