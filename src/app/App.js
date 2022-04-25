import React from 'react';
import {Link} from 'react-router-dom';
import Home from '../components/page/home';
import About from '../components/page/about';
import Blogs from '../components/page/blogs';
import Contact from '../components/page/contact';
import Features from '../components/page/features';
import SetRoute from '../components/helpers/setRoute';

export default function App() {
   return (
      <React.Fragment>
         <nav>
            <Link to='/'>HomePage</Link>
            <Link to='/about'>AboutPage</Link>
            <Link to='/blogs'>BlogsPage</Link>
            <Link to='/features'>FeaturesPage</Link>
            <Link to='/contact'>ContactPage</Link>
         </nav>
         <SetRoute path='/' title='Home' element={<Home />} />
         <SetRoute path='/about' title='About' element={<About />} />
         <SetRoute path='/blogs' title='Blogs' element={<Blogs />} />
         <SetRoute path='/features' title='Features' element={<Features />} />
         <SetRoute path='/contact' title='Contact' element={<Contact />} />
      </React.Fragment>
   );
}
