// Fichier généré par generate.mjs à partir de retailers/nutri-beautiful/spec.json. Ne pas modifier ici.
export interface ScopeField { key: string; env: string; description: string; example: string; pattern?: string }
export const RETAILER: {
  id: string; slug: string; version: string; label: string; origin: string; entryUrl: string; loginUrl: string; signupUrl: string;
  platform: string; fulfillment: ReadonlyArray<"delivery" | "click_and_collect">; accountRequired: boolean;
  scopeFields: ReadonlyArray<ScopeField>;
} = {
  "id": "nutri-beautiful",
  "slug": "nutri_beautiful",
  "version": "0.1.1",
  "label": "Nutri-Beautiful",
  "origin": "https://nutri-beautiful.com",
  "entryUrl": "https://nutri-beautiful.com/",
  "loginUrl": "https://nutri-beautiful.com/connexion",
  "signupUrl": "https://nutri-beautiful.com/connexion?create_account=1",
  "platform": "prestashop",
  "fulfillment": [
    "delivery"
  ],
  "accountRequired": false,
  "scopeFields": []
};
