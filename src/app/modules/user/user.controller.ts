import UserService from "./user.service";
import { Controller } from "nodeapi-cruds-ts";

export class UserController extends Controller {

  service: any = UserService;

}

export default new UserController();