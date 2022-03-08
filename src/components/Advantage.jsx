import Box from "../components/Box";
import img1 from "../img/box1.png";
import img2 from "../img/box2.png"
import img3 from "../img/box-3.png"
import img4 from "../img/box-4.png"

function Advantage() {
    return (
        <section id="advantage" className="mb_20">
            <div className="containers">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-5">
                    <Box img={img1} title={"Low Down Payments"} para="You can build your brand new home with as low as $2000 saving or even $0. Special personal loans designed for use as a deposit are available. If your rental history is good and you pay your bills on time, you likely qualify"/>
                    <Box img={img2} title={"Credit Score"} para="Your credit doesn’t have to be perfect, we can work with if you had some problems in the past. Some lenders wont even look at your score and our broker partners have one of the best track records of making the impossible possible."/>
                    <Box img={img3} title={"Low Interest Rates"} para="Don’t me scared off by horror stories of high rates and repayments that simply aren’t affordable. The rates on offer will be the best available to you on the market even as low as 1.99%"/>
                    <Box img={img4} title={"Free Assessment"} para="We only need a 4 min phone call, in that short time we can tell you if we can get you hour home. Because we don’t charge fees we get paid our lenders and banks we wont waste your time or ours."/>
                </div>  
            </div>
        </section>
    );
}

export default Advantage;