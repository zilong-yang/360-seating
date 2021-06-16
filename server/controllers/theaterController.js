const fetch = require('node-fetch');
const Theater = require('../models/Theater');

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
    const roomNumber = req.params.roomNumber;

    const theater = await Theater.findOne().lean();

    const room = theater.rooms.find(room => {
        return room.roomNumber == roomNumber;
    });

    res.json({
        "room": room
    })
}