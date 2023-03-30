import React,{ useState} from 'react';
import { AiOutlineGithub } from "react-icons/ai";
import { GrFacebook } from "react-icons/gr";
import { GrLinkedin } from "react-icons/gr";
import { GrMail } from "react-icons/gr";

const Myfooter = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(`The email you entered was: ${email}`);
    }
    return (
        <div>
            {/* Footer */}
            <div className='footer3'>
                <div className='ft1'>
                    <form onSubmit={handleSubmit} className='myform'>
                        <label className='myform'>Join our Email List<br></br>
                            <input id='form1'
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </label>
                        <button className='submit1'>subscribe</button>
                        <h5>By clicking "SUBSCRIBE" I agree to receive news, promotions, information, and offers from Extreme Cafe.</h5>

                    </form>

                </div>
                <div className='ft2'>
                    <AiOutlineGithub className='icon' />
                    <GrFacebook className='icon' />
                    <GrLinkedin className='icon' />
                    <GrMail className='icon' />

                </div>


            </div>
            <div className='footer'>
                <div className='sec3'>
                    <h4>LOCATIONS</h4>
                    <h5>KAMPALA<br></br>
                        Kira<br></br>
                        Mukono<br></br>
                        Ntinda<br></br>
                        Lugogo<br></br>
                        Nakawa<br></br>
                        Bombo road<br></br>


                    </h5>


                </div>
                <div className='sec3'>
                    <h4>CONTACT US</h4>
                    <h5>info@extremecafe.co.ug
                        +256 759 709120<br></br>
                        +256 755 607399<br></br>
                        +256 706 916158<br></br>

                    </h5>

                </div>
                <div className='sec3'>
                    <h4>OUR MENU</h4>
                    <h5>BREAKFAST<br></br>
                        DRINKS<br></br>
                        MAINS<br></br>
                        DESSERTS<br></br>

                    </h5>

                </div>


            </div>
            <div className='footer2'>
                <div className='ft1'>
                    <h5>We're commited to great food, great coffee, great service, an experience that will make your time with us fabulous.</h5>
                    <h5>Privacy Policy | Terms of Use | Contact Us | Partners | Careers| Blog | Feedback<br></br>
                        &copy; 2023 Extreme Cafe. All Rights Reserved
                    </h5>

                </div>

            </div>
            {/* footer */}
        </div>
    )
}

export default Myfooter;