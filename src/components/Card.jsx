/* eslint-disable react/prop-types */
export default function Card({ name, likes, addLike, removeCard, removeLike }) {
  return (
    <div className="card">
      <button
        onClick={removeCard}
        type="button"
        className="btn-close position-absolute top-0 end-0"
        aria-label="Close"
      ></button>
      {/* <div className="card-header">Species</div> */}
      <img
        src={`https://source.unsplash.com/400x400?${name}`}
        alt="..."
        className="card-img-top"
      />

      <div className="card-body">
        <h4 className="card-title"> {name} </h4>
        {/* <p className="card-text">Text</p> */}
      </div>
      <div className="card-footer">
        <div className="container">
          <div className="row justify-content-center align-items-end g-2">
            <div className="col">
              <button type="button" className="heart-btn">
                <span className="material-symbols-outlined" onClick={addLike}>
                  heart_plus
                </span>
              </button>
            </div>
            <div className="col">
              <span className="material-symbols-outlined">
                <small className="likes">{likes}</small>favorite
              </span>
            </div>
            <div className="col">
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
