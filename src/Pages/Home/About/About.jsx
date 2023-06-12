import img1 from '../../../assets/images/about_us/person.jpg'
import img2 from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 my-10 rounded-lg">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='lg-w-1/2 relative'>
                        <img src={img1} className="w-3/4 rounded-lg shadow-2xl" />
                        <img src={img2} alt="" className='w-1/2 absolute right-5 top-1/2 rounded-lg border-8 border-white' />
                    </div>

                    <div className='lg:w-1/2 p-4 space-y-5'>
                        <p>About Us</p>
                        <h1 className="text-4xl font-bold">We are qualified & of experience in this field</h1>
                        <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or random words which do not look even slightly believable. </p>

                        <p>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                        <button className="btn btn-primary my-4">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;