import React, {Component} from 'react'

export default class Requests extends Component {
    render() {

        const
            header = (
                <div className="header">
                    <div className="col-6-12 left">
                        <h3>Requests</h3>
                    </div>
                    <div className="col-6-12 right">
                        <a href="#" className="button uppercase round pink">+ Request</a>
                    </div>
                </div>
            ),

            content = (
                <div className="requests-list">
                    <div className="request-item">
                        <div className="details">                    
                            <div className="col-6-12 left">
                                <i className="fa fa-caret-right"></i> Details | Anfrage von Hellon Canella | Zugewiesen an Nicht zugewiesen | Emmendingen | Medical | Dentist
                            </div>                    
                            <div className="col-6-12 right when">
                                6 hours ago
                            </div>
                        </div>
                         <div className="description">                    
                            <div className="col-12-12 left ">
                                <p></p>
                                <p>dfçajçlkfdçasdjf jflsakjçf</p>
                            </div>                    
                        </div>
                        <div className="comments">
                            <div className="col-12-12 left ">
                               <p className="micro">1 comment</p>
                            </div>                      
                        </div>                     
                    </div>

                    <div className="request-item">
                        <div className="details">                    
                            <div className="col-6-12 left">
                                <i className="fa fa-caret-right"></i> Details | Anfrage von Hellon Canella | Zugewiesen an Nicht zugewiesen | Emmendingen | Medical | Dentist
                            </div>                    
                            <div className="col-6-12 right when">
                                6 hours ago
                            </div>
                        </div>
                         <div className="description">                    
                            <div className="col-12-12 left ">
                                <p></p>
                                <p>dfçajçlkfdçasdjf jflsakjçf</p>
                            </div>                    
                        </div>
                        <div className="comments">
                            <div className="col-12-12 left ">
                               <p className="micro">1 comment</p>
                            </div>                      
                        </div>                     
                    </div>
                    
                </div>
            )

        return (
            <section className="slide whiteSlide selected active animate">
                <div className="content">
                    <div className="container">
                        <div className="wrap">
                            <div className="grid later">
                                {header}
                                {content}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
