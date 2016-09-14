import React, {Component} from 'react'

export default class Forgot_Password {
    render() {

        const
            form = (
                <form action="#" autocomplete="off" className="wide center">
                    <label className="uppercase ae-3 done" for="email37">Email Address</label>
                    <input className="stroke round wide ae-4 done" id="email43" type="email" name="email" placeholder="Email" required=""/>
                    <input className="button wide pink round uppercase ae-9 done" type="submit" name="submit" value="Reset Password" />
                </form>
            ),

            footer = (
                <small className="block ae-10 block-42 done">
                    <span className="text-42">Already have an account?<a href="#" className="block bold">Sign In</a></span>
                </small>
            ),

            header = (<h1 className="small ae-1 done">Reset Password</h1>),

            body = (
                <div className="wrap">
                    {header}
                    <div className="fix-5-12 box-42">
                        <div className="pad shadow selected ae-3 done">
                            {form}
                        </div>
                        {footer}
                    </div>
                </div>
            )

        return (
            <section className="slide fade kenBurns selected active animate">
                <div className="content">
                    <div className="container">
                        {body}
                    </div>
                </div>                
            </section>

        )
    }
}