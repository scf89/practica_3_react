import "./Contact.css";
import { useParams } from "react-router-dom";

const Contact = () => {
  const { id } = useParams();
  return (
    <div className="contact">
      <h1>Contact Page </h1>
      {id && <h2> {id}</h2>}
    </div>
  );
};
export default Contact;
