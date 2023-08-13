import './components/styles/Contact.css';

const Contact = () => {
  return (
    <>
      <section className="contact">
        <div className="contianer-fluid">
          <div className="row contact-pg-heading">
            <h1>Contact Page</h1>
          </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.3684371610007!2d72.64945837444955!3d23.08360481404951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e81b8a49b7b5f%3A0xcc5574fe2a3eae40!2sOzone%20City!5e0!3m2!1sen!2sin!4v1690125174037!5m2!1sen!2sin"
              width="100%"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
      </section>

      <section className="contact-form">
        <div className="container">
          <form action='https://formspree.io/f/xvojgdrr' method='POST'>
            <div className="row contact-pg-form">
              <div className="mb-3">
                <input type="text" name='Name' className="form-control" placeholder="Name"/>
              </div>
              <div className="mb-3">
                <input type="email" name='Email' className="form-control" placeholder="Email"/>
              </div>
              <div className="mb-3">
                <textarea className="form-control" name="Message" rows="3" placeholder="Please Specify Your Problem"></textarea>
              </div>
              <div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
