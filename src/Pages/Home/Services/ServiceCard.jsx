import { Link } from "react-router-dom";


const ServiceCard = ({ service }) => {
    const { title, img, price, _id } = service
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="" className="rounded-xl w-[314px] h-[208px]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    <p>$ {price}</p>
                    <div className="card-actions">
                        <Link to={`/checkout/${_id}`}><button className="btn btn-primary">Check Out</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;