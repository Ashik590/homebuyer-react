import logo from "../img/logo.png";

function Footer() {
    return (
        <>
        <footer>
            <div className="containers">
                <div className="text-center block mb-3">
                    <img height="100px" src={logo} alt="logo" />
                </div>
                <p className="text-center text-xs text-white">Copyright © 2019 – Home Buyer Assistance All rights reserved<br />Important Disclaimer for Participants in Your Home Buyer Assistance Program</p>
            </div>
        </footer>
        <div style={{background:"#1B7EAF"}} className="flex justify-center gap-3 py-3 px-2">
            <a className="text-white text-sm" href="/">Privacy Policy</a>
            <a className="text-white text-sm" href="/">Terms</a>
        </div>
        </>
    );
}

export default Footer;