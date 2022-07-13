/*
Implementar o teste de multiplicação e subtração. Considere incluir validações!
*/

const subtracao = (a,b) => {
    return a-b
}

const multiplicacao = (a,b) => {
    return a*b
}

describe('Aplicando os testes da Questão 2', () => {

    test('Aplicar a função de subtração e obter 15', () => {
        const result = index.subtracao(20,5);
        expect(result).toEqual(15);
    });

    test('Aplicar a função de multiplicação e obter 15', () => {
        const result = index.multiplicacao(3,5);
        expect(result).toEqual(15);
    });

});