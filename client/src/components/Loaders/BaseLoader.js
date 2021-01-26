import React from 'react';
import {PropTypes} from 'prop-types';
import Loader from 'react-loader-spinner';

// type="Circles"
// type='Audio'
// type='BallTriangle'
// type='Bars'
// type='CradleLoader'
// type='Grid'
// type='Hearts'
// type='MutatingDots'
// type='Oval'
// type='Plane'
// type='Puff'
// type='RevolvingDot'
// type='Rings'
// type='ThreeDots'
// type='Watch'
// BEST
// type='TailSpin'
// type='Triangle'

const BaseLoader = ({children, isLoading}) => {
	if (isLoading) {
		const stylesWrapper = {
			zIndex: 9999999999,
			cursor: 'default',
			userSelect: 'none',
			position: 'fixed',
			top: 0,
			left: 0,
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			width: '100vw',
			height: '100vh',
			background: 'rgba(22, 22, 22, 0.1)',
		};

		return (
				<>
					<div style={stylesWrapper}>
						<Loader
								type='Triangle'
								color="#0a67a4"
								height={100}
								width={100}
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
};

BaseLoader.defaultProps = {
	isLoading: false,
	children: <></>,
};

BaseLoader.propTypes = {
	isLoading: PropTypes.bool,
	children: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.node,
		PropTypes.oneOf(['null']),
	]),
};

export default BaseLoader;