import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import ruLocale from 'date-fns/locale/ru';

export const getTimeDistance = time => {
	return formatDistanceToNow(Date.parse(time), {
				addSuffix: true,
				locale: ruLocale,
			},
	);
};