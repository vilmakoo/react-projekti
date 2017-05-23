import React from 'react';
import '../index.css';

class Tehtava extends React.Component {

  render() {
    return (
      <div>{this.props.kirjoitettavaAsia}</div>
    )
  }
}

export default Tehtava
