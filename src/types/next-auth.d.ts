/* eslint-disable no-unused-vars */
import type { Session, User } from "next-auth";
import type { JWT } from "next-auth/jwt";
import NextAuth from "next-auth";

type UserId = string;

declare module "next-auth/jwt" {
  interface JWT {
    id: UserId;
  }
}

declare module "next-auth" {
  interface Session extends SessionBase {
    user?: User & { id?: UserId };
  }
}
