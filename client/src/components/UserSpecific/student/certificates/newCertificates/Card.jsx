
const Card = ({title}) => {
  return (
    <div className="card p-4 m-2  d-flex align-items-center text-center">
        <h5 className="mb-4">{title}</h5>
        <button className="btn btn-secondary">Αίτηση</button>
    </div>
  )
}

export default Card