module.exports = mongoose => {
    let schema = mongoose.Schema({}, { timestamps: true });

    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Order = mongoose.model("order", schema);
    return Order;
};
