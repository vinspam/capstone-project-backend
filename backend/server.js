import express from "express";
import bodyParser from "body-parser";
import {
  initializeDatabase,
  readTeachers,
  readStudents,
  addStudent,
  addTeacher,
  deleteTeacher,
  deleteStudent,
} from "./database.js";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

initializeDatabase();


// ============== Teacher Related endpoints ==============

app.get("/listTeachers", async function (req, res) {
  console.log("Request received to list teachers");
  let data = await readTeachers();

  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(data));
});

app.post("/addTeacher", async function (req, res) {
  let reqBody = req.body;
  console.log(
    "Request received to add teacher. Req body: " + JSON.stringify(reqBody)
  );
  let data = await addTeacher(reqBody.id, reqBody.name, reqBody.age);

  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(data));
});

app.post("/deleteTeacher", async function (req, res) {
  let reqBody = req.body;
  console.log(
    "Request received to delete teacher. Req body: " + JSON.stringify(reqBody)
  );
  let data = await deleteTeacher(reqBody.id);

  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(data));
});

// ============== Student Related endpoints ==============

app.get("/listStudents", async function (req, res) {
  console.log("Request received to list students");
  let data = await readStudents();

  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(data));
});

app.post("/addStudent", async function (req, res) {
  let reqBody = req.body;
  console.log(
    "Request received to add student. Req body: " + JSON.stringify(reqBody)
  );
  let data = await addStudent(
    reqBody.id,
    reqBody.name,
    reqBody.age,
    reqBody.religion
  );

  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(data));
});

app.post("/deleteStudent", async function (req, res) {
  let reqBody = req.body;
  console.log(
    "Request received to delete student. Req body: " + JSON.stringify(reqBody)
  );
  let data = await deleteStudent(reqBody.id);

  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(data));
});

export const server = app;
