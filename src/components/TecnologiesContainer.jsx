import React from 'react'
import { DiHtml5, DiCss3, DiJsBadge, DiReact, DiGit } from 'react-icons/di'

import '../styles/components/tecnologiescontainer.sass'

const tecnologies = [
    { id: 'html', name: 'HTML', icon: <DiHtml5 /> },
    { id: 'css', name: 'CSS', icon: <DiCss3 /> },
    { id: 'js', name: 'JavaScript', icon: <DiJsBadge /> },
    { id: 'react', name: 'React', icon: <DiReact /> },
    { id: 'git', name: 'Git', icon: <DiGit /> }
];

const TecnologiesContainer = () => {
  return (
    <section className='tecnologies-container'>
        <h2>Tecnologias</h2>
        <div className='tecnologies-grid'>
            {tecnologies.map((tec) => (
                <div className='tecnologies-card' id={tec.id} key={tec.id}>
                    {tec.icon}
                    <div className="tecnologies-info">
                        <h3>{tec.name}</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default TecnologiesContainer