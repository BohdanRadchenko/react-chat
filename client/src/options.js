export const testDialogs = [
	[
		{message: 'dialogs one message one', time: 'сейчас', read: false},
		{message: 'dialogs one message two', time: 'сейчас', read: false},
		{message: 'dialogs one message three', time: 'сейчас', read: false},
		{message: 'Я ща стрепсилс тебе куплю, п…', time: 'сейчас', read: false},
	],
	[
		{message: 'dialogs two message one', time: '13:01', read: true},
		{message: 'dialogs two message two', time: '13:01', read: false},
		{message: 'dialogs two message three', time: '13:01', read: true},
		{message: 'Го в WhatsApp, я создал', time: '13:01', read: false},
	],
	[
		{message: 'dialogs three message one', time: '11:59', read: false},
		{message: 'dialogs three message two', time: '11:59', read: false},
		{message: 'dialogs three message three', time: '11:59', read: true},
		{message: 'Мы все свидетельствуем …', time: '11:59', read: false},
	],
	[
		{message: 'dialogs four message one', time: 'Вчера', read: true},
		{message: 'dialogs four message two', time: 'Вчера', read: false},
		{message: 'dialogs four message three', time: 'Вчера', read: true},
		{message: 'Кек! Ты то меня никогда не пре…', time: 'Вчера', read: true},
	],
	[
		{message: 'dialogs five message one', time: '09:33', read: false},
		{message: 'dialogs five message two', time: '09:33', read: false},
		{message: 'dialogs five message three', time: '09:33', read: false},
		{message: 'Привет! Я ща в аптеку заско…', time: '09:33', read: false},
	],
];

export const testContacts = [
	{
		avatar: '',
		isOnline: false,
		id: '43-20-123',
		name: 'Jack the Ripper',
		dialogs: testDialogs[0],
	},
	{
		avatar: '',
		isOnline: true,
		id: '43-21-123',
		name: 'Ян Борисович Кум',
		dialogs: testDialogs[1],
	},
	{
		avatar: '',
		isOnline: true,
		id: '43-22-123',
		name: 'Фёдор Достоевский',
		dialogs: testDialogs[2],
	},
	{
		avatar: '',
		isOnline: true,
		id: '43-23-123',
		name: 'Гай Юлий Цезарь',
		dialogs: testDialogs[3],
	},
	{
		avatar: '',
		isOnline: false,
		id: '43-24-123',
		name: 'Алан Тьюринг',
		dialogs: testDialogs[4],
	},
	{
		avatar: '',
		isOnline: true,
		id: '43-25-123',
		name: 'Александр Блок',
		dialogs: testDialogs[0],
	},
	{
		avatar: '',
		isOnline: false,
		id: '43-26-123',
		name: '123',
		dialogs: testDialogs[2],
	},
	{
		avatar: '',
		isOnline: false,
		id: '44-27-123',
		name: '123456',
		dialogs: testDialogs[1],
	},
	{
		avatar: '',
		isOnline: false,
		id: '45-28-123',
		name: 'name',
		dialogs: testDialogs[3],
	},
	{
		avatar: '',
		isOnline: true,
		id: '46-29-123',
		name: 'test name',
		dialogs: testDialogs[4],
	},
	{
		avatar: '',
		isOnline: false,
		id: '47-29-123',
		name: 'test name',
		dialogs: testDialogs[4],
	},
	{
		avatar: '',
		isOnline: false,
		id: '48-29-123',
		name: 'test name',
		dialogs: testDialogs[4],
	},
	{
		avatar: '',
		isOnline: true,
		id: '49-29-123',
		name: 'test name',
		dialogs: testDialogs[4],
	},
];

const a1 = 'https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg';
const a2 = 'https://www.pressgazette.co.uk/wp-content/uploads/2020/11/shutterstock.jpg';
const a3 = 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80';



