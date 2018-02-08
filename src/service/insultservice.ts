/* tslint:disable:no-unused-variable */
import { inject, injectable } from "inversify";
import "reflect-metadata";

import * as shuffle from "shuffle-array";

import IInsultRepository from "../interface/iinsultrepository";
import IInsultService from "../interface/iinsultservice";
import Insult from "../model/insult";
import Types from "../types";

@injectable()
class InsultService implements IInsultService {

    private _insultRepository: IInsultRepository;

    constructor( @inject(Types.IInsultRepository) insultRepository: IInsultRepository) {

        this._insultRepository = insultRepository;
    }

    public GetInsults() {

        let allInsults = this._insultRepository.GetInsults();

        return shuffle(allInsults).slice(0, 6);
    }
}

export default InsultService;
