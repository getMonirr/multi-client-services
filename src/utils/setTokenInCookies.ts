import { cookies } from "next/headers";
export const setTokenInCookies = async (jwt: string) => {
  cookies().set({
    name: "multi-token",
    value: `Bearer ${jwt}`,
    secure: true,
    httpOnly: true,
  });
};
