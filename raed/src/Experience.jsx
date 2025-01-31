import React from "react";
import interns from "/src/interns.js"
import languages from "/src/languages.js"

export default function (){
    const intern=interns.map((current,index)=>{
        return(
            <div className="listexp">
                <img className="listexplogo" src={current.image} />
                <div className="listdescription">
                    <h3 className="listexptitle" >{current.title}</h3>
                    <p className="listexpp">{current.description}</p>
                </div>
            </div>
        )
    })
    const language=languages.map((current,index)=>{
        return (
            <div className="iconscontainer">
                <div className="icons">
                    <img className="iconimg" src={current.image}/>
                </div>
                <h4 className="icontitle">{current.title}</h4>

            </div>
        )
    })



    return (
        <section id="experience" className="experience">
            <h2>EXPERIENCE</h2>
            <div className="experiencecontainer">
                <div className="logos">
                    {language}
                </div>
                <div className="internss">
                    {intern}
                </div>
            </div>

        </section>
    )
}