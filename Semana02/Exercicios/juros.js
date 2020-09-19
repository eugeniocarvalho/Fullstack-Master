'Crie um módulo juros.js, e exporte dele uma função jurosSimples que recebe C (capital), i (juros em decimal. ex: 3,5% = 0.035) e t (tempo). E retorne o juros simples do período (C * i * t ).'

const jurosSimples = (c, i, t) => c * i * t

'Crie uma nova função que dado as mesmas variáveis do exercício anterior, retorne o montante total C + juros simples.'

const montanteJurosSimples = ({ jurosSimples }) => (c, i, t) => c + jurosSimples(c, i, t)

'Crie uma função montanteJurosCompostos que recebe C (capital), i (juros em decimal) e t (tempo) e retorno o montante para o período, dado pela fórmula: M = C * (1 +  i) ^ n​.'

const montanteJurosCompostos = (C, i, t) => C * Math.pow((1 + i), t)

'O exercício anterior já retorna o montante (capital + juros). Crie uma função em juros.js que retorne somente os juros.'

const jurosComposto = ({ montanteJurosCompostos }) => (C, i, t) => montanteJurosCompostos(C, i, t) - C


module.exports = {
    jurosSimples,
    montanteJurosSimples: montanteJurosSimples({ jurosSimples }),
    montanteJurosCompostos,
    jurosComposto: jurosComposto({ montanteJurosCompostos }),
    pure: {
        montanteJurosSimples,
        jurosComposto
    }
}