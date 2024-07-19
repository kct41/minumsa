import img1 from '../img/blog/일력사진.jpg';
import img2 from '../img/blog/940x940_논픽션여름학교_01.png';
import img3 from '../img/blog/금빛종소리_입체띠지_(1).jpg';
function Blog(){
    return(
        <>
        <div className="container blog">
            <div className="title_wrap">
                <h2>블로그</h2>
                <span>더보기</span>
            </div>
            <div className="post_wrap">
                <div className="post">
                    <div className="img_box">
                        <img src={img3} alt=""/>
                    </div>
                    <div className="text_box">
                        <h4>고전은 영원한 여름방학! ― 『금빛 종소리』 편집 후기</h4>
                        <p>2024.07.19</p>
                    </div>
                </div>
                <div className="post">
                    <div className="img_box">
                        <img src={img1} alt=""/>
                    </div>
                    <div className="text_box">
                        <h4>[하루에 한 문장] 2024. 7. 18 ─ 『서경』</h4>
                        <p>2024.07.18</p>
                    </div>
                </div>
                <div className="post">
                    <div className="img_box">
                        <img src={img2} alt=""/>
                    </div>
                    <div className="text_box">
                        <h4>[논픽션 여름 학교] 여름 논픽션 독서모임 (『인간은 의례를 갈망한다』, 『나르시시즘의 고통』)</h4>
                        <p>2024.07.16</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Blog;