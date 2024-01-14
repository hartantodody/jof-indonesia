import { Routes, Route, BrowserRouter } from "react-router-dom";
import { AboutUsPage, HomePage, PortfolioPage } from "./pages";

function App() {
  return (
    <div className='bg-background font-plus-jakarta-sans'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about-us' element={<AboutUsPage />} />
          <Route path='/portfolio' element={<PortfolioPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
