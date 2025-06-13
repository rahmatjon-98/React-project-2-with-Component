import "./card2.css";
const Card2 = (props2) => {
  return (
    <div className="card2">
      <img className="imgcard2" src={props2.img} alt="" />
      <p className="pcard2">{props2.name}</p>
      <div className="div">
        <p className="sena">{props2.nowsena}</p>
        <p className="lastsena">{props2.lastsena}</p>

        <button className="arrowUpLeft2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="size-4"
          >
            <path
              fillRule="evenodd"
              d="M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Card2;
