export default function Exercicio6({quant,preco})
{
    let subtotal = Number(quant) * Number(preco);
    let desconto = subtotal *10/100
    let valorf = subtotal - desconto
    return(
        <div>
            <p>O subtotal de {quant} e {preco} é {subtotal};</p>
            <p> O desconto de {subtotal} é {desconto}</p>
            <p>O valor final será {valorf}</p>
        </div>
    );
}