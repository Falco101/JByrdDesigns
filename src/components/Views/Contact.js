import React from 'react';

class ContactComponent extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <h1>Contact</h1>
                <p>Quisque velit nisi, pretium ut lacinia in, elementum id enim. Cras ultricies
                    ligula sed magna dictum porta. Pellentesque in ipsum id orci porta dapibus.</p>
                <form className="jbd-contact-form">
                    <label>Email</label>
                    <input type="email"></input>
                    <label>Subject</label>
                    <input type="text"></input>
                    <label>Email Message</label>
                    <textarea name="email-body" rows="10" cols="50"/>
                    <input type="submit"/>
                </form>
            </div>
        );
    }
}

ContactComponent.defaultProps = {};

export default ContactComponent;