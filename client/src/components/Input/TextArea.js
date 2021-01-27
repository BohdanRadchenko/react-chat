import React, {useState} from 'react';
import PropTypes from 'prop-types';
import TextareaAutosize from 'react-textarea-autosize';

const TextArea = ({
	                  value,
	                  onHeight,
	                  onChange,
	                  onPressEnter,
	                  style,
	                  className,
	                  placeholder,
	                  maxRows,
	                  minRows,
	                  clearOnEnter,
	                  reference,
                  }) => {
	const [text, setText] = useState('');

	const getTextareaValue = () => {
		if (typeof value === 'undefined') {
			return text;
		}
		return value;
	};

	const handleChange = e => {
		const v = e.target.value;
		setText(v);
		onChange && onChange(v);
	};

	const handleHeightChange = height => {
		onHeight && onHeight(height);
	};

	const handleKeyDown = e => {
		if (e.keyCode === 13 && e.shiftKey) {
			return null;
		}
		if (e.keyCode === 13) {
			onPressEnter && onPressEnter();
			e.preventDefault();
			if (clearOnEnter) {
				setText('');
				onChange && onChange('');
			}
			return null;
		}
	};

	return (
			<div className={className}>
				<TextareaAutosize
						ref={reference}
						maxRows={maxRows || 10}
						minRows={minRows || 1}
						placeholder={placeholder || 'Enter your text'}
						className="textarea-input"
						style={{resize: 'none', ...style}}
						autoFocus
						value={getTextareaValue()}
						onChange={e => handleChange(e)}
						onKeyDown={handleKeyDown}
						onHeightChange={height => handleHeightChange(height)}
				/>
			</div>
	);
};

TextArea.propTypes = {
	reference: PropTypes.object,
	value: PropTypes.string,
	placeholder: PropTypes.string,
	className: PropTypes.string,
	style: PropTypes.object,
	onHeight: PropTypes.func,
	onChange: PropTypes.func,
	onPressEnter: PropTypes.func,
	minRows: PropTypes.number,
	maxRows: PropTypes.number,
	clearOnEnter: PropTypes.bool,

};

export default TextArea;