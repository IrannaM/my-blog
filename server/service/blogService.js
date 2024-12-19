import BlogModel from '../Model/blogModel.js';

const BlogService = {
  async createService(details) {
    const result = await BlogModel.createModel(details);
    return result;
  },

  async viewAllService(details) {
    const result = await BlogModel.viewAllModel(details);
    return result;
  },

  async viewSingleService(details) {
    const result = await BlogModel.viewSingleModel(details);
    return result;
  },

  async updateService(details, id) {
    const result = await BlogModel.updateModel(details, id);
    return result;
  },
  async searchService(details) {
    const result = await BlogModel.searchModel(details);
    return result;
  },
};

export default BlogService;
