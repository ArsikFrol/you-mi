import type { AuthOptions, DefaultSession } from "next-auth"
import GoogleProvider from 'next-auth/providers/google'
import GitHubProvider from 'next-auth/providers/github'
import Credentials from "next-auth/providers/credentials"

declare module "next-auth" {
    interface Session {
        user: {
            id: number,
            role: TRole,
            name: string,
            email: string,
            image: string
        } & DefaultSession["user"]
    }

    interface User {
        id: number,
        role: TRole,
        name: string,
        email: string,
        image: string | null | undefined,
    }
}

type TRole = 'user' | 'psychologist'

type TUser = {
    id: number,
    name: string,
    email: string,
    password: string,
    image: string | null | undefined,
    role: TRole
}

const listUsers: TUser[] = [
    { id: 1, name: 'Гена 1', email: 'email1@mail.ru', password: 'password1', image: '', role: 'user' },
    { id: 2, name: 'Гена 2', email: 'email2@mail.ru', password: 'password2', image: '', role: 'user' },
    { id: 3, name: 'Гена 3', email: 'email3@mail.ru', password: 'password3', image: '', role: 'user' },
    { id: 4, name: 'Гена 4', email: 'email4@mail.ru', password: 'password4', image: '', role: 'psychologist' }
]

export const authConfig: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
        }),
        Credentials({
            credentials: {
                email: { label: "Email", type: "email", required: true },
                password: { label: "Password", type: "password", required: true },
                name: { label: "Name", type: "text", required: false }
            },
            async authorize(credentials, req) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error("Требуется email и пароль");
                }

                const isRegistration = req.body?.name || req.body?.signup === 'true';

                const existingUser = listUsers.find(user => user.email === credentials.email);

                if (existingUser) {
                    if (existingUser.password === credentials.password) {
                        const { password, ...userWithoutPassword } = existingUser;
                        return userWithoutPassword;
                    }
                    throw new Error("Неверный пароль");
                } else if (isRegistration) {
                    const newUser = {
                        id: Math.max(...listUsers.map(user => user.id)) + 1,
                        email: credentials.email,
                        password: credentials.password,
                        name: credentials.name || credentials.email.split('@')[0],
                        image: '' as string,
                        role: 'user' as TRole,
                    };

                    listUsers.push(newUser);
                    console.log("✅ Зарегистрирован новый пользователь:", newUser.email);
                    console.log("👥 Все пользователи:", listUsers.map(u => ({ email: u.email, name: u.name })));

                    const { password, ...userWithoutPassword } = newUser;
                    return userWithoutPassword;
                } else {
                    throw new Error("Пользователь не найден. Зарегистрируйтесь.");
                }
            }
        })
    ],
    session: {
        strategy: "jwt" as const,
        maxAge: 30 * 24 * 60 * 60,
    },

    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.email = user.email;
                token.name = user.name;
                token.role = user.role;
            }
            return token;
        },
        async session({ session, token }) {
            if (session.user) {
                session.user.id = token.id as number;
                session.user.email = token.email as string;
                session.user.name = token.name as string;
                session.user.role = token.role as TRole
            }
            return session;
        }
    },

    pages: {
        signIn: "/signIn",
        newUser: "/signUp",
        error: "/error",
    },

    secret: process.env.NEXTAUTH_SECRET,
    debug: process.env.NODE_ENV === "development",
}