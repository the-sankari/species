/* eslint-disable react/prop-types */
// Define the Card component, which displays an image, name, and like button
// for a given item
export default function Card({ name, likes, addLike, removeCard, removeLike }) {
  // Return the JSX content of the Card component
  return (
    <div className="card">
      {/* Button to remove the card */}
      <button
        onClick={removeCard}
        type="button"
        className="btn-close position-absolute top-0 end-0"
        aria-label="Close"
      ></button>
      {/* Image for the card */}
      <img
        src={`https://source.unsplash.com/400x400?${name}`}
        alt="..." 
        className="card-img-top"
      />
      {/* Card body containing the name */}
      <div className="card-body">
        <h4 className="card-title"> {name} </h4>
      </div>
      {/* Card footer containing like buttons and like count */}
      <div className="card-footer">
        <div className="container">
          <div className="row justify-content-center align-items-end g-2">
            <div className="col">
              {/* Button to add a like */}
              <button type="button" className="heart-btn">
                <span className="material-symbols-outlined" onClick={addLike}>
                  heart_plus
                </span>
              </button>
            </div>
            <div className="col">
              <span className="material-symbols-outlined">
                {/* Display the number of likes */}
                <small className="likes">{likes}</small>favorite
              </span>
            </div>
            <div className="col">
              {/* Button to remove a like */}
              <button type="button" className="heart-btn">
                <span
                  className="material-symbols-outlined "
                  onClick={removeLike}
                >
                  heart_minus
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
