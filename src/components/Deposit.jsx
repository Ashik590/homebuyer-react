import check from "../img/check.png";

function Deposit() {
    return (
        <section id="depo" className="mb_20">
            <div className="containers">
                <h1 className="mb-4 text-center font-bold">How can I buy a home with no deposit?</h1>
                <ul className="w-fit mx-auto grid gap-3">
                    <li>
                        <img src={check} alt="check icon" />
                        <span>$15,000 Government Grant</span>
                    </li>
                    <li>
                        <img src={check} alt="check icon" />
                        <span>$15,000 Builders Cash Grant </span>
                    </li>
                    <li>
                        <img src={check} alt="check icon" />
                        <span>Special low deposit loan assistance</span>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Deposit;