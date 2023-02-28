import useSearchBook from "hooks/useSearchBook";
import React from "react";
import SearchInput from "../SearchInput";

function SearchBookBar() {
  const { keyword, setKeyword } = useSearchBook();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  return (
    <div className="flex flex-col gap-2">
      <h1 className="h3">서재에 등록할 책을 검색하세요.</h1>
      <SearchInput
        placeholder="책의 제목을 입력하세요."
        value={keyword}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBookBar;
