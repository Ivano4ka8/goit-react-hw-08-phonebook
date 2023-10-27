import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import 'modern-normalize';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme } from 'styles';
import { Provider } from 'react-redux';
import { store, persistor } from 'redux/store';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-08-phonebook">
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
          <GlobalStyles />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
