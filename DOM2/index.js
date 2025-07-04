const btn = document.getElementById('change-color-btn');

btn.addEventListener('click', function(e){
    btn.style.backgroundColor = getRandomColor();
})

function getRandomColor(){
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}