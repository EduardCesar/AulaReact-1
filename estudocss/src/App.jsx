import "./App.css";

export default function App()
{
    const estilo = {
        color : "red",
        textAlign : "center",
        backgroundColor : "blue",
        padding : "10px",
    };

    return (
        <div className="conteudo">
            <h1>Estudo CSS</h1>
            
            <p>
                O CSS (<i>Cascading Style Sheets</i>) é uma linguagem
                utilizada para estilizar as <b>páginas web</b>. Com ela
                podemos definir:
            </p>

            <ul>
                <li>Cores de fundo, do texto e dos elementos</li>
                <li>Fontes e tamanhos das letras</li>
                <li>Posicionamento dos elementos na página</li>
                <li>Espaçamento, bordas, sombras, etc.</li>
                <li>Efeito Visuais e animações</li>
            </ul>

            <h3 style={estilo}>Babis, o Principe do inferno</h3>

            <p className="centro">


                <img src="images.jpg" alt="" />
            </p>

        </div>
    );
}