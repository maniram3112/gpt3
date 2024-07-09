import './App.css';
import { Brand, Cta, Navbar } from './Components';
import { Blog, Features, Footer, Header, Possibility, WhatGpt3 } from './Containers';

function App() {
  return (
    <div className="App">
      <div className='gradient_bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGpt3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
