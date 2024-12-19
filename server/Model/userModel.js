//import modules
import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';
//define schema
const schema = mongoose.Schema;
var userData = new schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,

      required: true,
    },
    token: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

//this line is used to passing a Schema instance of mongoose.model
const user = mongoose.model('users', userData);

const model = {
  async registerModel(details) {
    const { first_name, last_name, email, password } = details;
    try {
      const hashPass = await bcrypt.hash(password, 10);
      const userDetails = new user({
        firstName: first_name,
        lastName: last_name,
        email: email,
        password: hashPass,
      });
      let data = await userDetails.save();
      let result = {
        emailid: email,
        userId: data._id.toString(),
      };
      return result;
    } catch (error) {
      console.log('in error', error.message);
      throw new Error('Something went wrong');
    }
  },

  async loginModel(email, password) {
    try {
      let data = await user.findOne({
        email: email,
      });
      if (data) {
        const checkingPass = await bcrypt.compare(password, data.password);
        if (checkingPass) {
          return data;
        } else {
          throw new Error('Password is not correct');
        }
      } else {
        throw new Error('Email id is not correct');
      }
    } catch (error) {
      throw new Error(error.message);
    }
  },
};

export default model;
