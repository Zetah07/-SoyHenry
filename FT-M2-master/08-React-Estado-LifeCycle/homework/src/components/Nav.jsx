import React from 'react';
import SearchBar from './SearchBar.jsx';

function Nav({props}) {
  return (
    <div>Barra de Navegación
      <SearchBar onSearch={props.onSearch}/>
    </div>
  );
};

export default Nav;
