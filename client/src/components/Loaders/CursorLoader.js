import React, {useState} from 'react';
import {PropTypes} from 'prop-types';
import Loader from 'react-loader-spinner';
import useMousePosition from '../../hook/useMousePosition';

const CursorLoader = ({children, isLoading}) => {
			const defaultState = {
				cursor: {
					x: 0,
					y: 0,
				},
			};
			const [cursor, setCursor] = useState(defaultState);

			useMousePosition(setCursor);

			if (isLoading) {
				const styleLoader = {
					transition: 'all linear',
					zIndex: 9999999999,
					display: 'inline-block',
					position: 'fixed',
					top: `${cursor.y + 10}px`,
					left: `${cursor.x + 10}px`,
				};

				return (
						<>
							<div style={styleLoader}>
								<Loader
										type='TailSpin'
										color="#0a67a4"
										height={30}
										width={30}
								/>
							</div>
							{children}
						</>
				);
			}
			return (
					<>
						{children}
					</>
			);
		}
;

CursorLoader.defaultProps = {
	isLoading: false,
	children: <></>,
};

CursorLoader.propTypes = {
	isLoading: PropTypes.bool,
	children: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.node,
		PropTypes.oneOf(['null']),
	]),
};

export default CursorLoader;