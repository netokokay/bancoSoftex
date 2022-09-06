let prompt = require('prompt-sync')();
let cnt = 0;

class banco {
    constructor(conta, saldo, tipo, agencia) {
        this.conta = cnt;
        this.saldo = 0.0;
        this.tipo = 'CC';
        this.agencia = 2022;
        cnt += 1;
    }

    buscarSaldo() {
        let sld = this.saldo;
        return sld;
    }

    deposito(valor) {
        this.saldo = this.saldo + valor;
        console.log(`Você depositou ${valor} e seu saldo agora é ${this.saldo}`)
    }
    saque(valor) {
        if (valor <= this.saldo && valor > 0) {
            this.saldo = this.saldo - valor;
            console.log(`Saque de ${valor} aprovado, saldo restante ${this.saldo} aguarde a contagem de cédula.`)
        } else if (valor <= 0) {
            console.log("Você não pode sacar R$ 0,00 ou valor menor")
        } else {
            console.log(`Você tentou sacar ${valor} mas seu saldo é insuficiente, saldo atual: ${this.saldo}`)
        }
    }
    conta() {
        return this.conta();
    }
}

let conta1 = new banco();

console.log("Saldo inicial: ");
console.log(conta1.buscarSaldo());
conta1.deposito(100);
console.log("Sacando mais do que tem na conta: ");
conta1.saque(150);
console.log("Sacando menos de R$ 0,00");
conta1.saque(0);
console.log("Efetuando saque correto: ");
conta1.saque(50);
conta1.deposito(2250)
console.log("Verificando saldo final: ");
console.log(conta1.buscarSaldo());
console.log("Número da conta: ");
console.log(conta1.conta);

console.log(" ")
console.log(" ")
console.log("Conta de exemplo 02: ")
console.log(" ")

let conta2 = new banco();
console.log("Saldo inicial: ");
console.log(conta2.buscarSaldo());
conta2.deposito(500);
console.log("Sacando mais do que tem na conta: ");
conta2.saque(550);
console.log("Sacando menos de R$ 0,00");
conta2.saque(0);
console.log("Efetuando saque correto: ");
conta2.saque(250);
conta2.deposito(2453)
console.log("Verificando saldo final: ");
console.log(conta2.buscarSaldo());
console.log("Número da conta: ");
console.log(conta2.conta);