export const testMessage = [
	{userId: '0',avatar: a2, id: '00', sender: '43-23-123', message: 'Салам, Брут! Чё, как, уничтожил флот галлов? 🖐🏻 \n Салам, Брут! Чё, как, уничтожил флот галлов? 🖐', time: 'Вчера, в 12:31', read: true},
	{userId: '0',avatar: a2, id: '0', sender: '43-23-123', message: 'Салам, Брут! Чё, как, уничтожил флот галлов? 🖐🏻', time: 'Вчера, в 12:31', read: true},
	{userId: '0',avatar: a2, id: '1', sender: '43-23-123', message: 'Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝', time: 'Вчера, в 12:31', read: true},
	{userId: '1',avatar: a3, id: '2', sender: '1', message: 'Салам, брат Цезарь!', time: 'Вчера, в 12:45', read: true},
	{userId: '1',avatar: a3, id: '3', sender: '1', message: 'Всё норм! Флот построили на Лауре. Галлов добили после вашего нападения. Спс! 🔥', time: 'Вчера, в 12:48', read: true},
	{userId: '0',avatar: a2, id: '4', sender: '43-23-123', message: 'Да нзч! Ок, держи в курсе.', time: 'Вчера, в 13:12', read: true},
	{userId: '1',avatar: a3, id: '5', sender: '1', message: 'Ave Caesar! Morituri te salutant! ☝️', time: 'Вчера, в 13:23', read: true},
	{userId: '0',avatar: a2, id: '6', sender: '43-23-123', message: 'picture file', time: 'Вчера, в 12:28', read: true},
	{userId: '0',avatar: a2, id: '7', sender: '43-23-123', message: 'Кек. Ты то меня никогда не предашь 😌', time: 'Вчера, в 12:30', read: true},

	// {id: '01', sender: '43-23-123', message: 'Салам, Брут! Чё, как, уничтожил флот галлов? 🖐🏻', time: 'Вчера, в 12:31', read: true},
	// {id: '11', sender: '43-23-123', message: 'Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝', time: 'Вчера, в 12:31', read: true},
	// {id: '21', sender: '1', message: 'Салам, брат Цезарь!', time: 'Вчера, в 12:45', read: true},
	// {id: '31', sender: '1', message: 'Всё норм! Флот построили на Лауре. Галлов добили после вашего нападения. Спс! 🔥', time: 'Вчера, в 12:48', read: true},
	// {id: '41', sender: '43-23-123', message: 'Да нзч! Ок, держи в курсе.', time: 'Вчера, в 13:12', read: true},
	// {id: '51', sender: '1', message: 'Ave Caesar! Morituri te salutant! ☝️', time: 'Вчера, в 13:23', read: true},
	// {id: '61', sender: '43-23-123', message: 'picture file', time: 'Вчера, в 12:28', read: true},
	// {id: '71', sender: '43-23-123', message: 'Кек. Ты то меня никогда не предашь 😌', time: 'Вчера, в 12:30', read: true},

	// {id: '02', sender: '43-23-123', message: 'Салам, Брут! Чё, как, уничтожил флот галлов? 🖐🏻', time: 'Вчера, в 12:31', read: true},
	// {id: '12', sender: '43-23-123', message: 'Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝', time: 'Вчера, в 12:31', read: true},
	// {id: '22', sender: '1', message: 'Салам, брат Цезарь!', time: 'Вчера, в 12:45', read: true},
	// {id: '32', sender: '1', message: 'Всё норм! Флот построили на Лауре. Галлов добили после вашего нападения. Спс! 🔥', time: 'Вчера, в 12:48', read: true},
	// {id: '42', sender: '43-23-123', message: 'Да нзч! Ок, держи в курсе.', time: 'Вчера, в 13:12', read: true},
	// {id: '52', sender: '1', message: 'Ave Caesar! Morituri te salutant! ☝️', time: 'Вчера, в 13:23', read: true},
	// {id: '62', sender: '43-23-123', message: 'picture file', time: 'Вчера, в 12:28', read: true},
	// {id: '72', sender: '43-23-123', message: 'Кек. Ты то меня никогда не предашь 😌', time: 'Вчера, в 12:30', read: true},

	// {id: '012', sender: '43-23-123', message: 'Салам, Брут! Чё, как, уничтожил флот галлов? 🖐🏻', time: 'Вчера, в 12:31', read: true},
	// {id: '112', sender: '43-23-123', message: 'Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝', time: 'Вчера, в 12:31', read: true},
	// {id: '212', sender: '1', message: 'Салам, брат Цезарь!', time: 'Вчера, в 12:45', read: true},
	// {id: '312', sender: '1', message: 'Всё норм! Флот построили на Лауре. Галлов добили после вашего нападения. Спс! 🔥', time: 'Вчера, в 12:48', read: true},
	// {id: '412', sender: '43-23-123', message: 'Да нзч! Ок, держи в курсе.', time: 'Вчера, в 13:12', read: true},
	// {id: '512', sender: '1', message: 'Ave Caesar! Morituri te salutant! ☝️', time: 'Вчера, в 13:23', read: true},
	// {id: '612', sender: '43-23-123', message: 'picture file', time: 'Вчера, в 12:28', read: true},
	// {id: '712', sender: '43-23-123', message: 'Кек. Ты то меня никогда не предашь 😌', time: 'Вчера, в 12:30', read: true},

	// {id: '022', sender: '43-23-123', message: 'Салам, Брут! Чё, как, уничтожил флот галлов? 🖐🏻', time: 'Вчера, в 12:31', read: true},
	// {id: '122', sender: '43-23-123', message: 'Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝', time: 'Вчера, в 12:31', read: true},
	// {id: '222', sender: '1', message: 'Салам, брат Цезарь!', time: 'Вчера, в 12:45', read: true},
	// {id: '322', sender: '1', message: 'Всё норм! Флот построили на Лауре. Галлов добили после вашего нападения. Спс! 🔥', time: 'Вчера, в 12:48', read: true},
	// {id: '422', sender: '43-23-123', message: 'Да нзч! Ок, держи в курсе.', time: 'Вчера, в 13:12', read: true},
	// {id: '522', sender: '1', message: 'Ave Caesar! Morituri te salutant! ☝️', time: 'Вчера, в 13:23', read: true},
	// {id: '622', sender: '43-23-123', message: 'picture file', time: 'Вчера, в 12:28', read: true},
	// {id: '722', sender: '43-23-123', message: 'Кек. Ты то меня никогда не предашь 😌', time: 'Вчера, в 12:30', read: true},
]
