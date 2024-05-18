interface Pessoa {
    nome: string,
    idade: number,
    endereco: string
}

const pessoas: Pessoa[] = [
    {nome: "João", idade: 25, endereco: "Rua das Flores, 123"},
    {nome: "Maria", idade: 30, endereco: "Avenida do Sol, 456"},
    {nome: "Pedro", idade: 35, endereco: "Travessa da Lua, 789"}
]

console.log(pessoas)