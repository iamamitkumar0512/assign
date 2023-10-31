declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_GOOGLE_CLIENT_ID: string;
      NEXT_GOOGLE_CLIENT_SECRET: string;
      NEXTAUTH_SECRET: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
