import { Container } from "inversify";

import { Controller, TYPE, interfaces } from "inversify-express-utils";

import IInsultRepository from "./interface/iinsultrepository";
import IInsultService from "./interface/iinsultservice";

import InsultController from "./controller/insultcontroller";

import InsultRepository from "./repository/insultrepository";

import InsultService from "./service/insultservice";

import Types from "./types";

let container = new Container();

container.bind<IInsultRepository>(Types.IInsultRepository).to(InsultRepository);
container.bind<IInsultService>(Types.IInsultService).to(InsultService);
container.bind<interfaces.Controller>(TYPE.Controller).to(InsultController)
    .whenTargetNamed("InsultController");

export default container;
