import React from 'react';
import { Link } from 'react-router-dom';
// Images
import BackArrow from '../../images/backArrow.svg';
import AppBar from './AppBar';

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '', message: '', submitted: false };
    
  }


  handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://kerbit.app/Contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state }),
    })
      .then(() => { 
        this.setState({submitted: true, name: '', email: '', message: ''})
      })
      .catch((error) => {
        document.querySelector('.form').reset();
        this.setState({submitted: null, name: '', email: '', message: ''})
      });
  };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message } = this.state;

    let formResponce = '';

    if(this.state.submitted === true) {
      formResponce = 'Thanks for the message! We\'ll get back to you soon! :)'
    } else if (this.state.submitted === null) {
      formResponce = 'Unable to send the form! Please try again later :('
    }
    return (
      <>
        <AppBar></AppBar>
        <Link to='' className='return'>
          <img src={BackArrow} alt='back arrow' />
        </Link>
        <section className='contactpage'>
          <div className='contactpage__container'>
            <h3 className='contactpage__title'>
              SOMETHING WRONG WITH KERBIT?
              <br></br>
              <span>LET US KNOW!</span>
            </h3>
            <form className='form' onSubmit={this.handleSubmit}>
              <label htmlFor='name' className='form__label'>
                Name:
              </label>
              <input
                className='form__wronginput'
                required
                type='text'
                placeholder='Name'
                name='name'
                value={name}
                onChange={this.handleChange}
              />

              <label htmlFor='email' className='form__label'>
                Email:
              </label>
              <input
              className='form__rightinput'
                type='email'
                name='email'
                value={email}
                onChange={this.handleChange}
                required
                placeholder='Email'
              />

              <label>
              What's the problem?
              </label>
              <textarea
                  name='message'
                  value={message}
                  onChange={this.handleChange}
                  placeholder="What can we do for you?"
                  htmlFor='message' className='form__extralabel'
                />

              <button className='form__btn' type='submit'>
                Send
              </button>
            </form>
            <br></br>
            <p className={`contactpage__response${
         this.state.submitted !== false ? '--active' : ''
        }`}>{formResponce}</p>
          </div>
        </section>
      </>
    );
  }
}

export default Contact;
