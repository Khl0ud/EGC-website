import React from 'react';
import Navbar from './Component/Navbar/Navbar';
import Footer from './Component/Footer/Footer';
import CustomSlider from './Component/CustomSlider/CustomSlider';
import Departments from './Component/Departments/Departments';
import Events from './Component/Events/Events';
function App() {
  return (
    <>

    <Navbar /> 
    <CustomSlider/>
    <Departments />
    <Events />
    <Footer />
    </>
);
}

export default App;
