import {Swiper, SwiperSlide} from 'swiper/react';
import {EffectFade, Pagination, Autoplay} from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css';
import book1 from '../img/books/book1.jpg';
import book2 from '../img/books/book2.jpg';
import book3 from '../img/books/book3.jpg';
import book4 from '../img/books/book4.jpg';
import book5 from '../img/books/book5.jpg';
import book6 from '../img/books/book6.jpg';

function Slider() {
    return (
        <>
            <Swiper
                modules={[Pagination, EffectFade, Autoplay]}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                effect={'fade'}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{clickable: true}}
            >
                <SwiperSlide>
                    <div className="page first">
                        <div className="container flex main">
                            <div><img src={book1} alt=""/></div>
                            <div className="text_container">
                                <h2>8월에 만나요</h2>
                                <p>글 : 가브리엘 가르시아 마르케스<br/>옮김 : 송영선</p>
                                <p className="info">노벨 문학상 수상 작가, 전 세계에서 사랑받는 작가 마르케스의 유고 소설
                                    <br/>사후 10주기 2024년 3월 6일 전 세계 동시 출간</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="page second">
                        <div className="container flex main">
                            <div><img src={book2} alt=""/></div>
                            <div className="text_container">
                                <h2>[리커버] 무의미의 축제</h2>
                                <p>글 : 밀란 쿤데라</p>
                                <p className="info">『참을 수 없는 존재의 가벼움』으로 전 세계 독자를 사로잡은<br/>밀란 쿤데라의 마지막 소설</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="page third">
                        <div className="container flex main">
                            <div><img src={book3} alt=""/></div>
                            <div className="text_container">
                                <h2>한편 14호 쉼</h2>
                                <p>글 : 하미나, 김진영, 소영광, 연어, 채효정, 이정화, 정기현</p>
                                <p className="info"></p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="page fourth">
                        <div className="container flex main">
                            <div><img src={book6} alt=""/></div>
                            <div className="text_container">
                                <h2>보이드 씨의 기묘한 저택</h2>
                                <p>글 : 하지은</p>
                                <p className="info">한국 2세대 환상 문학의 마에스트로 하지은의<br/>시대를 풍미한 걸작 4권 완전판 복간!</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="page fifth">
                        <div className="container flex main">
                            <div><img src={book5} alt=""/></div>
                            <div className="text_container">
                                <h2>나의 미국 인문 기행</h2>
                                <p>글 : 서경식<br/>옮김 : 최재혁</p>
                                <p className="info">“그것이 나의 끝나지 않는 ‘인문 기행’의 한 페이지다.”<br/>우리시대의 경계인 서경식의 유작, 분열과 냉소의 미국에서 도덕의 거처를 묻다</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default Slider;