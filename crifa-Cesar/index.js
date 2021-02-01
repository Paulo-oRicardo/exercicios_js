var conteudo = prompt("Qual a conteudo a ser codificada?");
var codificador = parseInt(prompt("Quanto será mudado?"));
var conteudoCodificado = "";
var conteudoDescodificado = "";

   for(i = 0 ; i < conteudo.length; i++){
      conteudoCodificada += String.fromCharCode(conteudo.charCodeAt(i) + codificador);    
   }

alert(conteudoCodificada); 

   for(i = 0 ; i < conteudoCodificada.length; i++){       
      conteudoDescodificada += String.fromCharCode(conteudoCodificada.charCodeAt(i) - codificador);
   }   

alert(conteudoDescodificada);