import React from 'react';
import clsx from 'clsx'
export default function  Navbar(props){
    const className=clsx({
        'navbar-darkmode':props.pageMode,
        'navbar-lightmode':!props.pageMode
    
      })
     

      const navBarTitle=clsx({
        'navbar-title-darkmode':props.pageMode,
        'navbar-title-lightmode':!props.pageMode
    
      })
    return (
        <nav  className={clsx(className, "navbar")}>

    
            <a className={clsx(navBarTitle,"title")}  href="#hero"> Portfolio</a>    
            <ul className="navitems">
                <li> 
                    <a className={clsx(navBarTitle,"a-navbar")} href='#about'> About</a>
                </li>   
                <li> 
                    <a className={clsx(navBarTitle,"a-navbar")} href='#experience'> Experience</a>
                </li>
                <li> 
                    <a  className={clsx(navBarTitle,"a-navbar")} href='#projects'> Projects</a>
                </li>
                <li> 
                    <a className={clsx(navBarTitle,"a-navbar")} href='#contact'> Contact</a>
                </li>
            </ul>

            <div>
            <label class="switch">
    <input onChange={()=>props.onClick()} type="checkbox" />
    <span class="slider"></span>
    </label>
                    


            </div>
        </nav>
        
    )
    
}