import React, {Component} from 'react'

export default class Login extends Component {
    render() {

        const
            header = (
                <div className="header">

                </div>
            ),

            content = (
              <section className="fade-2 selected animate active">
                <div className="content">
                    <div className="container">
                        <div className="wrap">



                          <h1 className="small ae-1 done">Sign In</h1>
                          <div className="ae-2 done"><p>Slides begins here for our customers</p></div>
                          <div className="fix-5-12 box-43 ae-3 done">
                              <div className="pad shadow selected">
                                  <div className="error_el"></div>

                                  <form className="wide center" action="" id="login-form">
                                      <label id="emailLabel" className="uppercase ae-3 done" for="email43">
                                        Email Address
                                        <input className="stroke round wide ae-4" id="email43" type="email" name="email" placeholder="Email" required />
                                      </label>
                                      <label id="passwordLabel" className="uppercase ae-5 done" for="password43">
                                        Password
                                        <input className="stroke round wide ae-6" id="password43" type="password" name="password" placeholder="Password" required />
                                      </label>
                                      <small className="block ae-7 done"><span className="text-43">
                                      <a href="#">Forgot your password?</a>
                                      </span></small>
                                      <input className="button wide logo-red round uppercase ae-8" type="submit" name="submit" defaultValue="Sign In" />
                                  </form>
                              </div>
                              <small className="block ae-10 block-43 done">
                                  <span className="text-43">

                                  </span>
                              </small>
                          </div>


                        </div>
                    </div>
                </div>
                <div className="background" ></div>
            </section>
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
