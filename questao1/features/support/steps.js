const { Given, When, Then } = require('cucumber');
const { expect } = require('chai');

Given('que o usuário tenha informado os seguintes dados da corrida a ser cadastrada:', function (dataTable) {
    const ride = dataTable.rowsHash();
    ride.endereco = JSON.parse(ride.endereco);
    return this.setToRide(ride.user, ride.vehicle, ride.startPlace, ride.finishPlace);
});

When('o usuário enviar os dados para o sistema por meio do método POST', async function () {
    return await this.post('/ride', this.ride);
});

Then('o sistema deve criar a corrida com os dados informados e retornar um JSON com o status code {int}', function (code) {
    expect(this.response.statusCode).to.equal(code);
    expect(this.response.data.user).to.equal(this.ride.user);
    expect(this.response.data.vehicle).to.equal(this.ride.vehicle);
    expect(this.response.data.startPlace).to.equal(this.ride.startPlace);
    expect(this.response.data.finishPlace).to.equal(this.ride.finishPlace);
});