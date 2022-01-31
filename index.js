class Client {
    nome
    cpf
    agencia
    saldo
    rg
}

const client1 = new Client()

client1.name = "João"
client1.cpf = "111.111.111-11"
client1.branch = 1001
client1.balance = 0
client1.rg = "12.345.678-9"

console.log(client1)