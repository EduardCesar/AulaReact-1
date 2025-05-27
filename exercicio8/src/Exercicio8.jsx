export default function Exercicio8({peso,altura})
{
    let IMC = Number(peso) / (Number(altura) * Number(altura))
    return (
        <div>
            O seu IMC é {IMC}
        </div>
    );
}