const chai = require("chai");
const sinonChai = require("sinon-chai");
const sinon = require("sinon");
const Todo = require("./models/todo");
const chaiHttp = require("chai-http");
const app = require("./app");

chai.use(sinonChai);
chai.use(chaiHttp);

const { expect } = chai;

describe("show controller function", () => {
  it("should call res.json with todos", async () => {
    const mock = sinon.mock(Todo);
    mock
      .expects("findById")
      .once()
      .resolves({ _id: "1234abcd", title: "XYZ", completed: false });

    const res = await chai.request(app).get("/api/todos/1234abcd");

    // expect(res).to.have.statusCode(200);
    expect(res.status).to.equal(200);
    expect(res.body).to.deep.equal({
      _id: "1234abcd",
      title: "XYZ",
      completed: false,
    });

    mock.verify();
  });

  // Exercice 3
  // Tester sur le modèle ci-dessus la route
  // GET /api/todos
  it("should call res.json with todos", async () => {
    const mock = sinon.mock(Todo);
    mock
      .expects("find")
      .once()
      .resolves([
        { _id: "1234abcd", title: "XYZ", completed: false },
        { _id: "abcd1234", title: "ABC", completed: true },
      ]);

    const res = await chai.request(app).get("/api/todos");

    // expect(res).to.have.statusCode(200);
    expect(res.status).to.equal(200);
    expect(res.body).to.deep.equal([
      { _id: "1234abcd", title: "XYZ", completed: false },
      { _id: "abcd1234", title: "ABC", completed: true },
    ]);

    mock.verify();
  });
});
