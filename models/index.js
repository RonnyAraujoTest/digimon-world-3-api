import mongoose from 'mongoose'

export async function main(){
    await mongoose.connect('mongodb+srv://gilbertmx6:2022trebligX6@digimonworld3.bgicgdm.mongodb.net/?retryWrites=true&w=majority')
}

export default mongoose;