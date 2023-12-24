import { GlobalStyle } from '../Global';
import { Layout } from './Layout';
import { ContactForm } from './Form/Form';
import { Section } from './PhoneTitle/PhoneTitle';
import { ContactList } from './FormList/ContactList';
import { SearchBar } from './SearchBar';
import { AnimationText } from './OtherAnimation.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProviderWrapper } from './Theme';

export const App = () => {
  return (
    <Layout>
      <ThemeProviderWrapper />

      <Section title="Phonebook">
        <AnimationText />

        <ContactForm />

        <SearchBar />

        <Section title="Contacts">
          <ContactList />
        </Section>
      </Section>

      <GlobalStyle />

      <ToastContainer />
    </Layout>
  );
};
