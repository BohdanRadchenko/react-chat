import React from 'react';
import {useLocation} from 'react-router';
import PropTypes from 'prop-types';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

const TransitionRoute = ({children, type, timeout = 600, transitionKey}) => {
	const {pathname} = useLocation();

	const key = transitionKey
			? transitionKey
			: pathname.includes('dialog')
					? '/im/dialog'
					: pathname;

	// const styles = {
	// 	width: '100%',
	// 	height: '100%',
	// };

	return (
			<TransitionGroup>
				<CSSTransition
						key={key}
						classNames={type ? type : 'transition-fade'}
						timeout={timeout}
						mountOnEnter
						unmountOnExit
						// appear
						// enter
						// exit
				>
					{children}
				</CSSTransition>
			</TransitionGroup>
	);
};

TransitionRoute.propTypes = {
	type: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.node,
	]),
};

export default TransitionRoute;