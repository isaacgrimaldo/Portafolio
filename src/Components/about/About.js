import React from 'react'
import {tecnologiasFront , tecnologiasback , tecnologiasTools} from './data'
import {FootPages } from '../works/footPages'
import {BarContac} from '../ui/BarContac'

export const About = () => {

    return (
        <div className ="content-about vh90 text-center">
             <div className="row text-center">
                <h1 className='mt-4'>
                   About ME
                </h1>
             </div>
             <div className="row info justify-content-center animate__animated  animate__fadeIn">
                 <h2>I'm Isaac Grimaldo</h2>
                 <p>
                    I'm a promamer with skill in:
                 </p>
                 <h3>Front-end</h3> 
                 <div className="row justify-content-center mb-4">
                     {tecnologiasFront.map(t =>{
                          return (
                              <div className="col animate__animated  animate__fadeInUpBig" key={t.name}>
                                    <h4 style={{color:`${t.color}`} } className="text-center">{t.name}</h4>
                                    <img src={t.icon} width="80px" alt={t.name} />
                              </div>
                          )
                     })}
                 </div>
                 <hr/>
                 <h3>Back-end</h3>
                 <div className="row justify-content-center">
                     {tecnologiasback.map(t =>{
                          return (
                              <div className="col animate__animated  animate__fadeInRightBig" key={t.name}>
                                    <h4 style={{color:`${t.color}`} } className="text-center">{t.name}</h4>
                                    <img src={t.icon} width="80px" alt={t.name} />
                              </div>
                          )
                     })}
                 </div>
                 <hr/>
                 <h3>Tools</h3>
                 <div className="row justify-content-center" >
                     {tecnologiasTools.map(t =>{
                          return (
                              <div className="col animate__animated  animate__fadeInLeftBig" key={t.name}>
                                    <h4 style={{color:`${t.color}`} } className="text-center">{t.name}</h4>
                                    <img src={t.icon} width="80px"  alt={t.name}/>
                              </div>
                          )
                     })}
                 </div>
             </div>
             <BarContac/>
             <FootPages/>
        </div>
    )
}
