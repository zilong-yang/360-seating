import http from "../utils/API";

class OrdersDataService {

    async getOrders() {
        return http.get(`orders/getOrders`)
    }

    async addOrder(order, user) {
        return http.post(`orders/addOrder`, {order: order, user: user});
    }

}

export default new OrdersDataService();
