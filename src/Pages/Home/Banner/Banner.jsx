import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import img5 from '../../../assets/images/banner/5.jpg'
import img6 from '../../../assets/images/banner/6.jpg'

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-[600px] my-10">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img1} className="w-full rounded-xl" />
                    <div className='absolute flex items-center rounded-xl h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]'>
                        <div className='text-white pl-12 w-1/2 space-y-7'>
                            <h2 className='text-6xl'>Affordable Price For Car Servicing</h2>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div>
                                <button className="btn btn-error text-white mr-5">Discover More</button>
                                <button className="btn btn-outline btn-secondary">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end pb-4 left-5 right-5 bottom-0">
                        <a href="#slide6" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img2} className="w-full rounded-xl" />
                    <div className='absolute flex items-center rounded-xl h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]'>
                        <div className='text-white pl-12 w-1/2 space-y-7'>
                            <h2 className='text-6xl'>Affordable Price For Car Servicing</h2>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div>
                                <button className="btn btn-error text-white mr-5">Discover More</button>
                                <button className="btn btn-outline btn-secondary">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end pb-4 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img3} className="w-full rounded-xl" />
                    <div className='absolute rounded-xl flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]'>
                        <div className='text-white pl-12 w-1/2 space-y-7'>
                            <h2 className='text-6xl'>Affordable Price For Car Servicing</h2>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div>
                                <button className="btn btn-error text-white mr-5">Discover More</button>
                                <button className="btn btn-outline btn-secondary">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end pb-4 left-5 right-5 bottom-0">
                        <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={img4} className="w-full rounded-lg" />
                    <div className='absolute rounded-xl flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]'>
                        <div className='text-white pl-12 w-1/2 space-y-7'>
                            <h2 className='text-6xl'>Affordable Price For Car Servicing</h2>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div>
                                <button className="btn btn-error text-white mr-5">Discover More</button>
                                <button className="btn btn-outline btn-secondary">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end pb-4 left-5 right-5 bottom-0">
                        <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide5" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide5" className="carousel-item relative w-full">
                    <img src={img5} className="w-full rounded-xl" />
                    <div className='absolute rounded-xl flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]'>
                        <div className='text-white pl-12 w-1/2 space-y-7'>
                            <h2 className='text-6xl'>Affordable Price For Car Servicing</h2>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div>
                                <button className="btn btn-error text-white mr-5">Discover More</button>
                                <button className="btn btn-outline btn-secondary">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end pb-4 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide6" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide6" className="carousel-item relative w-full">
                    <img src={img6} className="w-full rounded-xl" />
                    <div className='absolute rounded-xl flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]'>
                        <div className='text-white pl-12 w-1/2 space-y-7'>
                            <h2 className='text-6xl'>Affordable Price For Car Servicing</h2>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div>
                                <button className="btn btn-error text-white mr-5">Discover More</button>
                                <button className="btn btn-outline btn-secondary">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end pb-4 left-5 right-5 bottom-0">
                        <a href="#slide5" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;