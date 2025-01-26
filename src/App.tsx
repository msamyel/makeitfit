import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./components/Layout";
import Contact from "./pages/Contact";
import Guide from "./pages/Guide";
import Terms from "./pages/Terms";

function App() {
    return (
        <>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/terms" element={<Terms />} />
                        <Route
                            path="/writing-engaging-threads"
                            element={<Guide />}
                        />
                    </Route>
                </Routes>
            </div>
        </>
    );
}

export default App;
