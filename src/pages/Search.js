import React from "react";

import "../assets/service/css/search.css";
import Result from "../components/Result";

const Search = props => (
  <>
    <div className="max-w-sm w-full lg:width-350px rounded bg-white shadow-lg px-6 pt-6 pb-2">
      <div className="font-bold text-xl mb-4 text-center">지하철 경로 검색</div>
      <form className="bg-white mb-4">
        <div className="flex flex-wrap mb-3">
          <div className="w-5/12 h-12 text-center text-gray-800">
            <input
              className="appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
              id="departure-station-name"
              type="text"
              value=""
              placeholder="출발역"
            />
          </div>
          <div className="w-2/12 h-12 text-center text-gray-800 flex justify-center items-center">
            <span className="mdi mdi-arrow-right-thick relative bottom-6px text-lg" />
          </div>
          <div className="w-5/12 h-12 text-center text-gray-800">
            <input
              className="appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
              id="arrival-station-name"
              type="text"
              value=""
              placeholder="도착역"
            />
          </div>
        </div>
        <button type="submit" id="search-button"
          className="w-full text-sm bg-yellow-500 hover:bg-yellow-400 hover:text-gray-700 text-gray-800 font-bold py-2 px-4 rounded-sm">
          검색
        </button>
      </form>
    </div>
    <Result />
  </>
);

export default Search;
