import React from 'react';

class ContactComponent extends React.Component {
    constructor() {
        super();
    }
    render () {
        return (
            <div>
                <p>Contact</p>
            </div>
        );
    }
}

ContactComponent.defaultProps = {
};

export default ContactComponent;