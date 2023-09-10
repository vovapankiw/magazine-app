import { ReactNode } from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import { AUTH_AUDIENCE, AUTH_CLIENT_ID, AUTH_DOMAIN } from '@/config';
import history from '../utils/history';

const onRedirectCallback = (appState?: { returnTo?: string }) => {
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

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => (
  <Auth0Provider {...providerConfig}>{children}</Auth0Provider>
);
