import { comment } from "postcss";
import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import Rating from "react-rating";
import { ToastContainer, toast } from "react-toastify";

const Ratings = () => {
  const [newComment, setNewComment] = useState({ rating: 0, comment: "" });
  const [comments, setComments] = useState([
    {
      id: 1,
      rating: 3,
      comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, rem.",
    },
    {
      id: 2,
      rating: 4,
      comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, rem.",
    },
    {
      id: 3,
      rating: 5,
      comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, rem.",
    },
  ]);
  const [isEdit, setIsEdit] = useState(false);
  const [edittedComment, setEditComment] = useState({
    id: null,
    rating: 0,
    comment: "",
  });

  const handleAdd = () => {
    if (!newComment.rating || !newComment.comment) {
      toast.error("Please fill the rating and comment");
      return;
    }
    const newId = comments.length + 1;
    setComments([
      ...comments,
      {
        id: newId,
        rating: newComment.rating,
        comment: newComment.comment,
      },
    ]);
    setNewComment({ rating: 0, comment: "" });
  };

  const handleSave = () => {
    const updateComment = comments.map((comment) => (comment.id === edittedComment.id ? edittedComment : comment));
    setComments(updateComment);
    setEditComment({ id: null, rating: 0, comment: "" });
    setIsEdit(false);
  };

  const handleDelete = (id) => {
    const updateComment = comments.filter((comment) => comment.id !== id);
    setComments(updateComment);
  };

  return (
    <div className="mx-5 my-5 md:container md:mx-auto">
      <ToastContainer />
      <h1 className="text-2xl font-bold my-5">How would you describe our website?</h1>
      <div className="shadow-md rounded">
        <div className="flex justify-start items-center mt-3 mx-3">
          <Rating
            name="rating"
            initialRating={newComment.rating}
            emptySymbol={"far fa-star text-2xl text-yellow-300"}
            fullSymbol={"fas fa-star text-2xl text-yellow-300"}
            onChange={(rate) => setNewComment({ ...newComment, rating: rate })}
          />
        </div>
        <hr className="my-3" />
        <div className="mx-3 mb-3">
          <textarea
            name="comment"
            type="text"
            placeholder="Your Comment"
            value={newComment.comment}
            onChange={(e) => {
              setNewComment({ ...newComment, comment: e.target.value });
            }}
            className="border-none p-2 rounded-md w-full h-[8rem] focus:outline-none focus:border-transparent focus:ring-transparent"
          ></textarea>
        </div>
        <div className="flex justify-end pb-3 mx-3">
          <button className="bg-green-500 text-white py-2 px-4 rounded-md" onClick={handleAdd}>
            Send
          </button>
        </div>
      </div>
      {comments.map((comment) => (
        <div className="bg-white rounded-lg shadow-md p-4 my-3" key={comment.id}>
          <div className="flex items-center w-full">
            <img src="https://i.pravatar.cc/150" alt="avatar" className="w-12 h-12 rounded-full mr-4" />
            <div className="flex-grow">
              {isEdit && edittedComment.id === comment.id ? (
                <div className="flex justify-between items-center w-full mb-2">
                  <div>
                    <span className="font-bold text-lg mr-2">Annonymus</span>
                    <Rating initialRating={edittedComment.rating} emptySymbol={"far fa-star text-yellow-300"} fullSymbol={"fas fa-star text-yellow-300"} onChange={(rate) => setEditComment({ ...edittedComment, rating: rate })} />
                  </div>
                  <div className="flex gap-3">
                    <button className="bg-green-500 text-white py-2 px-4 rounded-md" onClick={handleSave}>
                      Save
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex justify-between items-center w-full mb-2">
                  <div>
                    <span className="font-bold text-lg mr-2">Annonymus</span>
                    <Rating readonly initialRating={comment.rating} emptySymbol={"far fa-star text-yellow-300"} fullSymbol={"fas fa-star text-yellow-300"} />
                  </div>
                  <div className="flex gap-3">
                    <FaTrash className="text-red-600 cursor-pointer" onClick={() => handleDelete(comment.id)} />
                    <FaEdit
                      className="text-yellow-600 cursor-pointer"
                      onClick={() => {
                        setEditComment(comment);
                        setIsEdit(true);
                      }}
                    />
                  </div>
                </div>
              )}
              <p className="text-gray-700">
                {isEdit && edittedComment.id === comment.id ? (
                  <textarea
                    name="edittedComment"
                    type="text"
                    placeholder="Your Comment"
                    value={edittedComment.comment}
                    onChange={(e) => {
                      setEditComment({
                        ...edittedComment,
                        comment: e.target.value,
                      });
                    }}
                    className="border p-2 rounded-md w-full h-[8rem] focus:outline-none focus:border-green-500 focus:ring-transparent"
                  ></textarea>
                ) : (
                  comment.comment
                )}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Ratings;
