export interface UserProfile {
  id: string;
  displayName: string;
  photoUrl?: string;
}

export interface JwtData {
  thirdPartyId: string;
  accessToken: string;
  refreshToken: string;
  provider: string;
}
