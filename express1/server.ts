import express from "express";
import fs from "fs";

const app = express();

//public folder
app.use(express.static("express1/public"));

app.get("/", (req, res) => {
  res.send(`
	<html>
		<head>
			<title>Express</title>
		</head>
		<body>
			<img src="/images/abstrakti.jpg" alt="express" />
			<img src="/images/avaruus.jpg" alt="express" />
			<img src="/images/kukka.jpg" alt="express" />
			<img src="/images/talvi.jpg" alt="express" />
			</body>
		</html>
	`);
});

app.listen(3000, () => {
  console.log(`http://localhost:3000`);
});
