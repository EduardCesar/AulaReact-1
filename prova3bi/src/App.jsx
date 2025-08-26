import {BrowserRouter,  Routes, Route} from "react-router-dom";
import Home from "./paginas/home";
import Pisca from "./paginas/pisca";
import Doa from "./paginas/doa";
import Paulo from "./paginas/paulo";
import Killua from "./paginas/killua";
import "./App.css";
export default function App()
{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/Pisca" element={<Pisca/>}/>
                <Route path="/doa" element={<Doa/>}/>
                <Route path="/paulo" element={<Paulo/>}/>
                <Route path="/killua" element={<Killua/>}/>
            </Routes>
        </BrowserRouter>
    );
}