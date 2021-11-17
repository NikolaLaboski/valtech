import React from 'react'
import {
    Contact,
    ContactOverlay,
    Container
} from './ContactElements'

const Contactme = () => {
    return (
        <div>
            <Contact class="contactme" id="contact">
                <ContactOverlay class="contactOverlay">
                    <Container class="container">
                        <div class="form">
                            <form action="" onSubmit="">
                            <div class="formWord">
                                <h2>CONTACT US</h2>
                                <span>First name</span>
                                <br />
                                <input class="input100" type="text" name="fullName" required />
                                <br />
                                <span>Email address</span>
                                <br />
                                <input class="input100" type="text" name="email" required />
                                <br />
                                <span>Your message</span>
                                <br />
                                <textarea name="message" required></textarea>
                                <br />
                                
                            </div>
                            <div class="formWord">
                                        
                            <span>Last name</span>
                                <br />
                                <input class="input100" type="text" name="lastName" required />
                                <br />
                                <span>Phone Number</span>
                                <br />
                                <input class="input100" type="text" name="phone" required />
                                <br />
                                <button>SEND</button>

                            </div>
                            </form>
                        </div>
                    </Container>
                </ContactOverlay>
            </Contact>
        </div>
    )
}

export default Contactme;