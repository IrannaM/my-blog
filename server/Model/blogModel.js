import mongoose from 'mongoose';
//define schema
const schema = mongoose.Schema;
var blogData = new schema(
  {
    userId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    isTrash: {
      type: Boolean,
      default: false,
    },
    index: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

//this line is used to passing a Schema instance of mongoose.model
const blogDetails = mongoose.model('blog-details', blogData);

const BlogModel = {
  async createModel(data) {
    const { id, title, comment } = data;
    console.log('in model create blog', data);
    try {
      const blogDetail = new blogDetails({
        userId: id,
        title: title,
        comment: comment,
      });
      let data = await blogDetail.save();
      console.log('Blog Create ', data);
      let result = {
        id: data._id.toString(),
      };
      return result;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  async viewAllModel(data) {
    try {
      let data = await blogDetails.find().sort({ _id: -1 });
      return data;
    } catch (error) {
      //   console.log('in error', error);
      throw new Error(error.message);
    }
  },
  async viewSingleModel(id) {
    try {
      let data = await blogDetails.findOne({
        _id: id,
      });
      return data;
    } catch (error) {
      //   console.log('in error', error);
      throw new Error(error.message);
    }
  },
  async updateModel(data, id) {
    const { title, comment } = data;
    console.log('in model Update blog', data);
    try {
      let data = await blogDetails.updateOne(
        {
          _id: id,
        },
        {
          $set: {
            title: title,
            comment: comment,
          },
        }
      );
      return 'Update Successfull';
    } catch (error) {
      //   console.log('in error', error.message);
      throw new Error(error.message);
    }
  },
  async searchModel(data) {
    try {
      console.log('in searchModel', data);
      let result = await blogDetails.find({ title: data });
      console.log('in searchModel', result);
      return result;
    } catch (error) {
      //   console.log('in error', error);
      throw new Error(error.message);
    }
  },
};
export default BlogModel;
