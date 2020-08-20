import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !subject || !message) {
      return setError('please all fields are required');
    } else {
      setError('');
    }


    if (!/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
      return setEmailError('Please provide a valid email address');
    }
    setError('');

    console.log(name, email, subject, message);
    setError('');
    setSuccess('Your message has been sent. Thank you!');
    setEmail('');
    setName('');
    setMessage('');
    setSubject('');
    setEmailError('');

    setTimeout(() => {
      setSuccess('');
    }, 4000);

  };


  return (
    <section id="contact" className="contact">
      <div className="container">

        <div className="section-title">
          <h2>Contact</h2>
          <h3>Contact <span>Us</span></h3>
          <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
        </div>

        <div>
          <iframe style={{ border: 0, width: '100%', height: "270px" }} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameBorder="0" allowFullScreen></iframe>
        </div>

        <div className="row mt-5">

          <div className="col-lg-4">
            <div className="info">
              <div className="address">
                <i className="icofont-google-map"></i>
                <h4>Location:</h4>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>

              <div className="email">
                <i className="icofont-envelope"></i>
                <h4>Email:</h4>
                <p>info@example.com</p>
              </div>

              <div className="phone">
                <i className="icofont-phone"></i>
                <h4>Call:</h4>
                <p>+1 5589 55488 55s</p>
              </div>

            </div>

          </div>

          <div className="col-lg-8 mt-5 mt-lg-0">

            <form onSubmit={handleSubmit} className="php-email-form" noValidate>
              <div className="form-row">
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />

                  <div className="validate">{error}</div>
                </div>
                <div className="col-md-6 form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />

                  <div className="validate">{error ? error : emailError}</div>
                </div>
              </div>

              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  data-msg="Please enter at least 8 chars of subject"
                  value={subject}
                  onChange={e => setSubject(e.target.value)}
                />

                <div className="validate">{error}</div>
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  rows="5"
                  data-msg="Please write something for us"
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  placeholder="Message"
                />
                <div className="validate">{error}</div>
              </div>

              {success && <div className="mb-3">
                {/* <div className="loading">Loading</div>
                <div className="error-message"></div> */}
                <div className="sent-message">{success}</div>
              </div>}

              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Contact;
