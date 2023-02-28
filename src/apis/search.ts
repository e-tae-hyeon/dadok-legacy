import axios from "axios";
import { SearchBookResult } from "./types";

export async function searchBook(keyword: string, page?: number) {
  const res = await axios.get<SearchBookResult>(
    "https://dapi.kakao.com/v3/search/book",
    {
      headers: {
        Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}`,
      },
      params: {
        query: keyword,
        page,
        size: 20,
        target: "title",
      },
    }
  );

  return res.data;
}
