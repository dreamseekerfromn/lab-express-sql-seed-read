const db = require("../db/dbConfig.js");

const getAllSongs = async () => {
    try {
        const allSongs = await db.any("SELECT * FROM songs");
        return allSongs
    } catch(err) {
        return err
    }
}
const getOneBookmark = () => {};

const deleteBookmark = () => {};

const updateBookmark = () => {};

module.exports = {
    getAllSongs
}