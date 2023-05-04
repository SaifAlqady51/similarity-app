/* eslint-disable no-unused-vars */
import type { DefaultSession, Session, User } from 'next-auth'
import type { JWT } from 'next-auth/jwt'

type UserId = string

declare module 'next-auth/jwt' {
  interface JWT {
    id: UserId
  }
}

declare module 'next-auth/next' {
  interface DefaultSession{
    user: User & {
      id:UserId
    }
  }
}