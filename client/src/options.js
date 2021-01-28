
export const testAttachment = [
	{
		attachment_id: '20-01',
		url: 'https://source.unsplash.com/100x100/?random=122&nature,water',
	},
	{
		attachment_id: '20-02',
		url: 'https://source.unsplash.com/100x100/?random=233&nature,water',
	},
	{
		attachment_id: '20-03',
		url: 'https://source.unsplash.com/100x100/?random=344&nature,water',
	},
	{
		attachment_id: '20-04',
		url: 'https://source.unsplash.com/100x100/?random=1222&nature,water',
	},
	{
		attachment_id: '20-05',
		url: 'https://source.unsplash.com/100x100/?random=231233&nature,water',
	},
];

export const testUserOptions = {
	'00-00': {
		user_id: '00-00',
		avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtpWpk1CVTFyMicbPh2Kryl4e8jQymuiVo-g&usqp=CAU',
		user_name: 'Брут',
		online: true,
	},
	'00-11': {
		user_id: '00-11',
		avatar: '',
		user_name: 'Jack the Ripper',
		online: true,
	},
	'00-22': {
		user_id: '00-22',
		avatar: 'https://source.unsplash.com/random/800x600?random=2&',
		user_name: 'Ян Борисович Кум',
		online: true,
	},
	'00-33': {
		user_id: '00-33',
		avatar: '',
		user_name: 'Фёдор Достоевский',
		online: false,
	},
	'00-44': {
		avatar: 'https://interesnyefakty.org/wp-content/uploads/gaj-yulij-czezar-interesnyefakty.org_.jpg',
		user_name: 'Гай Юлий Цезарь',
		online: true,
	},
	'00-55': {
		user_id: '00-55',
		avatar: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Alan_Turing_Aged_16.jpg',
		user_name: 'Алан Тьюринг',
		online: false,
	},
	'00-66': {
		user_id: '00-66',
		avatar: 'https://i.pinimg.com/originals/8e/7e/0e/8e7e0e2b6d1f4ff7a0c5033f8cdb50ea.jpg',
		user_name: 'Александр Блок',
		online: false,
	},
};

export const testDialogOption = [
	{
		user_id: '00-11',
		avatar: testUserOptions['00-11'].avatar,
		user_name: testUserOptions['00-11'].user_name,
		online: testUserOptions['00-11'].online,
		last_message: 'Я ща стрепсилс тебе куплю, пулей туда и обратно.',
		last_message_create_at: 'Wed Jan 27 2021 19:33:31 GMT+0200',
		unread_count: 3,
	},
	{
		user_id: '00-22',
		avatar: testUserOptions['00-22'].avatar,
		user_name: testUserOptions['00-22'].user_name,
		online: testUserOptions['00-22'].online,
		last_message: 'Го в WhatsApp, я создал',
		last_message_create_at: 'Wed Jan 27 2021 19:33:31 GMT+0200',
		unread_count: 1,
	},
	{
		user_id: '00-33',
		avatar: testUserOptions['00-33'].avatar,
		user_name: testUserOptions['00-33'].user_name,
		online: testUserOptions['00-33'].online,
		last_message: 'Мы все свидетельствуем Вам глубочайшее наше почтение и целуем Ваши ручки, дражайший папенька: Михайла, Федор, Варвара и Андрюша',
		last_message_create_at: 'Wed Jan 27 2021 19:33:31 GMT+0200',
		unread_count: 0,
	},
	{
		user_id: '00-44',
		avatar: testUserOptions['00-44'].avatar,
		user_name: testUserOptions['00-44'].user_name,
		online: testUserOptions['00-44'].online,
		last_message: 'Кек. Ты то меня никогда не предашь 😌',
		last_message_create_at: 'Wed Jan 27 2021 19:33:31 GMT+0200',
		unread_count: 0,
	},
	{
		user_id: '00-55',
		avatar: testUserOptions['00-55'].avatar,
		user_name: testUserOptions['00-55'].user_name,
		online: testUserOptions['00-55'].online,
		last_message: 'Есть дока на Энигму?',
		last_message_create_at: 'Wed Jan 27 2021 19:33:31 GMT+0200',
		unread_count: 0,
	},
	{
		user_id: '00-66',
		avatar: testUserOptions['00-66'].avatar,
		user_name: testUserOptions['00-66'].user_name,
		online: testUserOptions['00-66'].online,
		last_message: 'У меня к Вам большая просьба: не можете ли Вы прислать мне удостоверение в том, что я — единственный сын.',
		last_message_create_at: 'Wed Jan 27 2021 19:33:31 GMT+0200',
		unread_count: 0,
	},
];

