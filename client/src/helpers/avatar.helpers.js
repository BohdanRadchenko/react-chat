import tinycolor from 'tinycolor2';

const getCorrectIndex = (number = 0) => {
	return number > 255
			? 255
			: number < 0
					? 0
					: number;
};

export const getGradientAvatar = (id = '000') => {

	const [r, g, b] = id
			.substr(id.length - 3, 3)
			.split('')
			.map(char => getCorrectIndex(char.charCodeAt(0)));

	const mainColor = tinycolor({r, g: g - 20, b: b + 50})
			.spin(180)
			.desaturate(10)
			.brighten(20)
			.toHexString();

	const secondaryColor = tinycolor({r, g, b})
			.spin(180)
			.desaturate(10)
			.brighten(40)
			.lighten(30)
			.toHexString();

	const isLight = tinycolor(mainColor).isLight();
	let textColor = '#F7F8F9';

	if (isLight) {
		textColor = '#202020';
	}

	const gradient = `linear-gradient(135deg, ${mainColor} 0%, ${secondaryColor} 96.52%)`;
	return {
		background: gradient,
		color: textColor,
	};
};
