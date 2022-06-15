import React from 'react';

const Search = () => {
  return (
    <div className="blog__modal scale-up-center">
      <form className="blog__modal-container">
          <input type="text" className="blog__modal-input" placeholder="제목으로 검색" />
          <input type="text" className="blog__modal-input" placeholder="태그로 검색" />
          <button className="blog__modal-button">Search</button>
      </form>
    </div>
  )
}

export default Search