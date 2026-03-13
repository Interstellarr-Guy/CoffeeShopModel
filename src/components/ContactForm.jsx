function ContactForm() {
  return (
    <section className="contact">

      <h2 className="head">Contact Us</h2>

      <form className="f">

        <input className="bar" type="text" placeholder="Name" />

        <input className="bar" type="email" placeholder="Email" />

        <textarea className="bar" placeholder="Address"></textarea>

        <button className="btn">Send</button>
        

      </form>

    </section>
  );
}

export default ContactForm;