import client from "./@client";
import { CreateBookParams } from "./types";

export async function createBook(params: CreateBookParams) {
  const res = await client.post("/book", params);

  return res.data;
}

export async function getMyBookIsbns() {
  const res = await client.get<{ isbn: string }[]>("/book/isbn");

  return res.data;
}
