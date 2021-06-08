function solucao(produtos) {
	//seu codigo aqui
let final = {totalTop: "", percentual:""}
let soma = 0
let top = 0
      for (let item of produtos) {
            let valor = item.preco 
                soma += valor  
                if(valor >10000){
                top += valor
                }
            } 
         final.totalTop = top
         final.percentual = top / soma

         console.log(final)
    
       
}
