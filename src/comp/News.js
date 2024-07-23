function News(){
    return(
        <>
            <div className="container news">
                <h2>관련 소식 & 진행중인 이벤트</h2>
                <div className="news_wrap">
                    <div>
                        <span className="header event">EVENT</span>
                        <div>
                            <p>[논픽션 여름 학교] 여름 논픽션 독서모임 (인간은 의례를 갈망한다, 나르시시즘의 고통)</p>
                            <p>2024.7.10~7.30</p>
                        </div>
                    </div>
                    <div>
                        <span className="header event">EVENT</span>
                        <div>
                            <p>[논픽션 여름 학교] ‘스피노자의 형이상학’ 특강 (무료 초대)</p>
                            <p>2024.7.10~7.30</p>
                        </div>
                    </div>
                    <div>
                        <span className="header news">NEWS</span>
                        <div>
                            <p>제 9회 [세계의 문학 신인상] 소설 부문 수상소감 - 김세희</p>
                            <p>2024.7.10</p>
                        </div>
                    </div>
                    <div>
                        <span className="header news">NEWS</span>
                        <div>
                            <p>제 9회 [세계의 문학 신인상] 소설 부문 수상소감 - 임정민</p>
                            <p>2024.7.10</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default News;