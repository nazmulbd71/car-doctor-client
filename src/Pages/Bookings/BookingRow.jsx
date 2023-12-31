

const BookingRow = ({ booking, handleDelete, handleBookingConfirm }) => {
    console.log(booking)
    const { date, service, price, image, _id, status } = booking
    return (
        <tr className="my-10">
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-outline">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </label>
            </th>
            <td><img className="w-[150px] h-[150px] rounded-xl" src={image} alt="" /></td>
            <td>{service}</td>
            <td>{date}</td>
            <td>$ {price}</td>
            <th>
                {
                    status === "confirm" ? <span className="text-green-600 font-bold">Confirmed</span> : <button onClick={() => handleBookingConfirm(_id)} className="btn bg-orange-500 btn-ghost"> confirm</button>
                }

            </th>
        </tr>
    );
};

export default BookingRow;