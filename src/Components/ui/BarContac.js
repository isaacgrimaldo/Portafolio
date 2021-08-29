import React from 'react'
import {imgenes} from '../../assets/index'

const contacts = [
    
    {
        name:'Github',
        icon:imgenes.github,
        color:'#000',
     },
     {
         name:'Linkedin',
         icon:imgenes.linkedin,
         color:'#006ECC'
     },
     {
         name:'Gmail',
         icon:imgenes.gmail,
         color:'#fff'
     }
]


export const BarContac = () => {
    return (
        <div className='container-bar-contact animate__animated  animate__fadeInLeftBig text-center'>
            <div>
                 <h4>Contact</h4>
                 {
                     contacts.map(contact =>{
                         return(
                             <div className='row animate__animated  animate__fadeInLeftBig  animate__delay-2s mt-2' key={contact.name}>
                                 <h5 style={{color:`${contact.color}`}}>{contact.name}</h5>
                                 <img src={contact.icon}  height="50px" alt={contact.name}/>
                             </div>
                         )
                     })
                 }
            </div>
        </div>
    )
}
