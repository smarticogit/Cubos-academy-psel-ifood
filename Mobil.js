function solucao(tempo, distancia) {
	//seu codigo aqui
   let valor = ""

if(tempo <5){
      valor=600
      } if (tempo >5 && tempo <60){
      valor=(tempo*100) +(50*distancia)
      } if (tempo>60 && distancia <100) {
      valor=200*distancia
     } if (tempo >60 && distancia >100) 
      valor=150*distancia
     console.log(valor)
   
}