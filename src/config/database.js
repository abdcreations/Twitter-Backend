import mongoose from 'mongoose';

const connect = async () => {
    await mongoose.connect('URL')
}

export default connect;