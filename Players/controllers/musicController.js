let mysql = require('mysql');
const connection = require('../config/db.js');
const controller = {};

controller.list = (req, res) => {
    //let sql = "SELECT * FROM band_members INNER JOIN band ON musician.musician_id=band.band_id;"

    let sql = "SELECT * FROM musician "
    let sqle = "SELECT * FROM band"

    connection.query(sql, function (err, results) {
        // console.log(results);

        connection.query(sqle, function (err, results2) {
            // console.log(results2);

            res.render('Index.ejs', {
                results: results,
                results2: results2
            });
        });
    });
};
controller.save = (req, res) => {
    let name = req.body.name;
    let gender = req.body.gender;
    let birthdate = req.body.birthdate;
    let instrument = req.body.instrument;
    let photo = req.file.originalname;
    if (!req.file) return res.send('Please upload a file');
   
    let sql = "INSERT INTO musician SET?";
    let sql3 = "INSERT INTO band_member SET?";
    connection.query(sql, {
        name,
        gender,
        birthdate,
        instrument,
        photo




    }, function (err, results) {
        // console.log(results);
        res.redirect("/")
    });
};

controller.save2 = (req, res) => {
    let style = req.body.style;
    let foundationYear = req.body.foundationYear;
    let bandName = req.body.bandName;
    // console.log(style);
    // console.log(foundationYear);
    // console.log(bandName);
    let sql2 = "INSERT INTO band SET?";
    let sql3 = "INSERT INTO band_member SET?";
    connection.query(sql2, {
        style,
        foundationYear,
        bandName
    }, function (err, results) {
        // console.log(results);
        let band_id = results.insertId
        // console.log(band_id)

        connection.query(sql3, {
            band_id

        }, function (err, results3) {
            // console.log(results3);
            res.redirect('/');
        });
    });
};

controller.delete = (req, res) => {
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

        if (err) {
            throw err;
        } else {
            connection.query("SELECT * FROM musician WHERE musician_id = ?", [id], (err, result) => {
                connection.query("SELECT band_id, bandName FROM band;", function (err, bandas) {
                    res.render('musicianEdit.ejs', {
                        results: results[0],
                        result: result[0],
                        bandas: bandas
                    });
                });

            });
        };
    });
};

// controller.update = (req, res) => {
//     const { id } = req.params;
//     let name = req.body.name;
//     let gender = req.body.gender;
//     let photo = req.file.originalname;
//     console.log(photo)

//     let birthdate = req.body.birthdate;
//     let instrument = req.body.instrument;
//     let id_band = req.body.id_band;
//     let bandName = req.body.bandName;
//     connection.query('UPDATE musician SET? WHERE musician_id = ' + id, {
//         name,
//         gender,
//         birthdate,
//         instrument,
//         photo

//     }, (err, rows) => {
//         if (err) {
//             throw err;
//         } else {
//             res.redirect('/')
//         };
//     });
// };

controller.update = (req, res) => {
    let id = req.params.id;
    console.log(req.file)
    connection.query("SELECT * FROM musician WHERE musician_id = " + id, (err, results) => {
        if (req.file === undefined || null) {
            let id = req.params.id;
            var photo = results[0].photo;
            let name = req.body.name;
            let gender = req.body.gender;            
            let birthdate = req.body.birthdate;
            let instrument = req.body.instrument;
            let sql = 'UPDATE musician set? where musician_id =' + id;
            connection.query(sql, {
                name,
                gender,
                birthdate,
                instrument,
                photo }, (err, rows) => {
                if (err) {
                    throw err;
                } else {
                    res.redirect('/')
                };
            })
        } else {
            let id = req.params.id;
            let name = req.body.name;
            let gender = req.body.gender;
            let photo = req.file.originalname;
            let birthdate = req.body.birthdate;
            let instrument = req.body.instrument;
            let sql = 'UPDATE musician set? where musician_id =' + id;
            connection.query(sql, { name, gender, birthdate, instrument, photo }, (err, rows) => {
                if (err) {
                    throw err;
                } else {
                    res.redirect('/')
                };
            })
        }
    });
}

// controller.update2 = (req, res) => {
//     const id  = req.params.id;
//     let name = req.body.name;
//     let gender = req.body.gender;
//     let photo = req.body.photo;
//     let birthday = req.body.birthday;
//     let instrument = req.body.instrument;
//    let band_id= req.body.band_id;
//    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
//     let bandName = req.body.bandName;
//     connection.query("update band_member SET ? WHERE musician_id = " + id, { band_id}, (err, rows) => {
//         if (err) {
//             throw err;
//         } else {
//             connection.query('UPDATE musician SET? WHERE musician_id = ' + id, { name}, (err, result) => {
//                 res.redirect('/');
//             });
//          };
//     });
// };
module.exports = controller;