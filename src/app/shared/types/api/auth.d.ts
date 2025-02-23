declare interface BodySignIn {
    email: string,
    password: string,
}

declare interface AuthResponse {
    accessToken: string,
    refreshToken: string
}