import React from 'react';
import ReactDOM from 'react-dom/client';
import clsx from 'clsx';
import Navbar from '/src/Navbar.jsx'
import Hero from '/src/Hero.jsx'
import About from '/src/About.jsx'
import Experience from '/src/Experience.jsx'
import Arrow from '/src/Arrow.jsx'


function App() {
  const[mode,setMode]=React.useState(false);
  function handleClick(){
    setMode(!mode);
  }
  const className=clsx({
    'darkmode':mode,
    'lightmode':!mode

  })
  return (
    <main className={className}>
        <Arrow pageMode={mode}/>
        <Navbar  pageMode={mode} onClick={()=>handleClick()}/>
        <Hero  pageMode={mode} />
        <About  pageMode={mode} />   
        <Experience  pageMode={mode} />
      </main>
   
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />); 
