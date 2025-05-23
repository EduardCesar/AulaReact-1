import Exemplo1 from "./Componentes/Exemplo1"
import Exercicio1 from "./Componentes/Exercicio1"
import Exercicio2 from "./Componentes/Exercicio2"
import Exercicio3 from "./Componentes/Exercicio3"
import Exercicio4 from "./Componentes/Exercicio4"
import Exercicio5 from "./Componentes/Exercicio5"

export default function App()
{
  return(
    <div>
      <h1>Exercícios de Componentes</h1>

      <Exemplo1 numero1={10} numero2={5}/>
      <Exemplo1 numero1={50} numero2={45.98}/>

      <hr />
      <h3>Chamadas para o Exercício 1</h3>
      <Exercicio1 fah={100}/>
      <Exercicio1 fah={70}/>
      
      <hr />
      <h3>Chamadas para o Exercício 2</h3>
       <Exercicio2 altura={1.80} peso={80}/>
       <Exercicio2 altura={1.60} peso={60}/>

       <hr />
       <h3>Chamadas para o Exercício 3</h3>
       <Exercicio3 valor={100} taxa={10} tempo={2}/>
       <Exercicio3 valor={100} taxa={10} tempo={10}/>

       <hr />
       <h3>Chamadas para o Exercício 4</h3>
       <Exercicio4 tipo={"quadrado"} base={10} altura={5}/>
       <Exercicio4 tipo={"triangulo"} base={10} altura={5}/>
       <Exercicio4 tipo={"retangulo"} base={10} altura={5}/>

       <hr />
       <h3>Chamadas para o Exercício 5 </h3>
       <Exercicio5 quantidade={10}/>
       </div>
  )
}