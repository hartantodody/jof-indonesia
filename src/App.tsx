import { Routes, Route, BrowserRouter } from "react-router-dom";
import { AboutUsPage, HomePage, PortfolioPage } from "./pages";

const globalStyles: React.CSSProperties = {
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
};

function App() {
  return (
    <div style={globalStyles} className='bg-background font-plus-jakarta-sans'>
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
