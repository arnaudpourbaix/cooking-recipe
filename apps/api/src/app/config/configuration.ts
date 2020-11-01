import { AppConfig } from './config.model';

export default () => {
  const config = {
    jwtSecretKey: process.env.JWT_SECRET_KEY,
    loginSuccessUrl: process.env.LOGIN_SUCCESS_URL,
    google: {
      clientId: process.env.CLIENT_ID,
      projectId: process.env.PROJECT_ID,
      authUrl: process.env.AUTH_URL,
      tokenUrl: process.env.TOKEN_URL,
      authProviderCertUrl: process.env.AUTH_PROVIDER_X509_CERT_URL,
      clientSecret: process.env.CLIENT_SECRET,
      redirectUrl: process.env.REDIRECT_URL,
      javascriptOrigin: process.env.JAVASCRIPT_ORIGINS,
    },
  } as AppConfig;
  return config;
};
