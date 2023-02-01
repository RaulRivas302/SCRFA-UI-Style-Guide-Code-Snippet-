import './footer.css'
import bar9 from '../../assets/images/Group 262.png'
export default function Footer() {
    return (
        <div className='Footer'>
            <div className='f-left'>
                <div className='left-h1'>
                    <h1>South Carolina</h1>
                    <h1> Revenue and Fiscal Affairs Office</h1>

                </div>
                <div className='left-img'>
                    <img src={bar9} width='130px' height='130px'></img>

                </div>

            </div>
            <div className='f-middle'>
                <div className='f-middle-links'>
                    <span>
                        <a href="">Privacy Statement</a>
                        <a href="">FOIA</a>
                        <a href="">Disclosures and Reporting</a>
                        <a href="">Report Fraud</a>
                        <a href="">Accessibility</a>
                        <a href="">Employment Opportunities</a>
                        <a href="">Contact Us</a>
                    </span>
                </div>


            </div>
            <div className='f-right'>
                <span>

                    <h1>MAIN OFFICE</h1>
                    <p>1000 Assembly St, Rembert Dennis Building, Suite 421 Columbia, SC 29201</p>
                    <h1>GEODETIC SURVEY SECTION </h1>
                    <p>5 Geology Rd Columbia, SC 29212</p>
                    <h1>HEALTH AND DEMOGRAPHICS DIVISION</h1>
                    <p>1000 Assembly St, Rembert Dennis Building, Suite 240 Columbia, SC 29201</p>


                </span>

            </div>

        </div>




    )



} 
