import "mocha";
import "mocha-sinon";
import * as chai from "chai";
import * as sinon from "sinon";

import * as express from "express";

import InsultController from "../src/controller/insultcontroller";
import IInsultService from "../src/interface/iinsultservice";

const expect = chai.expect;

const testData = [
    {
        "degreeOfProfanity": 1,
        "language": "en-GB",
        "phrase": "foo"
    },
    {
        "degreeOfProfanity": 1,
        "language": "en-GB",
        "phrase": "bar"
    }
];

describe("InsultController", () => {

    let serviceMock: IInsultService = <IInsultService>{};

    describe("index", () => {

        it("should call InsultService", () => {

            serviceMock.GetInsults = sinon.stub()
            let requestMock = <express.Request><any>(sinon.stub());

            let sut: InsultController = new InsultController(serviceMock);
            
            sut.index(requestMock);

            expect((<sinon.SinonStub>serviceMock.GetInsults).calledOnce).to.be.true;
        });

        it("should return insults when it finds insults", () => {

            serviceMock.GetInsults = sinon.stub().returns(testData);
            let requestMock = <express.Request><any>(sinon.stub());

            let sut: InsultController = new InsultController(serviceMock);

            expect(sut.index(requestMock)).to.be.not.null;
            expect(sut.index(requestMock).length).to.equal(testData.length);
        });

        it("should return empty array when it doesn't find insults", () => {

            serviceMock.GetInsults = sinon.stub().returns([]);
            let requestMock = <express.Request><any>(sinon.stub());

            let sut: InsultController = new InsultController(serviceMock);

            expect(sut.index(requestMock).length).to.equal(0);
        });
    });
});
