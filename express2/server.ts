import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/palaute", (req, res) => {
  res.send(`
			<html>
				<head>
					<title>Express Server</title>
				</head>
				<body>
					<form action="/palaute" method="post">
						<input type="text" name="nimi" placeholder="nimi" />
						<input type="text" name="sposti" placeholder="Sähköposti" />
						<input type="text" name="viesti" placeholder="Viesti" />
						<button type="submit">Lähetä</button>
					</form>
				</body>
			</html>
		`);
});

app.post("/palaute", (req, res) => {
  //get information from the form
  res.send(
    `kiitos palautteesta ${req.body.nimi} sposti ${req.body.sposti} viesti ${req.body.viesti}`
  );
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
