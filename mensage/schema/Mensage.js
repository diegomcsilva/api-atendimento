import mongoose from 'mongoose'

const Mensage = new mongoose.Schema({
    tipoChamada: {
        type: String,
        required: true
    },
    estado: {
        type: String,
        required: true
    },
    motivoChamada: {
        type: String,
        required: true
    },
    mensage: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.model('Mensage', Mensage)
