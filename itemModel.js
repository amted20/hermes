import mongoose from "mongoose"

const itemSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "please inter"]
        },
        source: {
            type: String,
            default: ""
        }
    },
    {
        timestamps: true
    }
)

const Item = mongoose.model('Item', itemSchema);
export default Item;