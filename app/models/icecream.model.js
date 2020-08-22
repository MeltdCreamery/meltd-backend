module.exports = mongoose => {
    let schema = mongoose.Schema(
        {
            flavor: String,
            description: String,
        },
        { timestamps: true }
    );

    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Icecream = mongoose.model("icecream", schema);
    return Icecream;
};
