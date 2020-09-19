const juros = require('./juros')
const { montanteJurosSimples } = require('./juros')

test('jurosSimples', () => {
    const C = 100
    const i = 0.10
    const t = 1
    const jurosEsperado = 10
    const jurosCalculo = juros.jurosSimples(C, i, t)
    expect(jurosCalculo).toBe(jurosEsperado)
})

/*
//Falhando de proposito
test('jurosSimples', () => {
    const C = 100
    const i = 0.10
    const t = 1
    const jurosEsperado = 15
    const jurosCalculo = juros.jurosSimples(C, i, t)
    expect(jurosCalculo).toBe(jurosEsperado)
})*/

test('JurosMontateSimples', () => {
    const C = 100
    const i = 0.10
    const t = 1

    const montanteEsperado = 110
    const jurosSimples = jest.fn()

    jurosSimples.mockImplementation(() => 10)

    const montanteSimples = juros.pure.montanteJurosSimples({ jurosSimples })
    const montante = montanteSimples(C, i, t)

    expect(jurosSimples.mock.calls[0]).toEqual([C, i, t])
    expect(montante).toBe(montanteEsperado)
})

test('jurosMonstanteComposto', () => {
    const C = 1000
    const i = 0.10
    const t = 1
    const jurosCompostoEsperado = 1100
    const jurosCompostoCalculado = juros.montanteJurosCompostos(C, i, t)

    expect(jurosCompostoCalculado).toBe(jurosCompostoEsperado)
})

test('jurosComposto', () => {
    const C = 1000
    const i = 0.10
    const t = 1
    const jurosCompostoEsperado = 100
    const montanteJurosCompostos = jest.fn()

    montanteJurosCompostos.mockImplementation(() => 1100)
    montanteComposto = juros.pure.jurosComposto({ montanteJurosCompostos })

    const juroComposto = montanteComposto(C, i, t)

    expect(montanteJurosCompostos.mock.calls[0]).toEqual([C, i, t])
    expect(juroComposto).toBe(jurosCompostoEsperado)
})