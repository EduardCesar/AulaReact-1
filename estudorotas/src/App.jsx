import {BrowserRouter,  Routes, Route} from "react-router-dom";
import Home from "./Paginas/Home";
import SaoPaulo from "./Paginas/SaoPaulo";
import RioJaneiro from "./Paginas/RioJaneiro";
import MinasGerais from "./Paginas/MinasGerais";
import EspiritoSanto from "./Paginas/EspiritoSanto";
import SantaCatarina from "./Paginas/SantaCatarina";
import Parana from "./Paginas/Parana";
import Riogrande from "./Paginas/Riogrande";
import Alagoas from "./Paginas/Alagoas";
import Bahia from "./Paginas/Bahia";
import Ceara from "./Paginas/Ceara";
import Maranhao from "./Paginas/Maranhao";
import Paraiba from "./Paginas/Paraiba";
import Pernambuco from "./Paginas/Pernambuco";
import Piaui from "./Paginas/Piaui";
import RioGrandeNorte from "./Paginas/RioGrandeNorte";
import Serjipe from "./Paginas/Serjipe";
import Goias from "./Paginas/Goias";
import MatoGrosso from "./Paginas/MatoGrosso";
import MatoGrossoSul from "./Paginas/MatoGrossoSul";
import DistritoFederal from "./Paginas/DistritoFederal";
import Acre from "./Paginas/Acre";
import Amapa from "./Paginas/Amapa";
import Amazonas from "./Paginas/Amazonas";
import Para from "./Paginas/Para";
import Rondonia from "./Paginas/Rondonia";
import Roraima from "./Paginas/Roraima";
import Tocantins from "./Paginas/Tocantins";
export default function App()
{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/sp" element={<SaoPaulo />}/>
                <Route path="/rj" element={<RioJaneiro/>}/>
                <Route path="/mg" element={<MinasGerais/>}/>
                <Route path="/es" element={<EspiritoSanto/>}/>
                <Route path="/rs" element={<Riogrande/>}/>
                <Route path="/pr" element={<Parana/>}/>
                <Route path="/sc" element={<SantaCatarina/>}/>
                <Route path="/al" element={<Alagoas/>}/>
                <Route path="/ba" element={<Bahia/>}/>
                <Route path="/ce" element={<Ceara/>}/>
                <Route path="/ma" element={<Maranhao/>}/>
                <Route path="/pb" element={<Paraiba/>}/>
                <Route path="/pe" element={<Pernambuco/>}/>
                <Route path="/pi" element={<Piaui/>}/>
                <Route path="/rn" element={<RioGrandeNorte/>}/>
                <Route path="/se" element={<Serjipe/>}/>
                <Route path="/go" element={<Goias/>}/>
                <Route path="/mt" element={<MatoGrosso/>}/>
                <Route path="/ms" element={<MatoGrossoSul/>}/>
                <Route path="/df" element={<DistritoFederal/>}/>
                <Route path="/ac" element={<Acre/>}/>
                <Route path="/ap" element={<Amapa/>}/>
                <Route path="/am" element={<Amazonas/>}/>
                <Route path="/pa" element={<Para/>}/>
                <Route path="/ro" element={<Rondonia/>}/>
                <Route path="/rr" element={<Roraima/>}/>
                <Route path="/to" element={<Tocantins/>}/>
            </Routes>
        </BrowserRouter>
    );
}