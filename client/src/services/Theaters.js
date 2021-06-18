import http from "../utils/API"

class TheatersDataService {

    async mapAuditoriums() {
        return http.get(`/theater/mapAuditoriums`);
    }

    async getAuditoriumAvailability(roomID) {
        return http.get(`/theater/getAuditoriumAvailability/${roomID}`)
    }

}

export default new TheatersDataService();
