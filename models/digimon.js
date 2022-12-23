import { Schema } from "mongoose";
import mongoose from "./index.js";

export const Digimon = mongoose.model('Digimon', new Schema({
    digimonName: String,
    digimonHp: Number,
    itemDropped: String
}))

export async function createDigimon(digimonStats)
{
    const digimon = new Digimon(digimonStats);
    await digimon.save();
    return digimon;
}

export async function getDigimon(digimonName)
{
    const digimon = await Digimon.find({digimonName})
    return digimon;
}

export default Digimon