import { useLoaderData } from "react-router-dom";
import checkimg from '../../assets/images/checkout/checkout.png'
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const CheckOut = () => {
    const service = useLoaderData()
    const { title, _id, price, img } = service

    const { user } = useContext(AuthContext)

    const handleBookService = event => {
        event.preventDefault();
        const form = event.target
        const name = form.name.value
        const date = form.date.value
        const phone = form.phone.value
        const textarea = form.textarea.value
        const email = form.email.value

        const booking = {
            customerName: name,
            date,
            phone,
            textarea,
            service: title,
            service_id: _id,
            price: price,
            image: img,
            email
        }
        console.log(booking)

        fetch('http://localhost:5000/bookings', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Your order has been placed successfully',
                        showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                        }
                    })
                }
            })
    }


    return (
        <div>
            <div className="relative my-10">
                <img className="w-full" src={checkimg} alt="" />
                <div className="absolute bg-gradient-to-r left-28 rounded-lg from-[#151515] to-[rgba(21, 21, 21, 0)] top-1/2 text-white font-bold text-5xl">
                    <h1 className="">Check Out</h1>
                </div>
            </div>

            <form onSubmit={handleBookService}>
                <div className="card-body">
                    <div className="grid md:grid-cols-2 grid-cols-1">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control ml-5">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" name="date" placeholder="Pick a date" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered" />
                        </div>
                        <div className="form-control ml-5">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name="email" defaultValue={user?.email} className="input input-bordered" />
                        </div>
                    </div>
                    <div>
                        <textarea placeholder="Your Message" name="textarea" className="textarea textarea-bordered textarea-lg w-full mt-5" ></textarea>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Order Confirm</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CheckOut;