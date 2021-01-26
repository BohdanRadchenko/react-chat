const express = require('express');
const {PORT} = require('./config');
const app = express();

app.listen(PORT, (err) => {
	err
			? console.log(err.message)
			: console.log(`Server has been started on PORT: ${PORT} ...`);
});