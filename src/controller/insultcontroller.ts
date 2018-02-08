/* tslint:disable:no-unused-variable */
import * as express from "express";

import { inject, injectable } from "inversify";
import { Controller, Get, interfaces } from "inversify-express-utils";
import "reflect-metadata";

import IInsultService from "../interface/iinsultservice";
import Insult from "../model/insult";
import Types from "../types";

@Controller("/insult")
@injectable()
export class InsultController implements interfaces.Controller {

    private _insultService: IInsultService;

    constructor( @inject(Types.IInsultService) insultService: IInsultService) {
        this._insultService = insultService;
    }

    @Get("/")
    public index(req: express.Request): Insult[] {
        return this._insultService.GetInsults();
    }
}

export default InsultController;
