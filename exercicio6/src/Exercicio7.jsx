export default function Exercicio7({nota1,nota2,nota3})
{
    let total = Number(nota1) + Number(nota2) + Number(nota3);
    let arit = (total) / 3
    return(
        <div>
            A média aritmética de {total} será {arit}
        </div>
    );
}