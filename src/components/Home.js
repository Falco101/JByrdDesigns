import React from 'react';

class HomeComponent extends React.Component {
  render() {
    return (
      <div className='site-content'>
        <header>
            <h1>Title</h1>
            <p>Nulla quis lorem ut libero malesuada feugiat. Vivamus suscipit tortor eget felis porttitor volutpat. Cras ultricies ligula sed magna dictum porta. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Pellentesque in ipsum id orci porta dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </header>
        <section className="design-offerings">
            <div>hello</div>
            <div>hello</div>
            <div>hello</div>
        </section>
        <section className="technologies">
            
        </section>
      </div>
    );
  }
}

HomeComponent.defaultProps = {
};

export default HomeComponent;
