var agora = new Date
var hora = agora.getHours()
if (hora < 12) {
    h = 'Bom dia!'
}else if (hora < 18) {
    h = 'Boa tarde!'
} else {
    h = 'Boa noite!'
}
var diasem = agora.getDay()
switch(diasem){
    case 0:
        msg = 'domingo'
        break
    case 1:
        msg = 'segunda-feira'
        break
    case 2:
        msg = 'terça-feira'
        break
    case 3:
        msg = 'quarta-feira'
        break
    case 4:
        msg = 'quinta-feira'
        break
    case 5:
        msg = 'sexta-feira'
        break
    case 6:
        msg = 'sábado'
        break
    default:
        msg = 'ERRO'
        break
}

var nome = "Meu nome é Paula Ayumi Sakassegawa"
var cidade = "Guarulhos/ ADS"

window.alert(nome + '\n' + cidade + '\n' + h + ' Hoje é ' + msg)