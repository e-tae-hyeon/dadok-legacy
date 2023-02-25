import client from "./@client";

export async function checkMe() {
  const res = await client.get("/me");

  return res.data;
}
