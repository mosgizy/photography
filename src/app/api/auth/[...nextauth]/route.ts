import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import type { NextAuthOptions } from "next-auth";

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET as string,
} as NextAuthOptions);

export { handler as GET, handler as POST };