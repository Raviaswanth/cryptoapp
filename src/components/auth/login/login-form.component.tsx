import React from "react";
import { Mandella } from "../../../views/mandellaRotate";

const LoginForm = () => {
    return (
        <div className="container flex justify-center items-center flex-col">
              <Mandella/>
            <div id="login">
                <form className="login-form " >
                    <span className="fa fa-user"></span>
                    <input
                        autoFocus
                        //onChange={this.handleChange.bind(this, 'email')}
                        placeholder="Email"
                        type="email"
                        //  value={this.state.user.email}
                        required
                    />
                    <span className="fa fa-lock"></span>
                    <input
                        autoComplete="off"
                        //maxLength="8"
                        // onChange={this.handleChange.bind(this, 'password')}
                        placeholder="Password"
                        type="password"
                        // value={this.state.user.password}
                        required
                    />
                    <input type="submit" value="Log in" />
                </form>
            </div>

            <div className="sign-up__actions clearfix">
                <p>Not a member? <a href="/sign-up">Sign up now</a><span className="fa fa-arrow-right"></span></p>
            </div>

            <div className="sign-in__actions clearfix">
                {/* <ul>
                    <li><a className="link link-github"></a></li>
                    <li><a className="link link-google"></a></li>
                    <li><a className="link link-twitter"></a></li>
                    <li><a className="link link-facebook"></a></li>
                </ul> */}

            </div>

        </div>
    )
}

export { LoginForm }