class Client {
    name
    cpf
}

class Account {
    #balance
    #branch

    withdraw(value) {
        if(this.#balance <= value) return 
        this.#balance -= value
        return value
    }

    deposit(value) {
        if(value <= 0) return
        this.#balance += value
    }
}

const client1 = new Client()
client1.name = "João"
client1.cpf = "111.111.111-11"

const accountClient1 = new Account()
accountClient1.#balance = 0
accountClient1.#branch = 1001
