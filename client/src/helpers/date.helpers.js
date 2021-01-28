import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import format from 'date-fns/format';
import isToday from 'date-fns/isToday';
import isYesterday from 'date-fns/isYesterday';
import isThisMinute from 'date-fns/isThisMinute';
import ruLocale from 'date-fns/locale/ru';

const data = 'Thu Jan 25 2021 13:54:56 GMT+0200';

export const getTimeDistance = time => {
	return formatDistanceToNowStrict(
			Date.parse(time),
			{
				addSuffix: true,
				locale: ruLocale,
				roundingMethod: 'ceil',
			},
	);

	// return formatDistanceToNow(Date.parse(date), {
	// 			addSuffix: true,
	// 			locale: ruLocale,
	// 		},
	// );
};

export const getTimeDistanceDialog = time => {

	const date = Date.parse(time);
	const isTodayDate = isToday(date);
	const isYesterdayDate = isYesterday(date);

	if (isTodayDate) {
		return format(date, 'HH:mm');
	} else if (isYesterdayDate) {
		return 'Вчера';
	} else {
		return format(date, 'dd.MM.yyyy');
	}

};

export const getTimeDistanceMessage = time => {
	const date = Date.parse(time);
	const isThisMinuteDate = isThisMinute(date);

	if (isThisMinuteDate) {
		return formatDistanceToNow(date, {
					addSuffix: true,
					locale: ruLocale,
				},
		);
	} else {
		return format(date, 'HH:mm');
	}

};