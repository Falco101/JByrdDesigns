import React from 'react';

class PortfolioComponent extends React.Component {
    constructor() {
        super();
    }
    render () {
        return (
            <div className='portfolio-content'>
                <div className='portfolio-title'>
                    <h1>Design Portfolio</h1>
                    <p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus nibh. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus. Cras ultricies ligula sed magna dictum porta. Donec rutrum congue leo eget malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>
                </div>
                <div className='portfolio-graphics'>
                    <h2>Graphic Design</h2>
                </div>
                <div className='portfolio-web'>
                    <h2>Web Design</h2>
                </div>
            </div>
        );
    }
}

PortfolioComponent.defaultProps = {
};

export default PortfolioComponent;