const db = require("../db");
const Icecream = db.icecreams;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    // Validate request
    if (!req.body.flavor || !req.body.description) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    const icecream = new Icecream({
        flavor: req.body.flavor,
        description: req.body.description,
    });

    icecream
        .save(icecream)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the icecream.",
            });
        });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    const flavor = req.query.flavor;
    var condition = flavor ? { flavor: { $regex: new RegExp(flavor), $options: "i" } } : {};

    Icecream.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving icecreams.",
            });
        });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Icecream.findById(id)
        .then(data => {
            if (!data) res.status(404).send({ message: "Not icecream found with id " + id });
            else res.send(data);
        })
        .catch(err => {
            res.status(500).send({ message: "Error retrieving icecream with id=" + id });
        });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!",
        });
    }

    const id = req.params.id;

    Icecream.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update icecream with id=${id}. Maybe icecream was not found!`,
                });
            } else res.send({ message: "Icecream was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating ice cream with id=" + id,
            });
        });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Icecream.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete icecream with id=${id}. Maybe icecream was not found!`,
                });
            } else {
                res.send({
                    message: "icecream was deleted successfully!",
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete icecream with id=" + id,
            });
        });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
    Icecream.deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deletedCount} icecreams were deleted successfully!`,
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while removing all icecreams.",
            });
        });
};
