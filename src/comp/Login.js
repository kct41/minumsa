function Login(){
    return(
        <>
            <div className="container login">
                <div className="login_box">
                    <h2>로그인</h2>
                    <input type="text" placeholder="아이디"/>
                    <input type="password" placeholder="비밀번호"/>
                    <button>로그인</button>
                    <div className="btn_box">
                        <a href="/"><span>아이디 찾기</span></a>
                        <span className="line"></span>
                        <a href="/"><span>비밀번호 찾기</span></a>
                        <span className="line"></span>
                        <a href="/"><span>회원가입</span></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;