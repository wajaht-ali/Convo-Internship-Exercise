interface ImportMetaEnv {
    readonly VITE_API_URL: string;
    readonly VITE_APP_TITLE: string;
    // Add other variables as needed
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }