import pic1 from '../../assets/images/map.svg'
import pic3 from '../../assets/images/contact.svg'
import pic2 from '../../assets/images/clock.svg'
import './update.css'
export default function Update() {
    return (
        <div className='update'>
            <div className='u-left'>
                <div className='u-h1'>
                    <h1>Recent Updates</h1>
                    <div />
                </div>
                <div className='u-h2'>

                    <h1 className='link-title'><a href="">Local Government Finance</a></h1>
                    <p className='u-p'>Vestibulum retrum quam vitae fringila tinciduant.Suspendance nec tortor urna. ut laoreet sodales</p>
                    <div className='pb'> <p>Published:jan 2,2020</p>
                        <span>Updated</span>
                    </div>
                    <h1 className='link-title'><a href="">Transporation Network Carrier Maps</a></h1>
                    <div className='pb'><p>Published:jan 2,2020</p>
                        <span>New</span></div>

                    <h1 className='link-title'><a href="">BEA long-Range General Fund Revenue Plan for FY 2019-20 to FY 2022-23 </a></h1>
                    <p className='u-p'>Vestibulum retrum quam vitae fringila tinciduant.Suspendance nec tortor urna. ut laoreet sodales</p>
                    <div className='pb'><p>Published: Dec 16.2019</p>
                        <span>Updated</span></div>


                    <h1 className='link-title'><a href="">Budget Development</a></h1>
                    <div className='pb'> <p>Published: Dec 16,2019</p>
                        <span>New</span></div>
                    <h1 className='link-title'><a href="">November 2019 General Fund Revenue Digest </a></h1>
                    <div className='pb'>    <p>Published: Dec 13,2019</p>
                        <span>New</span></div>
                    <div className='l-btn'>

                    </div>

                    <button className='btn1'>VIEW MORE</button>




                </div>

            </div>
            <div className='u-right'>

                <div className='r-h1'>
                    <h1>Calendar Of Events</h1>
                    <div />
                </div>



                <div className='right1'>

                    <div className='txt1'><h3>Nov  22</h3></div>

                    <div className='r1'>
                        <h1 className='r1-h1'> Board of Economic Advisors Meeting</h1>
                        <span>
                            <img src={pic1} width="20px" height="20px"></img>
                            <p> Room 417,Bowers Conference Room, Rembert Dennis Building</p>
                        </span>
                        <span><img src={pic2} width="20px" height="20px"></img>
                            <p>  1:30 pm</p>
                        </span>
                        <span><img src={pic3} width="20px" height="20px"></img>
                            <p>  (803) 734-2265</p>
                        </span>

                    </div>

                </div>

                <div className='right1'>

                    <div className='txt1'><h3>Nov  22</h3></div>


                    <div className='r1'>
                        <h1 className='r1-h1'> Board of Economic Advisors Meeting</h1>
                        <span>
                            <img src={pic1} width="20px" height="20px"></img>
                            <p> Room 417,Bowers Conference Room, Rembert Dennis Building</p>
                        </span>
                        <span><img src={pic2} width="20px" height="20px"></img>
                            <p>  1:30 pm</p></span>
                        <span><img src={pic3} width="20px" height="20px"></img>
                            <p> (803) 734-2265</p></span>
                    </div>
                </div>

                <div className='right1'>
                    <div className='txt1'><h3>Nov  22</h3></div>


                    <div className='r1'>
                        <h1 className='r1-h1'> Board of Economic Advisors Meeting</h1>
                        <span>
                            <img src={pic1} width="20px" height="20px"></img>
                            <p> Room 417,Bowers Conference Room, Rembert Dennis Building</p>
                        </span>
                        <span><img src={pic2} width="20px" height="20px"></img>
                            <p>  1:30 pm</p></span>
                        <span><img src={pic3} width="20px" height="20px"></img>
                            <p> (803) 734-2265</p></span>

                    </div>
                </div>

                <div className='right1'>
                    <div className='txt1'><h3>Nov  22</h3></div>


                    <div className='r1'>
                        <h1 className='r1-h1'> Board of Economic Advisors Meeting</h1>
                        <span>
                            <img src={pic1} width="20px" height="20px"></img>
                            <p> Room 417,Bowers Conference Room, Rembert Dennis Building</p>
                        </span>
                        <span><img src={pic2} width="20px" height="20px"></img>
                            <p>  1:30 pm</p></span>
                        <span><img src={pic3} width="20px" height="20px"></img>
                            <p> (803) 734-2265</p></span>
                    </div>
                </div>
                <button className='btn2'>VIEW ALL EVENTS</button>

            </div>





        </div>


    )

}