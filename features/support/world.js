const { setWorldConstructor } = require('cucumber');
const axios = require('axios');
const api = axios.create({ baseURL: 'http://localhost:3001/api/' });

class CustomWorld {
    constructor() {
        this.user = {},
        this.vehicle = {},
        this.ride = {},
        this.response = {}
    }

    setToUser(name, password, email, telephone) {
        this.user.name = name
        this.user.password = password
        this.user.email = email
        this.user.telephone = telephone
    }
    setToVehicle(model, licensePlate, status) {
        this.vehicle.model = model
        this.vehicle.licensePlate = licensePlate
        this.vehicle.status = status
    }

    setToRide(user, vehicle, startPlace, finishPlace) {
        this.ride.user = user
        this.ride.vehicle = vehicle
        this.ride.startPlace = startPlace
        this.ride.finishPlace = finishPlace
    }
    
    async post(url, data) {
        const res = await api.post(url, data);
        this.response.statusCode = res.status;
        this.response.data = res.data;
    }
}

setWorldConstructor(CustomWorld);