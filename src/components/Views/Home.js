import React from 'react';

class HomeComponent extends React.Component {
  render() {
    return (
      <div className='site-content'>
        <header>
            <h1>JByrd Designs</h1>
            <p>Nulla quis lorem ut libero malesuada feugiat. Vivamus suscipit tortor eget felis porttitor volutpat. Cras ultricies ligula sed magna dictum porta. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Pellentesque in ipsum id orci porta dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </header>
        <section className="design-offerings">
          <h1>Superior Design</h1>
            <div>
              <i className="fa large-icon fa-globe" aria-hidden="true"></i>
              {/*<FontAwesome name="globe" size="4x" />*/}
              <h2>Web Development</h2>
              <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur aliquet quam id dui posuere blandit. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.</p>
            </div>
            <div>
              <i className="fa large-icon fa-desktop" aria-hidden="true"></i>
              <h2>Graphic Design</h2>
              <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur aliquet quam id dui posuere blandit. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.</p>
            </div>
            <div>
              <i className="fa large-icon fa-rebel" aria-hidden="true"></i>
              <h2>Stuff</h2>
              <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur aliquet quam id dui posuere blandit. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.</p>
            </div>
        </section>
        <section className="technologies">
            <h1>Innovative Technologies</h1>
            <div>
              <i className="devicons devicons-html5 large-icon" aria-hidden="true"></i>
              <h2>HTML 5</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum congue leo eget malesuada. Donec sollicitudin molestie malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.</p>
            </div>
            <div>
              <i className="devicons devicons-sass large-icon" aria-hidden="true"></i>
              <h2>Sass</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum congue leo eget malesuada. Donec sollicitudin molestie malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.</p>
            </div>
            <div>
              <i className="devicons devicons-javascript_badge large-icon" aria-hidden="true"></i>
              <h2>React JS</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum congue leo eget malesuada. Donec sollicitudin molestie malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.</p>
            </div>
            <div>
              <i className="devicons devicons-dotnet large-icon" aria-hidden="true"></i>
              <h2>.NET Core</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum congue leo eget malesuada. Donec sollicitudin molestie malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.</p>
            </div>
        </section>
      </div>
    );
  }
}

HomeComponent.defaultProps = {
};

export default HomeComponent;
