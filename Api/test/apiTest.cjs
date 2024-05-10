const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../src/index.cjs');
const expect = chai.expect;

chai.use(chaiHttp);

describe('API Test', () => {
    it('Deve retornar uma resposta válida do endpoint /api/dados', (done) => {
        chai.request(app)
            .get('/api/dados')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res).to.be.json;
                expect(res.body).to.be.an('array');
                done();
            });
    });
});