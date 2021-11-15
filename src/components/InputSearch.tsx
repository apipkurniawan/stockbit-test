import React from "react";
import "./InputSearch.scss";
interface Props {
  txtSearch: string;
  handleOnSubmit: (e: any) => void;
  handleOnChange: (e: any) => void;
}

const InputSearch: React.FC<Props> = ({
  txtSearch,
  handleOnSubmit,
  handleOnChange,
}) => {
  return (
    <form onSubmit={handleOnSubmit}>
      <input
        className="search"
        type="search"
        placeholder="cari judul film ..."
        value={txtSearch}
        onChange={handleOnChange}
      />
    </form>
  );
};

export default InputSearch;
