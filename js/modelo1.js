function carregar() {
    const msg = window.document.getElementById('msg');
    const fot = window.document.getElementById('img');
    let data = new Date();
    //var horas = data.getHours();
    let horas = data.getHours();
    let min = data.getMinutes();
    msg.innerHTML = `Agora são: <br/> ${horas} horas e ${min} minutos.`
    if (horas >= 0 && horas < 12) {
        //bom dia
        img.src = './img/manha.png';
        document.body.style.background = 'linear-gradient(rgb(240, 133, 72), rgb(248, 225, 125))';
    } else if (horas >= 12 && horas < 18) {
        //boa tarde
        img.src = './img/tarde.png';
    } else {
        //boa noite 
        img.src = './img/noite.png';
    }
}