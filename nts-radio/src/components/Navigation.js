import React from 'react';
import Guide from './Guide'
import About from './About'
import Directory from './Directory'
import App from '../App.css'

import { BrowserRouter as Router,
    Switch,
    Link,
    Route
    } from "react-router-dom"
    
    class Navigation extends React.Component{
        render(){
            return(
                <Router>
                    <div className="nav_div">
                    
                            <ul className = "nav_ul">
                            <li className="list_item"><Link to = '/about'>About</Link></li>
                            <li className="list_item"><Link to = '/Directory'>Directory</Link></li>
                            <li className="list_item"><Link to = '/guide'>Guide</Link></li>
                            </ul>
                      
                        <Switch>
                            <Route path = '/About' component={About}/>
                            <Route path ='/Directory' component={Directory}/>
                            <Route path ='/Guide' component={Guide}/>
                        </Switch>
                    </div>
                </Router>
            )
        }
    
    }
    export default Navigation