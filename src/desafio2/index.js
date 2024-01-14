function calcularNivel(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    let nivel;


if (vitoria < 10){
    nivel = "Ferro";
} else if (vitoria >= 11 && vitoria <= 20{
    nivel = "Bronze";
} else if (vitoria >= 21 && vitoria <= 50{
    nivel = "Prata";
} else if (vitoria >= 51 && vitoria <= 80{
    nivel = "Ouro";
} else if (vitoria >= 81 && vitoria <= 90{
    nivel = "Diamante";
} else if (vitoria >= 91 && vitoria <=100{
    nivel = "Lendário";
} else {
    nivel = "Imortal";
}
return { saldoVitorias, nivel };
}
for (let i = 0; i < 3; i++) {
console.log(`O Herói tem um saldo de ${saldoVitorias} está no nível de ${nivel}`);
}