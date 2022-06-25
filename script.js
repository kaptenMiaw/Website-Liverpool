const emot = document.querySelectorAll(".emoji");

function showAlert(){
    alert("GG Geming Bestieee!!!");
}

for(emoticon of emot){
    emoticon.addEventListener('click', function(){
        showAlert();
    })
}