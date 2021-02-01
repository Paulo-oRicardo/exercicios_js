var conteudo = prompt("Qual a conteudo a ser codificada?");
var codificador = parseInt(prompt("Quanto será mudado?"));
var conteudoCodificado = "";


   for(i = 0 ; i < conteudo.length; i++){
      conteudoCodificada += String.fromCharCode(conteudo.charCodeAt(i) + codificador);    
   }

alert(conteudoCodificada); 

  