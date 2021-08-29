import React from 'react'
import { BarContac } from '../ui/BarContac'
import {FootPages} from './footPages' 


export const Works = () => {
      
    

    return (
        <div className='vh90  text-dark content-works'>
            <div>
                <div className='row justify-content-center text-center mb-4 '>
                 <h1 className="p-2">My Jobs</h1>
                </div>
                 <div className='container-sm'>
                 <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center ">
                    <div className="col animate__animated animate__fadeInUp">
                        <div className="card">
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col animate__animated animate__fadeInUp">
                        <div className="card">
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col animate__animated animate__fadeInUp">
                        <div className="card">
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col animate__animated animate__fadeInUp">
                        <div className="card">
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                </div>
                 </div>
            </div>
            <BarContac/>
            <FootPages/>            
        </div>
    )
}
