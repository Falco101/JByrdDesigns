import React from 'react';

let graphicsImg = require('../../images/GraphicDesign.svg');
let webImg = require('../../images/WebDesign.svg');

class PortfolioComponent extends React.Component {
    constructor() {
        super();
    }
    render () {
        return (
            <div className='portfolio-content'>
                <div className='portfolio-title'>
                    <h1>Design Portfolio</h1>
                    <p>Curabitur non nulla sit amet nisl tempus convallis quis
                     ac lectus. Cras ultricies ligula sed magna dictum porta.
                     Sed porttitor lectus nibh. Quisque velit nisi, pretium ut
                      lacinia in, elementum id enim. Pellentesque in ipsum id
                       orci porta dapibus. Cras ultricies ligula sed magna
                        dictum porta. Donec rutrum congue leo eget malesuada.
                         Praesent sapien massa, convallis a pellentesque nec,
                          egestas non nisi. Lorem ipsum dolor sit amet,
                           consectetur adipiscing elit. Curabitur non nulla
                            sit amet nisl tempus convallis quis ac lectus.</p>
                </div>
                <div className='portfolio-graphics'>
                    <h2>Graphic Design</h2>
                    <div className='portfolio-description-container'>
                        <div><img src={graphicsImg}></img></div>
                        <div><p>Curabitur non nulla sit amet nisl tempus convallis
                         quis ac lectus. Curabitur aliquet quam id dui posuere
                          blandit. Pellentesque in ipsum id orci porta dapibus.
                          Nulla porttitor accumsan tincidunt. Donec rutrum congue
                         leo eget malesuada. Curabitur non nulla sit amet nisl
                          tempus convallis quis ac lectus. Nulla porttitor accumsan
                         tincidunt. Vivamus magna justo, lacinia eget consectetur
                          sed, convallis at tellus. Mauris blandit aliquet elit,
                         eget tincidunt nibh pulvinar a. Vivamus magna justo,
                          lacinia eget consectetur sed, convallis at tellus.</p>
                          </div>
                    </div>
                </div>
                <div className='portfolio-web'>
                    <h2>Web Design</h2>
                    <div className='portfolio-description-container'>
                        <div><p>Quisque velit nisi, pretium ut lacinia in, elementum
                         id enim. Nulla porttitor accumsan tincidunt. Nulla
                          porttitor accumsan tincidunt. Sed porttitor lectus nibh.
                         Vestibulum ac diam sit amet quam vehicula elementum sed sit
                          amet dui. Praesent sapien massa, convallis a pellentesque
                         nec, egestas non nisi. Mauris blandit aliquet elit, eget
                          tincidunt nibh pulvinar a. Donec sollicitudin molestie
                         malesuada. Pellentesque in ipsum id orci porta dapibus.</p></div>
                    <div><img src={webImg} /></div>
                    </div>
                </div>
            </div>
        );
    }
}

PortfolioComponent.defaultProps = {
};

export default PortfolioComponent;