export const testMessageOption = [
	{
		dialog_id: '00-11',
		dialog: [
			{
				message_id: '01',
				sender_id: '00-11',
				sender_avatar: testUserOptions['00-11'].avatar,
				message: '',
				message_time: 'Wed Jan 27 2021 19:33:31 GMT+0200',
				read: true,
				attachments: testAttachment,
				typing: false,
			},
			{
				message_id: '02',
				sender_id: '00-00',
				sender_avatar: testUserOptions['00-00'].avatar,
				message: '',
				message_time: 'Wed Jan 27 2021 19:33:31 GMT+0200',
				read: true,
				attachments: testAttachment,
				typing: false,
			},
			{
				message_id: '03',
				sender_id: '00-11',
				sender_avatar: testUserOptions['00-11'].avatar,
				message: 'test attachment 11',
				message_time: 'Wed Jan 27 2021 19:33:31 GMT+0200',
				read: true,
				attachments: testAttachment,
				typing: false,
			},
			{
				message_id: '04',
				sender_id: '00-00',
				sender_avatar: testUserOptions['00-00'].avatar,
				message: 'test attachment 00',
				message_time: 'Wed Jan 27 2021 19:33:31 GMT+0200',
				read: true,
				attachments: testAttachment,
				typing: false,
			},
			{
				message_id: '05',
				sender_id: '00-11',
				sender_avatar: testUserOptions['00-11'].avatar,
				message: 'test attachment 11',
				message_time: 'Wed Jan 27 2021 19:33:31 GMT+0200',
				read: true,
				attachments: [testAttachment[0]],
				typing: false,
			},
			{
				message_id: '06',
				sender_id: '00-00',
				sender_avatar: testUserOptions['00-00'].avatar,
				message: 'test attachment 00',
				message_time: 'Wed Jan 27 2021 19:33:31 GMT+0200',
				read: true,
				attachments: [testAttachment[1]],
				typing: false,
			},
			{
				message_id: '07',
				sender_id: '00-11',
				sender_avatar: testUserOptions['00-11'].avatar,
				message: '',
				message_time: 'Wed Jan 27 2021 19:33:31 GMT+0200',
				read: true,
				attachments: [testAttachment[2]],
				typing: false,
			},
			{
				message_id: '08',
				sender_id: '00-00',
				sender_avatar: testUserOptions['00-00'].avatar,
				message: '',
				message_time: 'Wed Jan 27 2021 19:33:31 GMT+0200',
				read: true,
				attachments: [testAttachment[3]],
				typing: false,
			},
			{
				message_id: '09',
				sender_id: '00-11',
				sender_avatar: testUserOptions['00-11'].avatar,
				message: '',
				message_time: 'Wed Jan 27 2021 19:33:31 GMT+0200',
				read: true,
				attachments: [],
				typing: true,
			},

		],
	},
	{
		dialog_id: '00-22',
		dialog: [
			{
				message_id: '01',
				sender_id: '00-22',
				sender_avatar: testUserOptions['00-22'].avatar,
				message: 'test message 33',
				message_time: 'Wed Jan 27 2021 19:33:31 GMT+0200',
				read: true,
				attachments: null,
				typing: false,
			},
			{
				message_id: '02',
				sender_id: '00-22',
				sender_avatar: testUserOptions['00-22'].avatar,
				message: 'test message 33',
				message_time: 'Wed Jan 27 2021 19:33:31 GMT+0200',
				read: true,
				attachments: null,
				typing: false,
			},
			{
				message_id: '03',
				sender_id: '00-00',
				sender_avatar: testUserOptions['00-00'].avatar,
				message: 'test message 33',
				message_time: 'Wed Jan 27 2021 19:33:31 GMT+0200',
				read: true,
				attachments: null,
				typing: false,
			},
			{
				message_id: '04',
				sender_id: '00-22',
				sender_avatar: testUserOptions['00-22'].avatar,
				message: '',
				message_time: 'Wed Jan 27 2021 19:33:31 GMT+0200',
				read: false,
				attachments: null,
				typing: true,
			},
		],
	},
	{
		dialog_id: '00-33',
		dialog: [
			{
				message_id: '01',
				sender_id: '00-33',
				sender_avatar: testUserOptions['00-33'].avatar,
				message: 'test message 33',
				message_time: 'Wed Jan 27 2021 19:33:31 GMT+0200',
				read: true,
				attachments: null,
				typing: false,
			},
			{
				message_id: '02',
				sender_id: '00-33',
				sender_avatar: testUserOptions['00-33'].avatar,
				message: 'test message 33',
				message_time: 'Wed Jan 27 2021 19:33:31 GMT+0200',
				read: true,
				attachments: null,
				typing: false,
			},
			{
				message_id: '03',
				sender_id: '00-00',
				sender_avatar: testUserOptions['00-00'].avatar,
				message: 'test message 33',
				message_time: 'Wed Jan 27 2021 19:33:31 GMT+0200',
				read: true,
				attachments: null,
				typing: false,
			},
			{
				message_id: '04',
				sender_id: '00-33',
				sender_avatar: testUserOptions['00-33'].avatar,
				message: '',
				message_time: 'Wed Jan 27 2021 19:33:31 GMT+0200',
				read: false,
				attachments: null,
				typing: true,
			},
		],
	},
	{
		dialog_id: '00-44',
		dialog: [
			{
				message_id: '01',
				sender_id: '00-44',
				sender_avatar: testUserOptions['00-44'].avatar,
				message: 'Салам, Брут! Чё, как, уничтожил флот галлов? 🖐🏻',
				message_time: 'Wed Jan 27 2021 19:33:31 GMT+0200',
				read: true,
				attachments: null,
				typing: false,
			},
			{
				message_id: '02',
				sender_id: '00-44',
				sender_avatar: testUserOptions['00-44'].avatar,
				message: 'Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝',
				message_time: 'Wed Jan 27 2021 19:33:31 GMT+0200',
				read: true,
				attachments: null,
				typing: false,
			},
			{
				message_id: '03',
				sender_id: '00-00',
				sender_avatar: testUserOptions['00-00'].avatar,
				message: 'Салам, брат Цезарь!',
				message_time: 'Wed Jan 27 2021 19:33:31 GMT+0200',
				read: true,
				attachments: null,
				typing: false,
			},
			{
				message_id: '04',
				sender_id: '00-44',
				sender_avatar: testUserOptions['00-44'].avatar,
				message: 'Да нзч! Ок, держи в курсе.',
				message_time: 'Wed Jan 27 2021 19:33:31 GMT+0200',
				read: true,
				attachments: null,
				typing: false,
			},
			{
				message_id: '05',
				sender_id: '00-00',
				sender_avatar: testUserOptions['00-00'].avatar,
				message: 'Ave Caesar! Morituri te salutant! ☝️',
				message_time: 'Wed Jan 27 2021 19:33:31 GMT+0200',
				read: true,
				attachments: null,
				typing: false,
			},
			{
				message_id: '06',
				sender_id: '00-44',
				sender_avatar: testUserOptions['00-44'].avatar,
				message: '',
				message_time: 'Wed Jan 27 2021 19:33:31 GMT+0200',
				read: true,
				attachments: [{
					attachment_id: '11-00',
					url: 'https://i.pinimg.com/originals/48/09/42/480942fafdc0eee581bd9f245c4338ae.jpg',
				}],
				typing: false,
			},
			{
				message_id: '07',
				sender_id: '00-44',
				sender_avatar: testUserOptions['00-44'].avatar,
				message: 'Кек. Ты то меня никогда не предашь 😌',
				message_time: 'Wed Jan 27 2021 19:33:31 GMT+0200',
				read: true,
				attachments: null,
				typing: false,
			},
		],
	},
];
