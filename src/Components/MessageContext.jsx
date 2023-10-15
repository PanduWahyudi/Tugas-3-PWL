import { useState, createContext } from "react";
import PropTypes from "prop-types";

const MessageContext = createContext();

function MessageProvider({ children }) {
  const [messages, setMessages] = useState([]);

  const addMessage = (message) => {
    setMessages([...messages, message]);
  };

  return (
    <MessageContext.Provider value={{ messages, addMessage }}>
      {children}
    </MessageContext.Provider>
  );
}

MessageProvider.propTypes = {
  children: PropTypes.node,
};

export { MessageContext, MessageProvider };
