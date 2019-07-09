function carregar() {
    var msg = window.document.getElementById('msg')
    var fot = window.document.getElementById('img')
    var data = new Date()
        //var horas = data.getHours()
    var horas = 10
    msg.innerHTML = `Agora são ${horas} horas.`
    if (horas >= 0 && horas < 12) {
        //bom dia
        img.src = '../modelo/img/manha.png'
        document.body.style.background = 'linear - gradient(rgb(240, 133, 72), rgb(248, 225, 125))'
    } else if (horas >= 12 && horas < 18) {
        //boa tarde
        img.src = '../modelo/img/tarde.png'
    } else {
        //boa noite 
        img.src = '../modelo/img/noite.png'
    }

}