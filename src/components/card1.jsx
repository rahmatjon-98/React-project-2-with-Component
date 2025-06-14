import "./card1.css";

let disFlex = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

const Card1 = (props) => {
  return (
    <div className="card1">
      <img className="img" src={props.img} alt="" />
      <p className="pName">{props.name}</p>
      <p className="pSena" style={disFlex}>
        {props.sena}
        <button className="arrowUpLeft">
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
      </p>
    </div>
  );
};

export default Card1;
