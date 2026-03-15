import NextAuth from "next-auth";

import { authConfig } from "@/configs/auth";

const hendler = NextAuth(authConfig)

export { hendler as GET, hendler as POST }