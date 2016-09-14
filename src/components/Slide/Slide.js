import React, {Component} from 'react'

export default class Slide extends Component {
    render() {
        let {children} = this.props

        return (
            <section className="slide whiteSlide selected active animate">
                <div className="content">
                    <div className="container">
                        <div className="wrap"> 
                            <div className="grid later">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}