module.exports = app => {
    const icecreams = require("../controllers/icecream.controller");

    let router = require("express").Router();

    // Create a new Tutorial
    router.post("/", icecreams.create);

    // Retrieve all Tutorials
    router.get("/", icecreams.findAll);

    // Retrieve a single Tutorial with id
    router.get("/:id", icecreams.findOne);

    // Update a Tutorial with id
    router.put("/:id", icecreams.update);

    // Delete a Tutorial with id
    router.delete("/:id", icecreams.delete);

    // Create a new Tutorial
    router.delete("/", icecreams.deleteAll);

    app.use("/api/icecreams", router);
};
