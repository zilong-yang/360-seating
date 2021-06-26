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

    /**
     * Invert the availability of the given seat in the given room.
     *
     * Sample usage:
     * {@code
     *      TheatersDataService.setSeatAvailability(1, "F5")
     *          .then(...)
     *          .catch(...);
     * }
     *
     * @param roomID    (Number) the room number
     * @param position  (String) position of seat
     */
    async setSeatAvailability(roomID, position) {
        return http.put(`/theater/seats/${roomID}`, {position: position});
    }

}

export default new TheatersDataService();
