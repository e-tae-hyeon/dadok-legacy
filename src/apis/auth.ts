import client from "./@client";

export async function refresh(refreshToken: string) {
  const res = await client.post("/auth/refresh", { refreshToken });

  return res.data;
}
