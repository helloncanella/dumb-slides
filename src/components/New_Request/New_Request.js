import React, {Component} from 'react'
import Slide from '../Slide/Slide'
import './style.css'

export default class New_Request extends Component {
    render() {

        const
            cancel = ( 
                <div className="cancel col-12-12 left">
                    <a href="#" className="button uppercase square red">
                        <i className="fa fa-caret-left"></i> Cancel
                    </a>
                </div>
            ),
            header = (
                <div className="header col-12-12 left">
                    <h3>Please choose request category</h3>
                </div>
            ),

        

            list = (
                <div className="category-list">
                    <div className="category-item col-12-12">
                        <a href="#" className="button uppercase square red stroke">
                            Admin & Official
                         </a> 
                    </div>
                    <div className="category-item col-12-12">
                        <a href="#" className="button uppercase square red stroke">
                            Admin & Official
                         </a> 
                    </div>
                    <div className="category-item col-12-12">
                        <a href="#" className="button uppercase square red stroke">
                            Admin & Official
                         </a> 
                    </div>
                    <div className="category-item col-12-12">
                        <a href="#" className="button uppercase square red stroke">
                            Admin & Official
                         </a> 
                    </div>
                    <div className="category-item col-12-12">
                        <a href="#" className="button uppercase square red stroke">
                            Admin & Official
                         </a> 
                    </div>
                    <div className="category-item col-12-12">
                        <a href="#" className="button uppercase square red stroke">
                            Admin & Official
                         </a> 
                    </div> 
                    <div className="category-item col-12-12">
                        <a href="#" className="button uppercase square red stroke">
                            Admin & Official
                         </a> 
                    </div>  
                    <div className="category-item col-12-12">
                        <a href="#" className="button uppercase square red stroke">
                            Admin & Official
                         </a> 
                    </div>  
                    <div className="category-item col-12-12">
                        <a href="#" className="button uppercase square red stroke">
                            Admin & Official
                         </a> 
                    </div>  
                    <div className="category-item col-12-12">
                        <a href="#" className="button uppercase square red stroke">
                            Admin & Official
                         </a> 
                    </div>      
                    <div className="category-item col-12-12">
                        <a href="#" className="button uppercase square red stroke">
                            Admin & Official
                         </a> 
                    </div>  
                    
                    
                </div>
            ),

            next = ( 
                <div className="cancel col-12-12">
                    <a href="#" className="button uppercase square green">
                        <i className="fa fa-caret-right"></i> Next
                    </a>
                </div>
            )

        return (
            <Slide className="new-request">
                {cancel}
                {header}
                {list}
                {next}
            </Slide>    
        )
    }
}

           