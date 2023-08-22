/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';
import App from './App';
import { AUTH_AUDIENCE, AUTH_CLIENT_ID, AUTH_DOMAIN } from './config';
import history from './utils/history';

const onRedirectCallback = (appState: any) => {
  history.push(appState && appState.returnTo ? appState.returnTo : window.location.pathname);
};

const providerConfig = {
  domain: AUTH_DOMAIN,
  clientId: AUTH_CLIENT_ID,
  onRedirectCallback,
  authorizationParams: {
    redirect_uri: window.location.origin,
    ...(AUTH_AUDIENCE ? { audience: AUTH_AUDIENCE } : null)
  }
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Auth0Provider {...providerConfig}>
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
