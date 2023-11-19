import App from "./app"; // Corrected import path to the local file 'app.ts'
import dotenv from "dotenv";
import validateEnv from "./utils/validateEnv";
import UsersController from "./controllers/users.controller";
import ChildsController from "./controllers/childs.controller";
import ParentController from "./controllers/parents.controller";
import SchoolReportController from "./controllers/schoolReport.controller";
import log from "./common/log";
dotenv.config();
validateEnv();

const app = new App(
  [
    new UsersController(),
    new ChildsController(),
    new ParentController(),
    new SchoolReportController(),
  ],
  Number(process.env.PORT)
);
console.log(log)
// function printPattern(rows:number) {
//   for (let i = 1; i <= rows; i++) {
//     let spaces = ' '.repeat(rows - i);
//     let stars = '*'.repeat(2 * i - 1);
//     console.log(spaces + stars);
//   }
// }

// printPattern(10)
app.listen();
