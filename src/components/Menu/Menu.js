import './menu.css'
export default function Menu() {
    return (
        <div className='Menu'>

            <div className='menu-bar'>
                <ul className='menu-list'><li>HOME</li>
                    <li>ABOUT US</li>
                    <li>EVENTS</li>
                    <li>BOARDS & COMMITTEES</li>
                </ul>
            </div>
            <div className='menu-content'>
                <div className='menu-data'>
                    <div className='data-h1'>
                        <h1>DATA & RESEARCH</h1>
                        <div />

                    </div>
                    <div className='data-item'>
                        <a href="">Economy</a>
                        <a href="">State Finance</a>
                        <a href="">Education</a>
                        <a href="">Healthcare</a>
                        <a href="">Local Government</a>
                        <a href="">Population And Demographics</a>
                        <a href="">State Register Calculation</a>
                        <a href="">Presentations</a>
                    </div>
                    <div className='data-h1'>
                        <h1>LEGISLATIVE FISCAL IMPACTS</h1>
                        <div /></div>
                    <div className='data-item'>
                        <a href="">Current General Assembly Sessions</a>
                        <a href="">Previous General Assembly Sessions</a>
                        <a href="">Forms</a>

                    </div>


                </div>
                <div className='menu-map'>

                    <div className='data-h1'>
                        <h1>GEOGRAPHY & MAPPING</h1>
                        <div />

                    </div>
                    <div className='data-item'>
                        <a href="">Transportation Carrier Network (Uber)</a>
                        <a href="">SC Real Time Network</a>
                        <a href="">SC State GIS</a>
                        <a href="">Maps</a>
                        <a href="">Interactive Mapping</a>
                        <a href="">Interactive Mapping</a>
                        <a href="">Statewide Aerial Imagery</a>

                    </div>



                </div>
                <div className='menu-service'>

                    <div className='data-h1'>
                        <h1>PROGRAMS & SERVICES</h1>
                        <div />

                    </div>
                    <div className='data-item'>
                        <a href="">Precinct Demographics</a>
                        <a href="">Redistricting</a>
                        <a href="">State 911 Program</a>
                        <a href="">Data Services and Online Solutions</a>
                        <a href="">Geodetic Survey</a>
                        <a href="">Fiscal</a>
                        <a href="">2020 Census</a>

                    </div>
                </div>
            </div>
        </div>
    )
}