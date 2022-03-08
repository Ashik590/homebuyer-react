import pic1 from "../img/pic-1.svg";
import pic2 from "../img/pic-2.svg";
import curve from "../img/curve.svg";
import axios from "axios";
import { useState } from "react";

function Ques1() {
    const [form,setForm] = useState({
        name:"",
        phone:"",
        email:""
    })

    const reqCall = async(e) =>{
        e.preventDefault()
        const res = await axios.post("/request-call",{
            form
        });
        
        setForm({
            name:"",
            phone:"",
            email:""
        })

        const toast = document.querySelector(".toasts");

        toast.classList.remove("d-none")
        setTimeout(() => {
            toast.style.animation = "go .5s linear";
            setTimeout(() => {
                toast.classList.add("d-none");
                toast.style.animation = "come .5s linear";
            }, 400);
        }, 2000);
    }

    return (
        <>
            <div className="toasts d-none">
                Requested for a call    
            </div>
            <div className="ques" id="ques1">
                <h1>Want to buy a house, are you eligible?</h1>
                <div className="ques1_main gap-5 grid">

                    <div>
                        <div className="options">
                            <div>
                                <input className="form-input" id="input1" type="radio" name="ques1" checked hidden onChange={() => {
                                    const go1 = document.querySelector("#go1");
                                    const go2 = document.querySelector("#go2");

                                    go1.classList.remove("d-none");
                                    go2.classList.add("d-none")
                                }} />
                                <label className="h-auto shadow-xl">
                                    <div className="hole"></div>
                                    <img src={pic1} alt="picture1" />
                                    <p>
                                        First Home Buyer
                                    </p>
                                </label>
                                <div className="curve_text">
                                    <img src={curve} alt="curve" />
                                    <b className="block text-sm">Can I buy a house with no $0 Deposit?</b>
                                    <span className="text-xs">2 Mins to see if you qualify Same day call back</span>
                                </div>
                            </div>
                            <div>
                                <input className="form-input" id="input2" type="radio" name="ques1" hidden onChange={() => {
                                    const go1 = document.querySelector("#go1");
                                    const go2 = document.querySelector("#go2");

                                    go1.classList.add("d-none");
                                    go2.classList.remove("d-none")
                                }} />

                                <label className="h-auto shadow-xl">
                                    <div className="hole"></div>
                                    <img src={pic2} alt="picture2" />
                                    <p>
                                        Not my first home
                                    </p>
                                </label>
                            </div>
                        </div>
                        <div className="conseq">
                            <button className="btns next">Next
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="12" height="12" viewBox="0 0 24 24"><path d="M10.024 4h6.015l7.961 8-7.961 8h-6.015l7.961-8-7.961-8zm-10.024 16h6.015l7.961-8-7.961-8h-6.015l7.961 8-7.961 8z" /></svg>
                            </button>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-white text-center mb-3">Same day call back</h2>
                        <form className="same_day_form" onSubmit={reqCall}>
                            <input value={form.name} onChange={(e)=> setForm({...form,name:e.target.value})} required type="text" placeholder="Name"/>
                            <input value={form.phone} onChange={(e)=> setForm({...form,phone:e.target.value})} required type="number" placeholder="Phone"/>
                            <input value={form.email} onChange={(e)=> setForm({...form,email:e.target.value})} required type="email" placeholder="Email"/>
                            <button className="btns w-fit mx-auto" type="submit">Request a call</button>
                        </form>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Ques1;