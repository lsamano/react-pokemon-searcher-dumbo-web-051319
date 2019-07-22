import React from 'react';

const OurSearchBar = ({ searchTerm, handleChange }) => (
  <input type='text' value={searchTerm} onChange={handleChange} />
)

export default OurSearchBar;

///////////////////////////////////////////////////////////////
// This is the class component version of OurSearchBar below
///////////////////////////////////////////////////////////////

// import React, { Component } from 'react';
//
// class OurSearchBar extends Component {
//   render() {
//     return (
//       <input type='text' value={this.props.searchTerm} onChange={this.props.handleChange} />
//     );
//   }
//
// }
//
// export default OurSearchBar;
