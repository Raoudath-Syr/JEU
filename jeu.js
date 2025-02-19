let button = document.getElementById('button');
let form= document.getElementById('form');
let message = document.getElementById('message');
let link = document.getElementById('link');

const secrethumber = Math.floor(Math.random()* 100);
let attempts = 3 ;

button.onclick = function(){
    const input =document.getElementById("input");
    if(input.value != ""){
        if(input.value < secrethumber){
            message.innerText = 'le nombre est plus grand que' + input.value +'';
            message.style.color = '#999'

        }else if (input.value > secrethumber) {
            message.innerText = 'le nombre est plus petit que' + input.value +'';
            message.style.color = '#999'
        }
        if(attempts ==0){
            message.innerText = 'vous avez perdu, il fallait trouvé' + input.value +'';
            message.style.color = "red";
            form.style.display = 'none';
            link.style.display = 'flex';
        }
        attempts--;

        if(input.value <secrethumber){
            message.innerText = 'Bravo, vous avez trouvé le nombre' + input.value +'';
            message.style.color = "green";
            form.style.display = 'none';
            link.style.display = 'flex';
        }

    }else{
        message.innerText ="le champ est vide !"
        message.style.color="red";
    }
     
}