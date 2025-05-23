import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/index.jsx";
// import ScrollToTop from "./layouts/ScrolltoTop.jsx";
// import WhatWeDoPages from "./pages/whatwedo/index.jsx";
// import OurInitiatives from "./pages/ourintiatives";
// import Community from "./pages/communities";





function App() {
  return (
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
                {/* <ScrollToTop /> */}
          <Routes>

            <Route path="/" element={<HomePage />} />
            {/* <Route path="/what-we-do" element={<WhatWeDoPages />} />
            <Route path="/our-initiative" element={<OurInitiatives />} />
            <Route path="/community" element={<Community />} /> */}

          </Routes>
      </BrowserRouter>
  );
}

export default App;
