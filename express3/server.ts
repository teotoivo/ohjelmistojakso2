import express from "express";
import bodyParser from "body-parser";
import fs from "fs";
import mysql from "mysql";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

type Auto = {
  malli: string;
  merkki: string;
  vuosimalli: number;
  omistaja: string;
};

//create a class for the database connection
class Database {
  private static _instance: Database;
  private connection: mysql.Connection;
  private constructor() {
    this.connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      database: "autot",
    });
    this.connection.connect((err) => {
      if (err) throw err;
      console.log("Connected to database");
    });
  }
  public static getInstance(): Database {
    if (!Database._instance) {
      Database._instance = new Database();
    }
    return Database._instance;
  }
  public getConnection(): mysql.Connection {
    return this.connection;
  }
  public async getAutot() {
    return await new Promise((resolve, reject) => {
      this.connection.query("SELECT * FROM auto", (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  }

  public async getAuto(id: string) {
    return await new Promise((resolve, reject) => {
      this.connection.query(
        "SELECT * FROM auto WHERE id = ?",
        [id],
        (err, result) => {
          if (err) reject(err);
          resolve(result);
        }
      );
    });
  }

  public async addAuto(auto: Auto) {
    return await new Promise((resolve, reject) => {
      this.connection.query(
        "INSERT INTO auto (malli, merkki, vuosimalli, omistaja) VALUES (?, ?, ?, ?)",
        [auto.malli, auto.merkki, auto.vuosimalli, auto.omistaja],
        (err, result) => {
          if (err) reject(err);
          resolve(result);
        }
      );
    });
  }

  public async updateAuto(auto: Auto, id: string) {
    return await new Promise((resolve, reject) => {
      this.connection.query(
        "UPDATE auto SET malli = ?, merkki = ?, vuosimalli = ?, omistaja = ? WHERE id = ?",
        [auto.malli, auto.merkki, auto.vuosimalli, auto.omistaja, id],
        (err, result) => {
          if (err) reject(err);
          resolve(result);
        }
      );
    });
  }

  public async deleteAuto(id: string) {
    return await new Promise((resolve, reject) => {
      this.connection.query(
        "DELETE FROM auto WHERE id = ?",
        [id],
        (err, result) => {
          if (err) reject(err);
          resolve(result);
        }
      );
    });
  }
}

app.get("/autot", async (req, res) => {
  const db = Database.getInstance();
  const autot = await db.getAutot();
  res.send(autot);
});

app.get("/autot/:id", async (req, res) => {
  const db = Database.getInstance();
  const auto = await db.getAuto(req.params.id);
  res.send(auto);
});

app.post("/autot/uusi", async (req, res) => {
  const auto = req.body;

  const db = Database.getInstance();

  //check if id is unique
  const idExists = (await db.getAuto(auto.id)) as any;
  if (idExists.length > 0) {
    res.status(400).send("Bad request");
    return;
  }
  console.log(idExists);

  const result = await db.addAuto(auto);
  res.send(result);
});

app.put("/autot/muokkaa/:id", async (req, res) => {
  const auto = req.body;
  const id = req.params.id;
  const db = Database.getInstance();

  //check if id exists
  const idExists = (await db.getAuto(id)) as any;
  if (idExists.length == 0) {
    res.status(400).send("Bad request");
    return;
  }

  const result = await db.updateAuto(auto, id);
  res.send(result);
});

app.delete("/autot/poista/:id", async (req, res) => {
  const id = req.params.id;

  const db = Database.getInstance();

  //check if id exists
  const idExists = (await db.getAuto(id)) as any;
  if (idExists.length == 0) {
    res.status(400).send("Bad request");
    return;
  }

  const result = await db.deleteAuto(id);
  res.send(result);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
