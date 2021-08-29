import React from 'react'

import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
  
import {Banner} from '../../Components/Banner/Banner';  
import { NavBar } from '../nav/NavBar';
import { NavBarMovil } from '../nav/NavBarMovil';
import { Works} from '../works/Works';
import {About} from '../about/About'

export const AppRoute = () => {
    
    return (
        <Router>
            <div>
              <div className="bg-dark navBarWeb">
                 <NavBar/>
              </div>    
              <div className=' bg-dark navbarMovil'>
                  <NavBarMovil/>
              </div>
            <Switch>
                  <Route exact path='/home' component={Banner} />
                  <Route exact path='/works' component={Works} />
                  <Route exact path='/about' component={About} />
                  

                  <Redirect to='/home'/>
            </Switch>
            </div>
        </Router>
    )
}
