import Layout from "../Components/Layout";
import ContactPage from "../Components/ContactPage";
import { MessageProvider } from "../Components/MessageContext";

const Kontak = () => {
  return (
    <Layout>
      <MessageProvider>
        <ContactPage />
      </MessageProvider>
    </Layout>
  );
};

export default Kontak;
