function ContactForm() {
  return (
    <section className="contact">

      <h2>Contact Us</h2>

      <form className="f">

        <input className="bar" type="text" placeholder="Name" />

        <input type="email" placeholder="Email" />

        <textarea placeholder="Address"></textarea>

        <button>Send</button>
        

      </form>

    </section>
  );
}

export default ContactForm;