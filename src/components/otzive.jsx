import './otzive.css'

const Otzive = (props) => {
  return (
    <div className='otzive'>
        <img className='img' src={props.img} alt="" />

        <div className='divotv'>
            <p className='p1otv'>{props.name}</p>
            <img src={props.img2} alt="" />
            <p className='p2otv'>{props.des}</p>
        </div>
    </div>
  )
}

export default Otzive