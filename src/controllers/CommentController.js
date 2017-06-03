import CommentModel from "../models/CommentModel";

const CommentController = {
  list: (request, response) => {
    CommentModel.find().exec()
      .then((data) => {
        return response.json(data);
      })
      .catch(err => {
        return console.log("Comment fetching failed", err);
      });
  },
  create: (request, response, next) => {
    const comment = new CommentModel(request.body);
    comment.save()
      .then(storedComment => {
        console.log("Comment was saved");
        return response.json(storedComment);
      })
      .catch((err) => {
        return next(err);
      });
  },
  find: (request, response, next) => {
    CommentModel.findById(request.params._id).exec()
      .then((data) => {
        return response.json(data);
      })
      .catch(err => {
        next(err);
      });
  }
};

export default CommentController;
