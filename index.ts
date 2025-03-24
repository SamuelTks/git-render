// Developer: Samuel Tam
// Purpose: Express API app

import * as dotenv from "dotenv";
dotenv.config();
import express, { Request, Response } from "express";
const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;
const app = express();

app.put("/", (req: Request, res: Response) => { 
  res.json({ message: "PUT method = Create (CRUD) - Samuel - Tam" }); 
}); 
 
app.get("/", (req: Request, res: Response) => { 
  res.json({ message: "GET method = Read (CRUD) - Samuel - Tam" }); 
}); 
 
app.post("/", (req: Request, res: Response) => { 
  res.json({ message: "POST Method = Update (CRUD) - Samuel - Tam" }); 
}); 
 
app.delete("/", (req: Request, res: Response) => { 
  res.json({ message: "DELETE Method = Delete (CRUD) - Samuel - Tam" }); 
}); 

app.all("*", (req, res) => {
  res.status(404).json({ message: "Invalid route and HTTP method." });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
  process.on("SIGTERM", shutdown);
  process.on("SIGINT", shutdown);
});

function shutdown() {
  console.log(`Server is shutting down.`);
  process.exit(0);
}
