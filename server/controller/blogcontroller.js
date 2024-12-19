import BlogService from '../service/blogService.js';

const BlogController = {
  create(req, res) {
    console.log(' Blog Create Controller ::', req.body);
    const { createBlogDetails } = req.body;
    BlogService.createService(createBlogDetails)
      .then(result => {
        res.status(200).json({ Data: result });
      })
      .catch(error => {
        res.status(400).json({ Error: error.message });
      });
  },

  viewAll(req, res) {
    console.log(' Blog View all Controller ::', req.params);
    const id = req.params;
    BlogService.viewAllService(id)
      .then(result => {
        res.status(200).json({ Data: result });
      })
      .catch(error => {
        res.status(400).json({ Error: error.message });
      });
  },

  viewSingle(req, res) {
    console.log(' Blog View single Controller ::', req.query);
    const { id } = req.query;
    BlogService.viewSingleService(id)
      .then(result => {
        res.status(200).json({ Data: result });
      })
      .catch(error => {
        res.status(400).json({ Error: error.message });
      });
  },
  update(req, res) {
    const { updateBlogDetails } = req.body;
    const { id } = req.query;
    BlogService.updateService(updateBlogDetails, id)
      .then(result => {
        res.status(200).json({ Data: result });
      })
      .catch(error => {
        res.status(400).json({ Error: error.message });
      });
  },
};

export default BlogController;
