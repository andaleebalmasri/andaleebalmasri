import "../styles/Contact.css";
function Contact() {
  return (
    <div className="page">
      <h1>Contact Us</h1>

      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea rows="4" placeholder="Your Message"></textarea>
        <button className="btn-message">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;