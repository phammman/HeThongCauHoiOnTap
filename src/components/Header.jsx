import logoImg from "../assets/tuhoc.cc.png"
export default function Header(){
    return(
        <>
            <header>
                <img src={logoImg} alt="anh logo"/>
                <h1>Tự học</h1>
            </header>
        </>
    )
}