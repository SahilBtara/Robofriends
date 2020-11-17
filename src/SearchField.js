import React from 'react';

const SearchField = ({searchChange}) => {
	return (
		<div>
			<input className='pa3 ma3 tc bg-lightest-blue'type="search" 
			placeholder="Search Robots" 
			onChange = {searchChange}/>
		</div>
	);
}

export default SearchField;