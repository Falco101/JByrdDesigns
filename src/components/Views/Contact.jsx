import React from 'react';

class ContactComponent extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className='contact-content'>
                <h1 className='contact-title'>Contact</h1>
                <div className='contact-container'>
                    <div className='contact-description'>
                        <p>Quisque velit nisi, pretium ut lacinia in, elementum id enim. Cras ultricies
                        ligula sed magna dictum porta. Pellentesque in ipsum id orci porta dapibus.</p>
                        <p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem
                            ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna justo,
                            lacinia eget consectetur sed, convallis at tellus. Curabitur non nulla sit
                            amet nisl tempus convallis quis ac lectus. Vivamus suscipit tortor eget
                            felis porttitor volutpat. Nulla quis lorem ut libero malesuada feugiat.
                            Curabitur aliquet quam id dui posuere blandit. Nulla porttitor accumsan
                            tincidunt. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                            Curabitur aliquet quam id dui posuere blandit.</p>
                    </div>
                    <div className='contact-form'>
                        <form className="jbd-contact-form">
                            <label>Email Address</label>
                            <input type="email" placeholder="youremail@mail.com"></input>
                            <label>Subject</label>
                            <input type="text" placeholder="Interested in a project?"></input>
                            <label>Email Message</label>
                            <textarea name="email-body" rows="10" cols="50" placeholder="Good day..." />
                            <input type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

ContactComponent.defaultProps = {};

export default ContactComponent;