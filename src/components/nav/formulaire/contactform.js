import { useState, useEffect } from "react";
const ContactForm = () => {
  const [values, setValues] = useState({ name: "", email: "", messages: "" });
  const [error, setError] = useState("");
  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.name.length < 4) {
    setError ("Nom trop court")
  } else(
    setError ("")
  )};
  useEffect(() => {console.log("Changement")},[values, error])
  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label>Name</label>
        <input name="name" value={values.name} onChange={handleChange} />
      </div>
      <div className="field">
        <label>Email</label>
        <input name="email" value={values.email} onChange={handleChange} />
      </div>
      <div className="field">
        <label>Messages</label>
        <textarea
          name="messages"
          value={values.messages}
          onChange={handleChange}
        />
      </div>
      {error && <h1>{error}</h1>}
      <button type="submit">Envoyer</button>
    </form>
  );
};
export default ContactForm;
