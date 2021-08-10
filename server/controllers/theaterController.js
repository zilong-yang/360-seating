const fetch = require('node-fetch');
const Theater = require('../models/Theater');
const mongodb = require('mongodb');
const ObjectId = mongodb.ObjectId;

exports.mapAuditoriums = async (req, res) => {
    const API_KEY = process.env.TMDB_API_KEY;
    const TMDB_ADDRESS = "https://api.themoviedb.org/3/movie/";

    let fetchedMovies = await fetch(`${TMDB_ADDRESS}now_playing?api_key=${API_KEY}&language=en-US&page=1`);
    const movies = await fetchedMovies.json();

    try{
        const theater = await Theater.findOne().lean();

        if(theater){
            theater.rooms.map((room, index) => {
                room.nowPlayingMovie = movies.results[index].original_title;
            });

            const theaterUpdate = await Theater.findOneAndUpdate(
                {},
                { $set: { "rooms": theater.rooms}}
            );

            if(theaterUpdate){
                res.status(200).json({
                    msg: "Successful Movie Mapping"
                });
            }
        }
    }
    catch (e){
        console.log(e);
    }
}

exports.getAuditoriumAvailability = async (req, res) => {
    const roomNumber = (Number) (req.params.roomNumber);

    try {
        const theater = await Theater.findOne().lean();

        const room = theater.rooms.find(room => {
            return room.roomNumber === roomNumber;
        });

        res.status(200).json({
            "room": room
        })
    } catch (e) {
        console.log(e);
    }
}

exports.getRoomByMovieName = async (req, res) => {
    const movieName = req.query.name;

    try {
        const theater = await Theater.findOne().lean();

        const room = theater.rooms.find(room => room.nowPlayingMovie === movieName);

        if (room) {
            res.status(200).json(room);
        } else {
            res.status(404).json({error: "Movie not found"});
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({error: e});
    }
}

exports.getSeats = async (req, res) => {
    res.status(404).json({error: "not implemented"});
}

exports.setSeatAvailability = async (req, res) => {
    try {
        const roomID = parseInt(req.params.roomID);
        const pos = req.body.position;

        const theater = await Theater.findOne();
        let auditorium = theater.rooms.find(room => room.roomNumber === roomID);
        let seat = auditorium.seats.find(seat => seat.position === pos);
        theater.rooms
            .find(room => room.roomNumber === roomID)
            .seats
            .find(seat => seat.position === pos).isAvailable = !seat.isAvailable;

        const updateRes = await Theater.updateOne(
            { _id: ObjectId(theater._id) },
            { $set: { rooms: theater.rooms } }
        )

        console.log(updateRes)

        res.status(200).json({
            room_id: roomID,
            position: seat.position,
            isAvailable: seat.isAvailable,
            auditorium: auditorium,
            theater: theater.name,
            res: updateRes,
        });
    } catch (e) {
        console.error(e);
        res.status(500).json({error: e});
    }
}
