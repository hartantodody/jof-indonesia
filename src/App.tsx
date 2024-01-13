import { Routes, Route, BrowserRouter } from "react-router-dom";
import { AboutUsPage, HomePage } from "./pages";

function App() {
  return (
    <div className='bg-background font-plus-jakarta-sans'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about-us' element={<AboutUsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
