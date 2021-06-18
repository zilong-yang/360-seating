import http from "../utils/API"

class TheatersDataService {

    async mapAuditoriums() {
        return http.get(`/theater/mapAuditoriums`);
    }

    async getAuditoriumAvailability(roomID) {
        return http.get(`/theater/getAuditoriumAvailability/${roomID}`)
    }

    async getRoomByMovieName(movieName) {
        return http.get(`/theater/getRoomByMovieName?name=${movieName}`)
    }

}

export default new TheatersDataService();
