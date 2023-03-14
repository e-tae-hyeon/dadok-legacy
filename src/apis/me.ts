import client from "./@client";
import { Proflie } from "./types";

export async function checkMe() {
  const res = await client.get("/me");

  return res.data;
}

export async function getMyProfile() {
  const res = await client.get<Proflie>("/me/profile ");

  return res.data;
}
