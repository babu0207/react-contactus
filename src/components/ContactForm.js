import React from 'react';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
    };
  }
  submit = (e) => {
    e.preventDefault();
    if (this.state.name === '' || this.state.email === '') {
      alert('add contact details');
      return;
    }
    props.addcontacts(this.state);
    this.setState({ name: '', email: '' });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <form className="form" onSubmit={this.submit}>
            <div className="col-12">
              <label className="form-label">Name</label>
              <input
                type="text"
                name="name"
                placeholder="name"
                value={this.state.name}
                className="form-control"
                onChange={(e) => {
                  this.setState({ name: e.target.value });
                }}
              ></input>
            </div>
            <div className="col-12">
              <label className="form-label">email</label>
              <input
                type="text"
                name="Email"
                placeholder="Email"
                className="form-control"
                value={this.state.email}
                onChange={(e) => {
                  this.setState({ email: e.target.value });
                }}
              ></input>
            </div>
            <div className="col-12">
              <button type="submit" class="mt-3 btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default ContactForm;
