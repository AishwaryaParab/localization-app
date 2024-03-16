import React, { useEffect } from 'react';
import './App.css';
import { I18nextProvider, useTranslation } from 'react-i18next';
import i18n from './i18n';
import Greeting from './components/Greeting';
import Footer from './components/Footer';

function App() {
  const {t, i18n} = useTranslation();

  useEffect(() => {
    const subdomain = window.location.hostname.substring(0, 2);
    const lng = subdomain || 'en';
    i18n.changeLanguage(lng);
  }, [])

  // const lng = i18n.language;

  return (
    <div className="App">
      <I18nextProvider i18n={i18n}>
        <Greeting />
        <Footer />
      </I18nextProvider>
    </div>
  );
}

export default App;
