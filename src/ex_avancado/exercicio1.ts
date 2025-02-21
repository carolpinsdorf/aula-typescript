/*
Interfaces e tipagem avançada
*/

interface Carro{
    marca: string;
    modelo: string;
    ano:number;
    motor?: string;
}

// instanciando um obejto do tipo Carro
const meuCarro: Carro = {
    marca: "Jeep",
    modelo: "Renegade",
    ano: 2019,
    motor: "1.6"
}
console.log(meuCarro);