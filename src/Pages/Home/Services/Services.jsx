import { useEffect, useState } from "react";


const Services = () => {
    const [services, setServices] = useState([])
    console.log(services)

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className="text-center">
                <h3 className="text-2xl font-bold text-orange-600">Service</h3>
                <h2 className="text-5xl my-5">Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>

            <div>

            </div>
        </div>
    );
};

export default Services;