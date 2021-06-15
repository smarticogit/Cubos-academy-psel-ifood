function solucao (letra, palavras) {
	//seu codigo aqui
    let errou = []
for (let item of palavras) {
      if(item[0] === letra){
            
      } else {
            errou.push(item)
      }
}
console.log(errou.length)
}