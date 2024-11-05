/// <reference types="vite/client" />

interface ImportMeta {
  readonly env: {
    VITE_PAYMENT_LINK: string;
    VITE_PAYMENT_ACCOUNT: string;
  };
}
