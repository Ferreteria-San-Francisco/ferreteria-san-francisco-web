<<<<<<< HEAD
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route } from 'react-router-dom';
import HomePage from './features/home/pages/HomePage';
import AboutPage from './features/about/pages/AboutPage';
=======
import { Routes, Route } from 'react-router-dom';
import Layout from './shared/components/layout/Layout';

import HomePage from './features/home/pages/HomePage';
//import ProductsPage from './features/products/pages/ProductsPage';
//import AboutPage from './features/about/pages/AboutPage';
//import ContactPage from './features/contact/pages/ContactPage';
>>>>>>> 3c7b42a4eb8a16171cb6a7472d2b3fab646dbb7f

function App() {
  return (
    <Routes>
<<<<<<< HEAD
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />

      <Route path="/old" element={
        <>
          <div>
            <a href="https://vite.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1 className='bg-red-500'>Vite + React</h1>
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
            <p>
              Edit <code>src/App.jsx</code> and save to test HMR
            </p>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
        </>
      } />
    </Routes>
  )
=======
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />

        {/* <Route path="/productos" element={<ProductsPage />} /> */}
        {/* <Route path="/nosotros" element={<AboutPage />} /> */}
        {/* <Route path="/contacto" element={<ContactPage />} /> */}
      </Route>
    </Routes>
  );
>>>>>>> 3c7b42a4eb8a16171cb6a7472d2b3fab646dbb7f
}

export default App;
