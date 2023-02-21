import client from "./@client";

export async function createReservation(email: string) {
  const res = await client.post("/beta", { email });

  return res.data;
}
