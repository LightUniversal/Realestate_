import { FaPhone, FaEnvelope } from "react-icons/fa";
import  imgOne from "../assets/imgs/modern-business-building-with-glass-wall-from-empty-floor.jpg"
import videoOne from "../assets/video.mp4"

const Main = () => {

    return (
        <>
            <div className="home" >
            <div className="home-image" >
                <div className="home-text rounded-xl" >
                    <h1>investing in your one home at a time</h1>
                    <p className=" bg-slate-50  py-20 text-white rounded-lg" style={{background:"rgba(0,0,0,0.4)"}}>Looking for the best platform, Mustafa Real Easte your gateway to strategic home investments shaping a prosperous tomorrow in the real estate landscape.</p>
                    <a href="#" className=" bg-black text-white">Call us Today</a>
                </div>
            </div>

            <div className="home-bottom">
                <div className="container">
                    <div className="box">
                        <h5>location</h5>
                        <p className=" bg-slate-50 p-2 font-medium shadow-sm rounded-lg">Ilorin Estate</p>
                    </div>
                    <div className="box">
                        <h5>property type</h5>
                        <p className=" bg-slate-50 p-2 font-medium shadow-sm rounded-lg">Land</p>
                    </div>
                    <div className="box">
                        <h5>budget</h5>
                        <p className=" bg-slate-50 p-2 font-medium shadow-sm rounded-lg">Prices from ₦400,000 up</p>
                    </div>
                    <div className="box flex gap-2 ">
                        <input type="search" className=" rounded-md border outline-none p-3" name="property" id="property" placeholder="search property" />
                        <a href="#">search property</a>
                    </div>
                </div>
            </div>
        </div>

        <div className="con-section ">
            <div className="contact-us">
                <div className="text">
                    <h2>
                        navigation your real estate journey
                    </h2>
                    <p style={{textTransform:"none"}}>
                    Welcome to your ultimate guide to navigating the real estate landscape, where we provide you with the tools and insights needed to make informed decisions and achieve your property goals. Whether you're buying, selling, renting, or investing, we are here to support you every step of the way.
                    </p>
                    
                    <a href="tel:+2347033833383" className="items-center gap-3">Call Us</a>
                </div>
    
                <div className="box cursor-pointer">
                    <div className="image">
                        <img src={imgOne} alt="" / >
                    </div>
    
                    <div className="s-box">
                        <h3>
                            10+
                        </h3>
                        <p>Property Available</p>
                    </div>
                </div>
            </div>
        </div>


        <div className="convenience">
            <div className="provided">
                <div className="box">
                    <h2>20+</h2>
                    <p>happy customers with our services</p>
                </div>
                <div className="box">
                    <h2>20+</h2>
                    <p>the best property Will provide</p>
                </div>
                <div className="box">
                    <h2>10+</h2>
                    <p>awesome companies believe in us</p>
                </div>
            </div>
            <div className="content">
                <div className="box">
                    <h2>where comfort meets convenience</h2>
                </div>

                <div className="box">
                    <p>Welcome to a lifestyle where every detail is designed with your comfort and convenience in mind. Our community offers an exceptional living experience, seamlessly integrating modern amenities with a serene and welcoming atmosphere.</p>
                </div>
            </div>

            {/* <div className="video">
                <video controls  autoplay loop src={videoOne}></video>
            </div> */}
        </div>

        <div className="property">
            <div className="prop-h">
                <h2>our popular property</h2>
                <p>
                Discover the epitome of modern living in our most sought-after property, where comfort seamlessly blends with convenience to create a nice living experience. This residence stands out as a beacon of luxury and practicality, offering everything you need to live your best life.
                </p>
            </div>

            <div className="de-box">
                <div className="box">
                    <div className="image">
                        <img src={imgOne} alt="" />
                    </div>
                    <div className="price-name">
                        <h4>₦600,383,00</h4>
                        <p className=" font-bold">Land One</p>
                    </div>
                    <div className="location-detail">
                        
                        <div className="detail">
                            Detailed Description for this particular land
                        </div>
                    </div>

                </div>
                <div className="box">
                    <div className="image">
                        <img src={imgOne} alt="" />
                    </div>
                    <div className="price-name">
                        <h4>₦600,383,00</h4>
                        <p className=" font-bold">Land One</p>
                    </div>
                    <div className="location-detail">
                        
                        <div className="detail">
                            Detailed Description for this particular land
                        </div>
                    </div>

                </div>
                <div className="box">
                    <div className="image">
                        <img src={imgOne} alt="" />
                    </div>
                    <div className="price-name">
                        <h4>₦600,383,00</h4>
                        <p className=" font-bold">Land One</p>
                    </div>
                    <div className="location-detail">
                        
                        <div className="detail">
                            Detailed Description for this particular land
                        </div>
                    </div>

                </div>
                
                
                
                
                
            </div>
            <div className="explore">
                <a href="#">explore all property</a>
            </div>
        </div>

        
        </>
    )
};

export default Main