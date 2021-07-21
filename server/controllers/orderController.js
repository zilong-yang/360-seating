const MongoClient = require('mongodb').MongoClient;

const getDB = async () => {
    try {
        const client = new MongoClient(process.env.DB_URI, {
            useUnifiedTopology: true
        });
        await client.connect();
        return await client.db('test');
    } catch (e) {
        console.error(e);
        return null;
    }
}

exports.getOrders = async (req, res) => {
    try {
        const db = await getDB();
        const results = await db.collection('orders').find().toArray();

        res.status(200).json({ orders: results });
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: e.message });
    }
}

exports.addOrder = async (req, res) => {
    try {
        const db = await getDB();

        let user = req.body.user;
        let order = req.body.order;
        let seats = (Array) (order.seats);
        seats = seats.map((seat, i) => {
            return {
                position: seat
            }
        })

        let orderDetails = {
            name: `${user.fname} ${user.lname}`,
            email: user.email,
            phoneNumber: user.phone,
            movieOrderDetails: [{
                movieName: order.movieName,
                movieStartTime: order.movieTime,
                movieAuditorium: (Number) (order.roomNumber),
                seats: seats
            }],
            total: (Number) (order.total),
        };

        const result = await db.collection('orders').insertOne(orderDetails);

        res.status(200).json({ response: result });
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: e.message });
    }
}
