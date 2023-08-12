import React from 'react'
import "../Contact/Contact.css"
import ScrollToTopArrow from "../ScrollToTopArrow/ScrollToTopArrow"
import arrowRight from "../../images/arrow-right.png"
const Contact = () => {
    return (
        <div id="contact">
            <div className="formCard">
                <h3>We’d love to hear from you</h3>
                <p>Fill out this form, and a member of our team will contact you soon.</p>
            </div>
            <form>
                <div className="nameField">
                    <div>
                        <label htmlFor="firstName">First name</label><br/>
                        <input type="text" placeholder="First name" required id="firstName" />
                    </div>
                    <div>
                        <label htmlFor="lastName">Last name</label><br/>
                        <input type="text" placeholder="Last name" required id="lastName" />
                    </div>
                </div>
                <div className="emailField">
                    <label htmlFor="email">Email</label><br/>
                    <input type="email" placeholder="you@company.com" required id="email" />
                </div>
                <div className="emailField">
                    <label htmlFor="email">Phone number</label><br/>
                    <input type="email" placeholder="you@company.com" required id="email" />
                </div>
                <div>
                    <label htmlFor="phone">Phone Number</label><br/>
                    <input type="tel" id="phone" placeholder="+234 (080) 000-0000" />
                </div>
                <div>
                    <label htmlFor="textArea">Message</label><br/>
                    <textarea id="textArea" />
                </div>
                <div>
                    <input type="checkbox" />
                    <span className="span">You agree to our friendly privacy policy.</span>
                </div>
                <button className="contact-btn btn"><span>Send Message</span><img src={arrowRight}/></button>
            </form>
            <div className="contactArrow">
              <ScrollToTopArrow/>
            </div>
        </div>
    )
}

export default Contact