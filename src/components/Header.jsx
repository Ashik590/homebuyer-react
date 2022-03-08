import logo from "../img/logo.png";

function Header() {
    return (
        <>
        <header className="py-3 mb-3 containers flex justify-between items-center text-white">
            <a href="/">
                <img src={logo} alt="logo" className="logo"/>
            </a>
            <div className="text-center text-xs">
                <p className="call"><b>Call now:</b> <b>+61285997235</b></p>
                <b className="block">Home Buyer Assistance  - Little No Deposit</b>
                <span>Utilize Government’s Grant - Builder Deposit Grant -  Rental History As Saving</span>
            </div>
        </header>
        </>
    );
}

export default Header;