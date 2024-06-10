// Import necessary modules from React and React Router
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

// PAGE COMPONENT IMPORTS
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans";
import VanDetail from "./pages/VanDetail";

// impport layout components
import Layout from "./components/Layout";
import HostLayout from "./components/HostLayout";

// import host page components
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostVans from "./pages/Host/HostVans";
import HostVanDetail from "./pages/Host/HostVanDetail";
import HostVanInfo from "./pages/Host/HostVanInfo";
import HostVanPricing from "./pages/Host/HostVanPricing";
import HostVanPhotos from "./pages/Host/HostVanPhotos";

// Import the server configuration
import "./server";

// Define the main application component
function App() {
  return (
    // Set up the BrowserRouter for routing
    <BrowserRouter>
      {/* Define the route structure */}
      <Routes>
        {/* Main layout route */}
        <Route path="/" element={<Layout />}>
          {/* Home page route */}
          <Route index element={<Home />} />
          {/* About page route */}
          <Route path="about" element={<About />} />
          {/* Vans listing page route */}
          <Route path="vans" element={<Vans />} />
          {/* Van detail page route with dynamic parameter */}
          <Route path="vans/:id" element={<VanDetail />} />

          {/* Host layout route */}
          <Route path="host" element={<HostLayout />}>
            {/* Host dashboard route */}
            <Route index element={<Dashboard />} />
            {/* Host income page route */}
            <Route path="income" element={<Income />} />
            {/* Host reviews page route */}
            <Route path="reviews" element={<Reviews />} />
            {/* Host vans listing page route */}
            <Route path="vans" element={<HostVans />} />
            {/* Host van detail page route with nested routes for info, pricing, and photos */}
            <Route path="vans/:id" element={<HostVanDetail />}>
              <Route index element={<HostVanInfo />} />
              <Route path="pricing" element={<HostVanPricing />} />
              <Route path="photos" element={<HostVanPhotos />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// Export the App component as the default export
export default App;
