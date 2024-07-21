import {Link} from 'react-router-dom';

function Nav() {
    return (
        <>
            <nav>
                <button className="m_hamburger_btn"><i className="fa-solid fa-bars"></i></button>
                <Link to="/minumsa"><h1 className="logo">MINUMSA</h1></Link>
                <ul className="menu">
                    <div className="menu_bg"></div>
                    <li className="under">도서
                        <ul className="depth2 first">
                            <li>전체 도서</li>
                            <li>베스트셀러</li>
                            <li>카테고리</li>
                            <li>전자책 목록</li>
                            <li>독자 리뷰</li>
                            <li>동네서점 Event & ORDER</li>
                            <li>추천 북로그 & 북캐스트</li>
                        </ul>
                    </li>
                    <li>문학상
                        <ul className="depth2">
                            <li>오늘의 작가상</li>
                            <li>김수영 문학상</li>
                        </ul>
                    </li>
                    <li>북클럽,릿터 한편
                        <ul className="depth2">
                            <li>민음사 멤버십 안내</li>
                            <li>민음사 멤버십 FAQ</li>
                            <li>민음북클럽</li>
                            <li>릿터 정기구독</li>
                            <li>한편 정기구독 안내</li>
                            <li>패밀리데이 안내</li>
                            <li>민음북샵</li>
                            <li>민음커뮤니티</li>
                            <li>e-스탬프 이벤트</li>
                            <li>민음사x동네서점</li>
                            <li>독서모임 캘린더</li>
                        </ul>
                    </li>
                    <li>커뮤니티
                        <ul className="depth2">
                            <li>소식&공지</li>
                            <li>행사 스케치</li>
                            <li>자료실</li>
                            <li>민음커뮤니티</li>
                            <li>동영상 자료</li>
                            <li>책의 사생활</li>
                            <li>연재</li>
                            <li>보도자료</li>
                            <li>원고투고</li>
                            <li>2차 저작권 가이드</li>
                            <li>1:1 문의</li>
                        </ul>
                    </li>
                    <li>그룹소개
                        <ul className="depth2">
                            <li>브랜드소개</li>
                            <li>인사말</li>
                            <li>역사</li>
                            <li>채용정보</li>
                            <li>거래처 안내</li>
                            <li>찾아오시는길</li>
                        </ul>
                    </li>
                </ul>
                <div className="nav_btn_wrap">
                    <Link to="/login"><i className="fa-regular fa-user"></i></Link>
                </div>
            </nav>
        </>
    )
}

export default Nav;