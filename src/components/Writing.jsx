import check from "../img/check.svg";


function Writing() {
    return (
        <section id="writing" className="mb_20">
            <div className="w-fit mx-auto">
                <div className="px-4">
                    <h2 className="h11 mx-auto mb-4" >More little secrets</h2>
                    <ul className="grid gap-3 mb-0 pl-0">
                        <li className="flex gap-2 items-center justify-start"><img src={check} alt="icon" /> Your deposit can be as low as 2% savings</li>
                        <li className="flex gap-2 items-center justify-start"><img src={check} alt="icon" /> You can even use a personal loan as a deposit</li>
                        <li className="flex gap-2 items-center justify-start"><img src={check} alt="icon" /> Did you know that some banks will use a good rental history as savings?</li>
                        <li className="flex gap-2 items-center justify-start"><img src={check} alt="icon" /> You can even use FHOG for a deposit</li>
                    </ul>
                </div>
            </div>
        </section>  
    );
}

export default Writing;