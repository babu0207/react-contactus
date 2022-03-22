import React from 'react';

export default class ContactItem extends React.Component {
  render() {
    const { name, email } = this.props.contact;
    return (
      <div className="row">
        <div className="col">
          <i className="fa-regular fa-user-tie-hair"></i>
        </div>
        <div className="col">{name}</div>
        <div className="col">{email}</div>
      </div>
    );
  }
}
