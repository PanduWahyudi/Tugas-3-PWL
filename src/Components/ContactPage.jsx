import { useState, useContext } from "react";
import { MessageContext } from "./MessageContext";

function ContactPage() {
  const [message, setMessage] = useState("");
  const { addMessage } = useContext(MessageContext); 
  const { messages } = useContext(MessageContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message) {
      addMessage(message);
      setMessage("");
    }
    console.log(message);
  };

  return (
    <div className="bg-white w-[60%] p-5 rounded-lg min-h-[20rem]">
      <p className="text-xl text-center font-bold mb-2 text-dark-purple">
        Contact
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <textarea
          className="border-2 border-dark-purple rounded-md"
          name=""
          placeholder="Send Your Message..."
          id="Saran"
          cols="30"
          rows="5"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button
          className="bg-nice-pink text-white px-4 py-2 rounded mt-5 mb-2"
          type="submit"
        >
          Submit
        </button>
      </form>
      <p className="text-xl font-light mb-4 text-center">
        Number of Incoming Messages : {messages.length}
      </p>
    </div>
  );
}

export default ContactPage;
