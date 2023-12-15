document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('form-font').addEventListener('submit', function(evento){
        evento.preventDefault();
        let fontSize = document.getElementById('font-size').value;
        fontSize = parseInt(fontSize);
        
        document.getElementById('formatando').style.fontSize = fontSize + 'px';
    })
})