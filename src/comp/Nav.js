import React, {useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

function Nav() {

    // const [isMenuOpen, setIsMenuOpen] = useState(false);
    // const [openSubMenu, setOpenSubMenu] = useState(null);
    //
    // const html = document.querySelector('html');
    //
    // const toggleMenu = () => {
    //     setIsMenuOpen(!isMenuOpen);
    //     /* 모바일메뉴 제외 스크롤 금지 */
    //     html.classList.toggle('hidden');
    // };
    //
    // const toggleSubMenu = (menuName) => {
    //     setOpenSubMenu(prevState => (prevState === menuName ? null : menuName));
    // };

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openSubMenu, setOpenSubMenu] = useState(null);

    useEffect(() => {
        const html = document.querySelector('html');
        if (isMenuOpen) {
            html.classList.add('hidden');
        } else {
            html.classList.remove('hidden');
        }
        return () => {
            html.classList.remove('hidden');
        };
    }, [isMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleSubMenu = (menuName) => {
        setOpenSubMenu(prevState => (prevState === menuName ? null : menuName));
    };

    const renderSubMenu = (menuName, items) => (
        <ul className={`depth2 ${openSubMenu === menuName ? 'open' : ''}`}>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );

    const menuItems = [
        {
            name: '도서',
            key: 'books',
            items: ['전체 도서', '베스트셀러', '카테고리', '전자책 목록', '독자 리뷰', '동네서점 Event & ORDER', '추천 북로그 & 북캐스트']
        },
        {
            name: '문학상',
            key: 'awards',
            items: ['오늘의 작가상', '김수영 문학상']
        },
        {
            name: '북클럽,릿터 한편',
            key: 'bookClub',
            items: ['민음사 멤버십 안내', '민음사 멤버십 FAQ', '민음북클럽', '릿터 정기구독', '한편 정기구독 안내', '패밀리데이 안내', '민음북샵', '민음커뮤니티', 'e-스탬프 이벤트', '민음사x동네서점', '독서모임 캘린더']
        },
        {
            name: '커뮤니티',
            key: 'community',
            items: ['소식&공지', '행사 스케치', '자료실', '민음커뮤니티', '동영상 자료', '책의 사생활', '연재', '보도자료', '원고투고', '2차 저작권 가이드', '1:1 문의']
        },
        {
            name: '그룹소개',
            key: 'groupIntro',
            items: ['브랜드소개', '인사말', '역사', '채용정보', '거래처 안내', '찾아오시는길']
        }
    ];

    return (
        <>
            <nav>
                <button className="m_hamburger_btn" onClick={toggleMenu}>
                    <i className="fa-solid fa-bars"></i>
                </button>
                <Link to="/minumsa"><h1 className="logo">MINUMSA</h1></Link>
                <ul className="menu">
                    <div className="menu_bg"></div>
                    {menuItems.map(menu => (
                        <li key={menu.key} className="under" onClick={() => toggleSubMenu(menu.key)}>
                            {menu.name}
                            {openSubMenu === menu.key ? <i className="fa-solid fa-minus"></i> : <i className="fa-solid fa-plus"></i>}
                            {renderSubMenu(menu.key, menu.items)}
                        </li>
                    ))}
                </ul>
                <div className={`mob_menu ${isMenuOpen ? 'open' : ''}`}>
                    <div className="mob_wrap">
                        <div className="mob_header">
                            <button onClick={toggleMenu}><i className="fa-solid fa-x"></i></button>
                            <Link to="/minumsa"><h1 className="logo">MINUMSA</h1></Link>
                            <Link to="/minumsa/login" onClick={toggleMenu}>로그인</Link>
                        </div>
                        <ul className="menu">
                            {menuItems.map(menu => (
                                <li key={menu.key} className="under" onClick={() => toggleSubMenu(menu.key)}>
                                    {menu.name}
                                    {openSubMenu === menu.key ? <i className="fa-solid fa-minus"></i> : <i className="fa-solid fa-plus"></i>}
                                    {renderSubMenu(menu.key, menu.items)}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="nav_btn_wrap">
                    <Link to="/minumsa/login"><i className="fa-regular fa-user"></i></Link>
                </div>
            </nav>
            {/*<nav>*/}
            {/*    <button className="m_hamburger_btn" onClick={toggleMenu}>*/}
            {/*        <i className="fa-solid fa-bars"></i>*/}
            {/*    </button>*/}
            {/*    <Link to="/minumsa"><h1 className="logo">MINUMSA</h1></Link>*/}
            {/*    <ul className="menu">*/}
            {/*        <div className="menu_bg"></div>*/}
            {/*        <li className="under">도서*/}
            {/*            <ul className="depth2 first">*/}
            {/*                <li>전체 도서</li>*/}
            {/*                <li>베스트셀러</li>*/}
            {/*                <li>카테고리</li>*/}
            {/*                <li>전자책 목록</li>*/}
            {/*                <li>독자 리뷰</li>*/}
            {/*                <li>동네서점 Event & ORDER</li>*/}
            {/*                <li>추천 북로그 & 북캐스트</li>*/}
            {/*            </ul>*/}
            {/*        </li>*/}
            {/*        <li>문학상*/}
            {/*            <ul className="depth2">*/}
            {/*                <li>오늘의 작가상</li>*/}
            {/*                <li>김수영 문학상</li>*/}
            {/*            </ul>*/}
            {/*        </li>*/}
            {/*        <li>북클럽,릿터 한편*/}
            {/*            <ul className="depth2">*/}
            {/*                <li>민음사 멤버십 안내</li>*/}
            {/*                <li>민음사 멤버십 FAQ</li>*/}
            {/*                <li>민음북클럽</li>*/}
            {/*                <li>릿터 정기구독</li>*/}
            {/*                <li>한편 정기구독 안내</li>*/}
            {/*                <li>패밀리데이 안내</li>*/}
            {/*                <li>민음북샵</li>*/}
            {/*                <li>민음커뮤니티</li>*/}
            {/*                <li>e-스탬프 이벤트</li>*/}
            {/*                <li>민음사x동네서점</li>*/}
            {/*                <li>독서모임 캘린더</li>*/}
            {/*            </ul>*/}
            {/*        </li>*/}
            {/*        <li>커뮤니티*/}
            {/*            <ul className="depth2">*/}
            {/*                <li>소식&공지</li>*/}
            {/*                <li>행사 스케치</li>*/}
            {/*                <li>자료실</li>*/}
            {/*                <li>민음커뮤니티</li>*/}
            {/*                <li>동영상 자료</li>*/}
            {/*                <li>책의 사생활</li>*/}
            {/*                <li>연재</li>*/}
            {/*                <li>보도자료</li>*/}
            {/*                <li>원고투고</li>*/}
            {/*                <li>2차 저작권 가이드</li>*/}
            {/*                <li>1:1 문의</li>*/}
            {/*            </ul>*/}
            {/*        </li>*/}
            {/*        <li>그룹소개*/}
            {/*            <ul className="depth2">*/}
            {/*                <li>브랜드소개</li>*/}
            {/*                <li>인사말</li>*/}
            {/*                <li>역사</li>*/}
            {/*                <li>채용정보</li>*/}
            {/*                <li>거래처 안내</li>*/}
            {/*                <li>찾아오시는길</li>*/}
            {/*            </ul>*/}
            {/*        </li>*/}
            {/*    </ul>*/}
            {/*    <div className={`mob_menu ${isMenuOpen ? 'open' : ''}`}>*/}
            {/*        <div className="mob_wrap">*/}
            {/*            <div className="mob_header">*/}
            {/*                <button onClick={toggleMenu}><i className="fa-solid fa-x"></i></button>*/}
            {/*                <Link to="/minumsa"><h1 className="logo">MINUMSA</h1></Link>*/}
            {/*                <Link to="/minumsa/login" onClick={toggleMenu}>로그인</Link>*/}
            {/*            </div>*/}
            {/*            <ul className="menu">*/}
            {/*                <li className="under" onClick={() => toggleSubMenu('books')}>도서*/}
            {/*                    {openSubMenu === 'books' ? <i className="fa-solid fa-minus"></i> : <i className="fa-solid fa-plus"></i>}*/}
            {/*                    <ul className={`depth2 first ${openSubMenu === 'books' ? 'open' : ''}`}>*/}
            {/*                        <li>전체 도서</li>*/}
            {/*                        <li>베스트셀러</li>*/}
            {/*                        <li>카테고리</li>*/}
            {/*                        <li>전자책 목록</li>*/}
            {/*                        <li>독자 리뷰</li>*/}
            {/*                        <li>동네서점 Event & ORDER</li>*/}
            {/*                        <li>추천 북로그 & 북캐스트</li>*/}
            {/*                    </ul>*/}
            {/*                </li>*/}
            {/*                <li className="under" onClick={() => toggleSubMenu('awards')}>문학상*/}
            {/*                    {openSubMenu === 'awards' ? <i className="fa-solid fa-minus"></i> : <i className="fa-solid fa-plus"></i>}*/}
            {/*                    <ul className={`depth2 ${openSubMenu === 'awards' ? 'open' : ''}`}>*/}
            {/*                        <li>오늘의 작가상</li>*/}
            {/*                        <li>김수영 문학상</li>*/}
            {/*                    </ul>*/}
            {/*                </li>*/}
            {/*                <li className="under" onClick={() => toggleSubMenu('bookClub')}>북클럽,릿터 한편*/}
            {/*                    {openSubMenu === 'bookClub' ? <i className="fa-solid fa-minus"></i> : <i className="fa-solid fa-plus"></i>}*/}
            {/*                    <ul className={`depth2 ${openSubMenu === 'bookClub' ? 'open' : ''}`}>*/}
            {/*                        <li>민음사 멤버십 안내</li>*/}
            {/*                        <li>민음사 멤버십 FAQ</li>*/}
            {/*                        <li>민음북클럽</li>*/}
            {/*                        <li>릿터 정기구독</li>*/}
            {/*                        <li>한편 정기구독 안내</li>*/}
            {/*                        <li>패밀리데이 안내</li>*/}
            {/*                        <li>민음북샵</li>*/}
            {/*                        <li>민음커뮤니티</li>*/}
            {/*                        <li>e-스탬프 이벤트</li>*/}
            {/*                        <li>민음사x동네서점</li>*/}
            {/*                        <li>독서모임 캘린더</li>*/}
            {/*                    </ul>*/}
            {/*                </li>*/}
            {/*                <li className="under" onClick={() => toggleSubMenu('community')}>커뮤니티*/}
            {/*                    {openSubMenu === 'community' ? <i className="fa-solid fa-minus"></i> : <i className="fa-solid fa-plus"></i>}*/}
            {/*                    <ul className={`depth2 ${openSubMenu === 'community' ? 'open' : ''}`}>*/}
            {/*                        <li>소식&공지</li>*/}
            {/*                        <li>행사 스케치</li>*/}
            {/*                        <li>자료실</li>*/}
            {/*                        <li>민음커뮤니티</li>*/}
            {/*                        <li>동영상 자료</li>*/}
            {/*                        <li>책의 사생활</li>*/}
            {/*                        <li>연재</li>*/}
            {/*                        <li>보도자료</li>*/}
            {/*                        <li>원고투고</li>*/}
            {/*                        <li>2차 저작권 가이드</li>*/}
            {/*                        <li>1:1 문의</li>*/}
            {/*                    </ul>*/}
            {/*                </li>*/}
            {/*                <li className="under" onClick={() => toggleSubMenu('groupIntro')}>그룹소개*/}
            {/*                    {openSubMenu === 'groupIntro' ? <i className="fa-solid fa-minus"></i> : <i className="fa-solid fa-plus"></i>}*/}
            {/*                    <ul className={`depth2 ${openSubMenu === 'groupIntro' ? 'open' : ''}`}>*/}
            {/*                        <li>브랜드소개</li>*/}
            {/*                        <li>인사말</li>*/}
            {/*                        <li>역사</li>*/}
            {/*                        <li>채용정보</li>*/}
            {/*                        <li>거래처 안내</li>*/}
            {/*                        <li>찾아오시는길</li>*/}
            {/*                    </ul>*/}
            {/*                </li>*/}
            {/*            </ul>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className="nav_btn_wrap">*/}
            {/*        <Link to="/minumsa/login"><i className="fa-regular fa-user"></i></Link>*/}
            {/*    </div>*/}
            {/*</nav>*/}
        </>
    )
}

export default Nav;