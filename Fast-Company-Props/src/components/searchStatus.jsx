import React from "react";

const SearchStatus = ({ length }) => {

  const renderPharse = (number) => {
    const lastOne = Number(number.toString().slice(-1));
    if (number > 4 && number < 15) return "человек тусанет";
    if ([2, 3, 4].indexOf(lastOne) >= 0) return "человека тусанут";
    if (lastOne === 1) return "человек тусанет";
  };

  return length > 0 ? `${length} ${renderPharse(length)} с тобой сегодня` : "Никто с тобой не тусанет";
}

export default SearchStatus;

//
