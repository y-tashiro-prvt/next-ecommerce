import { createClient, OAuthStrategy } from "@wix/sdk";
import { collections, products } from "@wix/stores";
import { cookies } from "next/headers";

export const wixClientServer = async () => {
  let refreshToken;

  try {
    const cookieStore = cookies();
    const tokenCookie = cookieStore.get("refreshToken")?.value;
    if (tokenCookie) {
      refreshToken = JSON.parse(tokenCookie);
    }
  } catch (e) {
    console.error("Failed to parse refreshToken:", e);
  }

  const wixClient = createClient({
    modules: {
      products,
      collections,
    },
    auth: OAuthStrategy({
      clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
      tokens: {
        refreshToken: refreshToken || "",
        accessToken: { value: "", expiresAt: 0 },
      },
    }),
  });

  // Optionally refresh accessToken here if necessary
  // Example:
  // if (wixClient.auth.tokens.accessToken.expiresAt < Date.now()) {
  //   await wixClient.auth.refreshTokens();
  // }

  return wixClient;
};

