let mysql = require('mysql');
const connection = require('../config/db.js');
const controller = {};



controller.delete2 = (req, res) => {
    let id = req.params.id;
    // console.log(id);
    connection.query('DELETE FROM band WHERE band_id = ' + id, function (err, results) {
        if (err) {
            throw err;
        } else {
            connection.query('DELETE FROM musician WHERE musician_id = ' + id, function (err, result) {
                res.redirect('/');
            });
        };
    });
};

controller.edit = (req, res) => {
    const { id } = req.params;
    connection.query("SELECT * FROM band WHERE band_id  = ?", [id], (err, results) => {
// console.log(results[0].band_id)
        if (err) {
            throw err;
        } else {
            res.render('bandEdit.ejs', {
                results: results,
            });
        };
    });
};

controller.update = (req, res) => {
    const { id } = req.params;
    let style = req.body.style;
    let foundationYear = req.body.foundationYear;
    let id_band = req.body.id_band;
    // console.log(style);
    let bandName = req.body.bandName;
    connection.query('UPDATE band SET? WHERE band_id = ' + id, { style, foundationYear, bandName }, (err, rows) => {
                res.redirect('/');
            });
        };

controller.update2 = (req, res) => {
    const id = req.params.id;

    let musician_id = req.body.musician_id;
    let bandName = req.body.bandName;
    let style = req.body.style;

    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
   
    console.log(style)
    let foundationYear = req.body.foundationYear;
    connection.query("update band_member SET ? WHERE band_id = " + id, { musician_id }, (err, rows) => {
        if (err) {
            throw err;
        } else {
            connection.query('UPDATE band SET? WHERE band_id = ' + id, { bandName, foundationYear, style }, (err, result) => {
                res.redirect('/');
            });
        };
    });
};






module.exports = controller;