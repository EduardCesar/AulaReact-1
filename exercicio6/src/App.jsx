import Exercicio6 from "./exercicio6"
import Exercicio7 from "./exercicio7"
export default function App()
{
  return(
    <div>
      <h1>Exercício 6</h1>
      <Exercicio6 quant={2} preco={5}/>

      <hr />Exercicio 7
      <Exercicio7 nota1={7} nota2={8} nota3={6}/>
      </div>
  );
}