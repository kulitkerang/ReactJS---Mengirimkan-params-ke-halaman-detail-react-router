import React, { Component, Fragment } from 'react';
import './LifeCycleComp.css';

class LifeCycleComp extends Component {
    render(){
        return(
            <Fragment>
            <p>Halaman lifecycle</p>  
            <hr/>
            <div className="card"> 
                <button className="btn1">Kulit Kerang</button>
                <button className="btn1">Kulit Baja</button>
                <button className="btn1">Kulit Monyet</button>
            </div>
            </Fragment>
            
        )
    }
}

export default LifeCycleComp;