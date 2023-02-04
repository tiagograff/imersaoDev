function adicionarFilme(){
    var filmeFavorito = document.getElementById('filme').value;
    var trailer = document.getElementById('trailer').value;
    var elementoListaFilmes = document.getElementById('listaFilmes');
    var extenspesPermitidas = /(.jpg|.jpeg|.png|.gif)$/i;
    if(!extenspesPermitidas.exec(filmeFavorito)){
        alert('por favor envie um arquivo que tenha as extensões .jpeg/.jpg/.png/.gif .');
    }else{
        
        elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + '<a href='+trailer+'><img src='+filmeFavorito+'></a>';
        document.getElementById('filme').value = null;
        document.getElementById('trailer').value = null;

    }
  }

  console.log(trailer);