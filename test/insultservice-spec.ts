import "mocha";
import "mocha-sinon";
import * as chai from "chai";
import * as sinon from "sinon";

import IInsultRepository from "../src/interface/iinsultrepository";
import IInsultService from "../src/interface/iinsultservice";
import InsultService from "../src/service/insultservice";

const expect = chai.expect;

const testDataWith2 = [
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

const testDataWith10 = [
    {
        "degreeOfProfanity": 1,
        "language": "en-GB",
        "phrase": "foo"
    },
    {
        "degreeOfProfanity": 1,
        "language": "en-GB",
        "phrase": "bar"
    },
    {
        "degreeOfProfanity": 1,
        "language": "en-GB",
        "phrase": "bundy"
    },
    {
        "degreeOfProfanity": 1,
        "language": "en-GB",
        "phrase": "this"
    },
    {
        "degreeOfProfanity": 1,
        "language": "en-GB",
        "phrase": "really"
    },
    {
        "degreeOfProfanity": 1,
        "language": "en-GB",
        "phrase": "is"
    },
    {
        "degreeOfProfanity": 1,
        "language": "en-GB",
        "phrase": "tedious"
    },
    {
        "degreeOfProfanity": 1,
        "language": "en-GB",
        "phrase": "oh"
    },
    {
        "degreeOfProfanity": 1,
        "language": "en-GB",
        "phrase": "yes"
    },
    {
        "degreeOfProfanity": 1,
        "language": "en-GB",
        "phrase": "indeed"
    }
];

describe("InsultService", () => {

    let repositoryMock: IInsultRepository = <IInsultRepository>{};

    describe("GetInsults", () => {

        it("should call InsultRepository", () => {

            repositoryMock.GetInsults = sinon.stub().returns(testDataWith2);

            let sut: InsultService = new InsultService(repositoryMock);

            sut.GetInsults();

            expect((<sinon.SinonStub>repositoryMock.GetInsults).calledOnce).to.be.true;
        });

        it("should return insults when it finds insults", () => {

            repositoryMock.GetInsults = sinon.stub().returns(testDataWith2);

            let sut: IInsultService = new InsultService(repositoryMock);

            expect(sut.GetInsults()).to.be.not.null;
            expect(sut.GetInsults().length).to.equal(testDataWith2.length);
        });

        it("should return only 5 results when it finds more than 5", () => {

            repositoryMock.GetInsults = sinon.stub().returns(testDataWith10);

            let sut: IInsultService = new InsultService(repositoryMock);

            expect(sut.GetInsults()).to.be.not.null;
            expect(sut.GetInsults().length).to.equal(6);

        });

        it("should return empty array when it doesn't find insults", () => {

            repositoryMock.GetInsults = sinon.stub().returns([]);

            let sut: IInsultService = new InsultService(repositoryMock);

            expect(sut.GetInsults()).to.be.not.null;
            expect(sut.GetInsults().length).to.equal(0);
        });
    });
});
