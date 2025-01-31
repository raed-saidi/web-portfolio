import React from 'react';
import jobs from '/src/jobs.js'
import clsx from 'clsx'
export default function About(props){
    const className=clsx({
        'about-darkmode':props.pageMode,
        'about-lightmode':!props.pageMode
    
      })
     const aboutTitle=clsx({
            'about-title-darkmode':props.pageMode,
            'about-title-lightmode':!props.pageMode
        
          })
    const aboutDescription=clsx({
            'about-description-darkmode':props.pageMode,
            'about-description-lightmode':!props.pageMode
        
          })
    const Writing=clsx({
        'darkmode-writing':props.pageMode,
        'lightmode-writing':!props.pageMode

    })
    
         
    const job=jobs.map((current,index)=>{
        return( <div key={index}  className="description">
                    <img className="aboutimg" src={current.image} />
                    <div className={aboutDescription}>
                        <h3 className={clsx(Writing, "descriptiontitle")}>{current.title}</h3>
                        <p className={clsx(Writing, "descriptionparagraph")}>{current.description}</p>
                    </div>
    

        </div>)
    })
    return (
        <section id="about" className={clsx(className, "about")}>
            <h2 className={aboutTitle}>About </h2>
            <div className='descriptioncontainer'>
                <div >
                    {job}
                </div>
            </div>

        </section>
    )
}