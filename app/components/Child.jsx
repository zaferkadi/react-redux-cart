import React from 'react';

class Child extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'Child';
  }
  render() {
    return(
    <div>
      Text
    </div>);
  }
}

export default Child;
