import GoogleProvider from "next-auth/providers/google"

export const authConfigs = {
    providers:[
        GoogleProvider({
            clientId: process.env.AUTH_GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.AUTH_GOOGLE_CLIENT_SECRET as string,
        })
    ],
    secret: process.env.AUTH_SECRET
}

