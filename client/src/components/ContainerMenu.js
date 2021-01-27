import React, {useCallback, useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

import BurgerMenu from './BurgerMenu';
import {useHover} from '../hook/useHover';

const ContainerMenu = ({children}) => {
	const [isOpen, setIsOpen] = useState(false);
	const ref = useRef(null);

	const isHover = useHover(ref);

	const openMenu = useCallback(() => {
		setIsOpen(true);
	}, []);

	const closeMenu = useCallback(() => {
		setIsOpen(false);
	}, []);

	useEffect(() => {
		if (isHover) {
			openMenu();
		}
		const timeout = setTimeout(() => {
			if (isHover) return;
			closeMenu();
		}, 800);
		return () => {
			clearTimeout(timeout);
		};
	}, [isHover, openMenu, closeMenu]);

	return (
			<div className="root-container">
				<div className="container">
					<div
							className={
								classnames('container__wrapper', {'open': isOpen})}
					>

						{/*MAIN LEFT BAR*/}
						<div className="container__left" ref={ref}>
							<BurgerMenu isOpen={isOpen}/>
						</div>

						{/*MAIN RIGHT BAR*/}
						<div className="container__right">
							{children}
						</div>

					</div>
				</div>
			</div>
	);
};

ContainerMenu.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.node,
		PropTypes.oneOf(['null']),
	]),
};

export default ContainerMenu;