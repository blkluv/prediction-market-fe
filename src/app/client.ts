import { createThirdwebClient } from "thirdweb";

const clientId = process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID;

console.log("Client IDxxx", clientId);
if (!clientId) {
  throw new Error("NEXT_PUBLIC_THIRDWEB_CLIENT_ID  No client ID provided");
}

export const client = createThirdwebClient({
  clientId: clientId as string,
});
