/* eslint-disable @typescript-eslint/no-unused-vars */
import { FormEvent } from "react";
import "../styles/search_input.css";
import { LuSearch } from "react-icons/lu";

interface Props {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: FormEvent) => void;
}

const SearchInput: React.FC<Props> = ({ query, setQuery, handleSubmit }) => {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <select className="select_button" name="categories" id="categories">
        <option value="Categories">All Categories</option>
        <option value="Categories">Breakfast</option>
        <option value="Categories">Lunch</option>
        <option value="Categories">Dinner</option>
      </select>
      <input
        type="text"
        placeholder="Search"
        className="input_field"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" className="input_button">
        <LuSearch />
      </button>
    </form>
  );
};

export default SearchInput;
