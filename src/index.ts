import App from "./app"; // Corrected import path to the local file 'app.ts'
import dotenv from 'dotenv';
import validateEnv from "./utils/validateEnv";
import UsersController from "./controllers/users.controller";
import ChildsController from "./controllers/childs.controller";
import ParentController from "./controllers/parents.controller";
dotenv.config();
validateEnv()

const app = new App([new UsersController(),new ChildsController(),new ParentController],Number(process.env.PORT))
 
app.listen() 