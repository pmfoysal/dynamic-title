import React from 'react';
import Home from './components/home';
import About from './components/about';
import Blogs from './components/blogs';
import Contact from './components/contact';
import Features from './components/features';
import {Link, Route, Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import SetTitle from './components/helpers/setTitle';

export default function App() {
   return (
      <HelmetProvider>
         <nav
            style={{
               width: '100%',
               display: 'flex',
               justifyContent: 'center',
               alignContent: 'center',
               gap: '2rem',
               padding: '3rem',
               flexWrap: 'wrap',
            }}
         >
            <Link to='/'>HomePage</Link>
            <Link to='/about'>AboutPage</Link>
            <Link to='/blogs'>BlogsPage</Link>
            <Link to='/features'>FeaturesPage</Link>
            <Link to='/contact'>ContactPage</Link>
         </nav>
         <Routes>
            <Route
               path='/'
               element={
                  <SetTitle title='Home'>
                     <Home />
                  </SetTitle>
               }
            />
            <Route
               path='/about'
               element={
                  <SetTitle title='About'>
                     <About />
                  </SetTitle>
               }
            />
            <Route
               path='/blogs'
               element={
                  <SetTitle title='Blogs'>
                     <Blogs />
                  </SetTitle>
               }
            />
            <Route
               path='/features'
               element={
                  <SetTitle title='Features'>
                     <Features />
                  </SetTitle>
               }
            />
            <Route
               path='/contact'
               element={
                  <SetTitle title='Contact'>
                     <Contact />
                  </SetTitle>
               }
            />
         </Routes>
      </HelmetProvider>
   );
}
