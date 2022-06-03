import { BrowserRouter,Routes,Route,Link  } from "react-router-dom"

// components

import Header from "./Header";
import Tugas from "./Tugas";

const Home = () => {
    return (
        <div id="home">
        <nav className="py-5 px-5 flex justify-between z-50 sticky">
            <div>
                <Link to="/" className="text-2xl underline">MySchool  </Link>
            </div>
            <div className="flex gap-4">
                <div>
                    <Link to="/">Home</Link>
                </div>
                <div>
                    <Link to="/class">Class</Link>
                </div>
                <div>
                    <Link to="/report">Report</Link>
                </div>
                <div>
                    <Link to="/profile">Profile</Link>
                </div>    
            </div>
            <div>
                <Link to="#" >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5"><path d="M12 24A12 12 0 1 0 0 12a12.013 12.013 0 0 0 12 12Zm0-19a1.5 1.5 0 1 1-1.5 1.5A1.5 1.5 0 0 1 12 5Zm-1 5h1a2 2 0 0 1 2 2v6a1 1 0 0 1-2 0v-6h-1a1 1 0 0 1 0-2Z"/></svg>
                </Link>
            </div>
        </nav>
        <div className="w-full overflow-y-auto">
            <Routes>
                <Route path="/" element={
                    <div>
                        <Header />
                        <Tugas />
                    </div>
                } />
            </Routes>
        </div>
        </div>
    )
}

export default Home

