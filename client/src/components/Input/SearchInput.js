import React, {useState} from 'react';
import PropTypes from 'prop-types';

import {SearchOutlined} from '@ant-design/icons';

const SearchInput = ({onChange, value = '', placeholder}) => {
	const [searchValue, setSearchValue] = useState('');

	const handleChange = e => {
		const v = e.target.value;
		setSearchValue(v);
		onChange(v);
	};
	return (
			<div className="search-input">
				<input
						className="search-input--input"
						value={!!value ? value : searchValue}
						onChange={handleChange}
						placeholder={placeholder}
				/>

				<div className="search-input--icon">
					<SearchOutlined/>
				</div>
			</div>
	);
};

SearchInput.propTypes = {
	callback: PropTypes.func,
};

export default SearchInput;