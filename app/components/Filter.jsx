import React from 'react';

const Filter=({onSelect, activeFilter})=>(
	<ul className="filter-list">
      <li className={activeFilter == 'all'?'active':''}><a href="#" onClick={e=>onSelect(e,'all')}>All</a></li>
      <li className={activeFilter == 'shoe'?'active':''} ><a href="#" onClick={e=>onSelect(e,'shoe')}>Shoes</a></li>
      <li className={activeFilter == 'shirt'?'active':''} ><a href="#" onClick={e=>onSelect(e,'shirt')}>Shirts</a></li>
      <li className={activeFilter == 'jacket'?'active':''} ><a href="#" onClick={e=>onSelect(e,'jacket')}>Jackets</a></li>
    </ul>
)

export default	Filter;