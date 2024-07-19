import icon1 from '../img/icon/bookstore.png';
import icon2 from '../img/icon/network.png';
import icon3 from '../img/icon/shopping-basket.png';
import icon4 from '../img/icon/book.png';
import icon5 from '../img/icon/youtube.png';
function Icon(){
    return(
        <>
        <div className="container flex icon">
            <div className="card">
                <div className="card_wrap">
                    <img src={icon1} alt=""/>
                    <p>민음<br/>북샵</p>
                </div>
            </div>
            <div className="card">
                <div className="card_wrap">
                    <img src={icon2} alt=""/>
                    <p>민음<br/>커뮤니티</p>
                </div>
            </div>
            <div className="card">
                <div className="card_wrap">
                    <img src={icon3} alt=""/>
                    <p>동네서점<br/>EVENT & ORDER</p>
                </div>
            </div>
            <div className="card">
                <div className="card_wrap">
                    <img src={icon4} alt=""/>
                    <p>세계문학전집<br/>공동구매</p>
                </div>
            </div>
            <div className="card">
                <div className="card_wrap">
                    <img src={icon5} alt=""/>
                    <p>민음사TV<br/>유튜브</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Icon;