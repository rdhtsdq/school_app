import { BrowserRouter,Routes,Route,Link  } from "react-router-dom"



// component page

import Home from "./pages/home/Home"
import Landing from "./pages/landing_page/Landing"

const Main = () => {
    return (
        <BrowserRouter>
        
        <div>
            <Routes>
                <Route path="/" element={
                    <Landing />
                } />
                <Route path="/home" element={
                    <Home />
                } />
            </Routes>
        </div>
        </BrowserRouter>
    )
}

export default Main