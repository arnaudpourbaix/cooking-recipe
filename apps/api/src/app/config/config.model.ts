export interface AppConfig {
  jwtSecretKey: string;
  loginSuccessUrl: string;
  google: GoogleConfig;
}

export interface GoogleConfig {
  clientId: string;
  projectId: string;
  authUrl: string;
  tokenUrl: string;
  authProviderCertUrl: string;
  clientSecret: string;
  redirectUrl: string;
  javascriptOrigin: string;
}
