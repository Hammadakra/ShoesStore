import React from 'react';
import Home from './Components/home';
import contact from './Components/contact';
import product from './Components/product';
import NavBar from './Components/NavBar';
import { BrowserRouter as Router, Switch,Route,Link} from 'react-router-dom';
export * from "react-router";

function RouterConfig()
{
    return(
        <div>
            
            <Router>
                <NavBar/>
                <switch>
                <Route exact path ="/" component={Home}/> 
                <Route path ="/contact" component={contact}/> 
                <Route path ="/product" component={product}/> 
                </switch>          
            </Router>
        </div>
    )
}

export default RouterConfig;