import './main.css'
import bar4 from '../../assets/images/shutterstock_42474535.jpg'
import bar5 from '../../assets/images/Data-Research-Icon.svg'
import bar6 from '../../assets/images/Geography-Icon.svg'
import bar7 from '../../assets/images/Programs-Icon.svg'
import bar8 from '../../assets/images/Legislative-Icon.svg'
export default function Main() {
    return (
        <div className='main' >
            <div className='main1'>
                <div className='content'>
                    <h1>Providing insightful research, analysis, and resources to facilitate informed
                        policy decisions and administration of services</h1>

                </div>
                <div className='search-bar'>

                    <div className='form'>
                        <input type='text' placeholder='Search..' name='search'></input>
                        <button type='submit'>Search</button>
                    </div>


                </div>

            </div>

            <div className='card'>
                <div className='card1'>

                    <img src={bar5} width="120px" height="120px"></img>
                    <h1>Data-Research</h1>
                </div>

                <div className='card1'>

                    <img src={bar6} width="120px" height="120px"  ></img>
                    <h1>Geography</h1>
                </div>
                <div className='card1'>

                    <img src={bar7} width="120px" height="120px"></img>
                    <h1>Programs</h1>
                </div>

                <div className='card1'>

                    <img src={bar8} width="120px" height="120px"></img>
                    <h1>Legislative</h1>
                </div>
            </div>
        </div>





    )
}