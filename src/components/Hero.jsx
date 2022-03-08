import { useEffect, useState } from "react";
import validator from 'validator';
import Ques1 from "./Ques1";
import axios from "axios";

function Hero() {
    useEffect(() => {
        const label1 = document.querySelector("#input1~label");
        const label2 = document.querySelector("#input2~label");
        const go1 = document.getElementById("go1");
        const go2 = document.getElementById("go2");

        label1.addEventListener("click", () => {
            go1.classList.remove("d-none");
            go2.classList.add("d-none");
        })
        label2.addEventListener("click", () => {
            go1.classList.add("d-none");
            go2.classList.remove("d-none");
        })

        const nextBtns = document.querySelectorAll(".next");
        const backBtns = document.querySelectorAll(".back");
        const parent = document.querySelector(".parent");
        const labels = document.querySelectorAll(".options label");
        let step = 0;

        nextBtns.forEach((next) => {
            next.addEventListener("click", () => {
                const parentWidth = parent.clientWidth;

                parent.scrollLeft += parentWidth;
                step = step + 1;

                setTimeout(() => {
                    runBar()
                }, 500);
            })
        });

        backBtns.forEach((back) => {
            back.addEventListener("click", () => {
                const parentWidth = parent.clientWidth;

                parent.scrollLeft -= parentWidth;
                step = step - 1;

                setTimeout(() => {
                    runBar()
                }, 500);
            })
        });

        labels.forEach((label) => {
            label.addEventListener("click", () => {
                const parent = document.querySelector(".parent");
                const parentWidth = parent.clientWidth;
                label.style.pointerEvents = "none";
                const input = label.parentElement.querySelector("input");
                step = step + 1;
                setTimeout(() => {
                    const nextBtn = label.parentElement.parentElement.nextElementSibling.lastElementChild;
                    nextBtn.removeAttribute("disabled")
                }, 100);
                input.checked = true
                setTimeout(() => {
                    label.style.pointerEvents = "all"
                    parent.scrollLeft += parentWidth;
                }, 300);
                setTimeout(() => {
                    runBar()
                }, 800);
            })
        })

        const dataInputs1 = document.querySelectorAll("#go1 .form.grid input");
        const nextData1 = document.querySelector("#go1 .form.grid~div .next");
        const dataInputs2 = document.querySelectorAll("#go2 .form.grid input");
        const nextData2 = document.querySelector("#go2 .form.grid~div .next");

        dataInputs1.forEach((input) => {
            input.addEventListener("input", (e) => {
                let filled = true;
                dataInputs1.forEach((inputt) => {
                    if (!inputt.value && inputt.type === "text") {
                        filled = false;
                    }
                    if (inputt.type === "checkbox") {
                        if (!inputt.checked) {
                            filled = false;
                        }
                    }
                })
                if (filled) {
                    nextData1.removeAttribute("disabled");
                } else {
                    nextData1.disabled = true;
                }

            })
        })

        dataInputs2.forEach((input) => {
            input.addEventListener("input", (e) => {
                let filled = true;
                dataInputs2.forEach((inputt) => {
                    if (!inputt.value && inputt.type === "text") {
                        filled = false;
                    }
                    if (inputt.type === "checkbox") {
                        if (!inputt.checked) {
                            filled = false;
                        }
                    }
                })
                if (filled) {
                    nextData2.removeAttribute("disabled");
                } else {
                    nextData2.disabled = true;
                }
            })
        });

        const validateInput = document.querySelectorAll(".validation");

        validateInput.forEach((input) => {
            input.addEventListener("input", (e) => {
                let phone = e.target.parentElement.querySelector(".phone");
                let email = e.target.parentElement.querySelector(".email");
                let firstName = e.target.parentElement.firstElementChild.firstElementChild;
                let lastName = e.target.parentElement.firstElementChild.lastElementChild;
                let validPhone = validator.isMobilePhone(phone.value, "any");
                let validEmail = validator.isEmail(email.value);
                let nextBtn = e.target.parentElement.nextElementSibling.lastElementChild;

                if (validEmail && validPhone && firstName.value && lastName.value && phone.value.length >= 9) {
                    email.nextElementSibling.classList.add("d-none")
                    phone.nextElementSibling.classList.add("d-none")
                } else {
                    nextBtn.disabled = true;
                    if (!validEmail) {
                        if (email.value) {
                            email.nextElementSibling.classList.remove("d-none")
                        }
                    } else {
                        email.nextElementSibling.classList.add("d-none")
                    }

                    if (!validPhone || phone.value.length < 9) {
                        if (phone.value) {
                            phone.nextElementSibling.classList.remove("d-none")
                        }
                    } else {
                        phone.nextElementSibling.classList.add("d-none")
                    }
                }
            })
        });

        const submits = document.querySelectorAll(".submit");
        const welcome = document.querySelector(".welcome")
        const barDiv = document.querySelector(".bar div");

        submits.forEach((submit) => {
            submit.addEventListener("click", () => {
                setTimeout(() => {
                    barDiv.classList.add("w-100")
                    welcome.classList.remove("d-none");
                }, 100);
            })
        })

        function runBar() {
            const parentScroll = parent.scrollLeft;
            const scrollWidth = parent.scrollWidth - parent.clientWidth;
            let persent = (parentScroll / scrollWidth) * 95;
            barDiv.style.width = `${persent}%`;
        }
        runBar();

        const welcomeBtn = document.querySelector(".welcome .btns");

        welcomeBtn.addEventListener("click", (e) => {
            step = 0;
            const welcome = e.target.parentElement.parentElement;
            const parent = document.querySelector(".parent");
            welcome.classList.add("d-none");
            parent.scrollLeft = 0;
            setTimeout(() => {
                const barDiv = document.querySelector(".bar div");
                const parentScroll = parent.scrollLeft;
                const scrollWidth = parent.scrollWidth - parent.clientWidth;
                let persent = (parentScroll / scrollWidth) * 95;

                barDiv.classList.remove("w-100")
                barDiv.style.width = `${persent}%`;
            }, 700);

            const inputs = document.querySelectorAll(".options:not(#ques1 .options) input");
            const formInputs = document.querySelectorAll(".form.grid input");
            const checks = document.querySelectorAll(".check__");
            const nextBtns = document.querySelectorAll(".next");
            const nextFirst = document.querySelector("#ques1 .next");

            nextBtns.forEach((btn) => {
                btn.disabled = true;
            })
            nextFirst.removeAttribute("disabled")

            inputs.forEach((input) => {
                input.checked = false;
            })

            formInputs.forEach((input) => {
                input.value = "";
            })

            checks.forEach((check) => {
                check.checked = false;
            })
        });

        window.addEventListener("resize", () => {
            const parentWidth = parent.clientWidth;

            parent.classList.add("strong_scroll")
            parent.scrollLeft = parentWidth * step;

            setTimeout(() => {
                parent.classList.remove("strong_scroll")
        }, 300);
        })
    }, []);

    const [answers1,setAnswers1] = useState([
        {
            ques:"Want to buy a house, are you eligible?",
            ans:"First Home Buyer",
        },
        {
            ques:"What is your budget for your new home?",
            ans:"",
        },
        {
            ques:"How much is your annual income?",
            ans:"",
        },
        {
            ques:"How much deposit do you have saved?",
            ans:"",
        },
        {
            firstName:"",
            lastName:"",
            email:"",
            phone:"",
        }
    ]);
    
    const [answers2,setAnswers2] = useState([
        {
            ques:"Want to buy a house, are you eligible?",
            ans:"Not my first home",
        },
        {
            ques:"How can I buy a home with no deposit?",
            ans:""
        },
        {
            firstName:"",
            lastName:"",
            email:"",
            phone:"",
        },
    ]);

    const submitAns2 = async() =>{
        const res = await axios.post("/do-booking",{
            info:answers1,
        });

        console.log(res.data);
    }

    useEffect(()=>{
        const submit1 = document.querySelector("#go1 .submit");

        submit1.addEventListener("click",async()=>{
            const res = await axios.post("/do-booking",{
                info:answers1,
            });
        })

        const submit2 = document.querySelector("#go2 .submit");

        submit2.addEventListener("click",async()=>{
            const res = await axios.post("/do-booking",{
                info:answers2,
            });
        })
    })

    return (
        <>
            <div className="bar">
                <div></div>
            </div>
            <section id="hero" className="containers relative">
                <div className="parent">
                    <div className="slider w-fit">
                        <Ques1/>
                        <div id="go1" className="w-fit go">
                            <div className="ques" id="ques2">
                                <div>
                                    <h1 className="mb-3">Contact Details</h1>
                                    <div className="form grid gap-2">
                                        <div className="grid grid-cols-2 gap-2">
                                            <input type="text" onChange={(e)=>{
                                                answers1[4].firstName = e.target.value
                                            }} placeholder="First Name" style={{ padding: "19px 25px 18px" }} className="form-control" />
                                            <input type="text" onChange={(e)=>{
                                                answers1[4].lastName = e.target.value
                                            }} placeholder="Last Name" style={{ padding: "19px 25px 18px" }} className="form-control" />
                                        </div>
                                        <input onChange={(e)=>{
                                            answers1[4].email = e.target.value
                                        }} type="text" placeholder="Email" style={{ padding: "19px 25px 18px" }} className="form-control email validation" />
                                        <small className="error d-none">This is not valid email</small>
                                        <input onChange={(e)=>{
                                            answers1[4].phone = e.target.value
                                        }} maxLength="15" type="text" placeholder="Phone" style={{ padding: "19px 25px 18px" }} className="form-control phone validation" />
                                        <small className="error d-none">This is not valid phone number</small>
                                        <div className="grid items-center gap-2" style={{ gridTemplateColumns: "25px 1fr" }}>
                                            <input type="checkbox" className="check__" hidden id="check124" />
                                            <label htmlFor="check124">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="17" height="17" viewBox="0 0 24 24"><path d="M0 11c2.761.575 6.312 1.688 9 3.438 3.157-4.23 8.828-8.187 15-11.438-5.861 5.775-10.711 12.328-14 18.917-2.651-3.766-5.547-7.271-10-10.917z" /></svg>
                                            </label>
                                            <p className="text-white text-xs">By checking this box, I confirm that I am an authorized representative of Borrower and agree on Borrower’s behalf that Janover Inc. <a className="text-white hover:text-white" href="/">Privacy Policy</a> <a className="text-white hover:text-white" href="/">Terms</a></p>
                                        </div>
                                    </div>
                                    <div className="conseq">
                                        <button className="btns back">
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_121_2)"><path d="M6.988 10L3.9805 10L0 6L3.9805 2L6.988 2L3.0075 6L6.988 10ZM12 2H8.9925L5.012 6L8.9925 10H12L8.0195 6L12 2H12Z" fill="white" /></g><defs><clipPath id="clip0_121_2"><rect width="12" height="12" fill="white" /></clipPath></defs>
                                            </svg>
                                            Back
                                        </button>
                                        <button className="btns next" disabled >Next
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="12" height="12" viewBox="0 0 24 24"><path d="M10.024 4h6.015l7.961 8-7.961 8h-6.015l7.961-8-7.961-8zm-10.024 16h6.015l7.961-8-7.961-8h-6.015l7.961 8-7.961 8z" /></svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="ques" id="ques3">
                                <div>
                                    <h1>What is your budget for your new home?</h1>
                                    <div className="options">
                                        <div className="shadow-xl">
                                            <input className="form-input" id="input5" type="radio" name="ques3" hidden/>
                                            <div className="hole"></div>
                                            <label onClick={(e)=>{
                                                answers1[1].ans = e.target.innerText;
                                                console.log(answers1);
                                            }}>
                                                Under $250,000
                                            </label>
                                        </div>
                                        <div className="shadow-xl">
                                            <input className="form-input" id="input6" type="radio" name="ques3" hidden />
                                            <div className="hole"></div>
                                            <label onClick={(e)=>{
                                                answers1[1].ans = e.target.innerText;
                                                console.log(answers1);
                                            }}>
                                                $250,000 - $500,000
                                            </label>
                                        </div>
                                        <div className="shadow-xl span3rd">
                                            <input className="form-input" id="input7" type="radio" name="ques3" hidden />
                                            <div className="hole"></div>
                                            <label onClick={(e)=>{
                                                answers1[1].ans = e.target.innerText;
                                                console.log(answers1);
                                            }}>
                                                Above $500,000
                                            </label>
                                        </div>
                                    </div>
                                    <div className="conseq">
                                        <button className="btns back">
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_121_2)"><path d="M6.988 10L3.9805 10L0 6L3.9805 2L6.988 2L3.0075 6L6.988 10ZM12 2H8.9925L5.012 6L8.9925 10H12L8.0195 6L12 2H12Z" fill="white" /></g><defs><clipPath id="clip0_121_2"><rect width="12" height="12" fill="white" /></clipPath></defs>
                                            </svg>
                                            Back
                                        </button>
                                        <button className="btns next" disabled >Next
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="12" height="12" viewBox="0 0 24 24"><path d="M10.024 4h6.015l7.961 8-7.961 8h-6.015l7.961-8-7.961-8zm-10.024 16h6.015l7.961-8-7.961-8h-6.015l7.961 8-7.961 8z" /></svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="ques" id="ques4">
                                <div>
                                    <h1>How much is your annual income?</h1>
                                    <div className="options">
                                        <div className="shadow-xl">
                                            <input className="form-input" id="input8" type="radio" name="ques4" hidden />
                                            <div className="hole"></div>
                                            <label onClick={(e)=>{
                                                answers1[2].ans = e.target.innerText;
                                                console.log(answers1);
                                            }}>
                                                Less than $40,000
                                            </label>
                                        </div>
                                        <div className="shadow-xl">
                                            <input className="form-input" id="input9" type="radio" name="ques4" hidden />
                                            <div className="hole"></div>
                                            <label onClick={(e)=>{
                                                answers1[2].ans = e.target.innerText;
                                                console.log(answers1);
                                            }}>
                                                $40,000 - $80,000
                                            </label>
                                        </div>
                                        <div className="shadow-xl span3rd">
                                            <input className="form-input" id="input10" type="radio" name="ques4" hidden />
                                            <div className="hole"></div>
                                            <label onClick={(e)=>{
                                                answers1[2].ans = e.target.innerText;
                                                console.log(answers1);
                                            }}>
                                                Geater than $80,000
                                            </label>
                                        </div>
                                    </div>
                                    <div className="conseq">
                                        <button className="btns back">
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_121_2)"><path d="M6.988 10L3.9805 10L0 6L3.9805 2L6.988 2L3.0075 6L6.988 10ZM12 2H8.9925L5.012 6L8.9925 10H12L8.0195 6L12 2H12Z" fill="white" /></g><defs><clipPath id="clip0_121_2"><rect width="12" height="12" fill="white" /></clipPath></defs>
                                            </svg>
                                            Back
                                        </button>
                                        <button className="btns next" disabled >Next
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="12" height="12" viewBox="0 0 24 24"><path d="M10.024 4h6.015l7.961 8-7.961 8h-6.015l7.961-8-7.961-8zm-10.024 16h6.015l7.961-8-7.961-8h-6.015l7.961 8-7.961 8z" /></svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="ques" id="ques5">
                                <div>
                                    <h1>How much deposit do you have saved?</h1>
                                    <div className="options">
                                        <div className="shadow-xl">
                                            <input className="form-input" id="input11" type="radio" name="ques5" hidden />
                                            <div className="hole"></div>
                                            <label onClick={(e)=>{
                                                answers1[3].ans = e.target.innerText;
                                                console.log(answers1);
                                            }}>
                                                $0
                                            </label>
                                        </div>
                                        <div className="shadow-xl">
                                            <input className="form-input" id="input12" type="radio" name="ques5" hidden />
                                            <div className="hole"></div>
                                            <label onClick={(e)=>{
                                                answers1[3].ans = e.target.innerText;
                                                console.log(answers1);
                                            }}>
                                                Less than $10,000
                                            </label>
                                        </div>
                                        <div className="shadow-xl">
                                            <input className="form-input" id="input13" type="radio" name="ques5" hidden />
                                            <div className="hole"></div>
                                            <label onClick={(e)=>{
                                                answers1[3].ans = e.target.innerText;
                                                console.log(answers1);
                                            }}>
                                                $10,000 - $50,000
                                            </label>
                                        </div>
                                        <div className="shadow-xl">
                                            <input className="form-input" id="input13" type="radio" name="ques5" hidden />
                                            <div className="hole"></div>
                                            <label onClick={(e)=>{
                                                answers1[3].ans = e.target.innerText;
                                                console.log(answers1);
                                            }}>
                                                More than $50,000
                                            </label>
                                        </div>
                                    </div>
                                    <div className="conseq">
                                        <button className="btns back">
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_121_2)"><path d="M6.988 10L3.9805 10L0 6L3.9805 2L6.988 2L3.0075 6L6.988 10ZM12 2H8.9925L5.012 6L8.9925 10H12L8.0195 6L12 2H12Z" fill="white" /></g><defs><clipPath id="clip0_121_2"><rect width="12" height="12" fill="white" /></clipPath></defs>
                                            </svg>
                                            Back
                                        </button>
                                        <button className="btns submit" disabled>Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="go2" className="w-max go d-none">
                            <div className="ques" id="ques11">
                                <div>
                                    <h1 className="mb-3">Contact Details</h1>
                                    <div className="form grid gap-2">
                                        <div className="grid grid-cols-2 gap-2">
                                            <input onChange={(e)=>{
                                                answers2[2].firstName = e.target.value
                                            }} type="text" placeholder="First Name" style={{ padding: "19px 25px 18px" }} className="form-control" />
                                            <input onChange={(e)=>{
                                                answers2[2].lastName = e.target.value
                                            }} type="text" placeholder="Last Name" style={{ padding: "19px 25px 18px" }} className="form-control" />
                                        </div>
                                        <input onChange={(e)=>{
                                            answers2[2].email = e.target.value
                                        }} type="text" placeholder="Email" style={{ padding: "19px 25px 18px" }} className="form-control email validation" />
                                        <small className="error d-none">This is not valid email</small>
                                        <input onChange={(e)=>{
                                            answers2[2].phone = e.target.value
                                        }} maxLength="15" type="text" placeholder="Phone" style={{ padding: "19px 25px 18px" }} className="form-control phone validation" />
                                        <small className="error d-none">This is not valid phone number</small>
                                        <div className="grid items-center gap-2" style={{ gridTemplateColumns: "25px 1fr" }}>
                                            <input type="checkbox" className="check__" hidden id="check123" />
                                            <label htmlFor="check123">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="17" height="17" viewBox="0 0 24 24"><path d="M0 11c2.761.575 6.312 1.688 9 3.438 3.157-4.23 8.828-8.187 15-11.438-5.861 5.775-10.711 12.328-14 18.917-2.651-3.766-5.547-7.271-10-10.917z" /></svg>
                                            </label>
                                            <p className="text-white text-xs">By checking this box, I confirm that I am an authorized representative of Borrower and agree on Borrower’s behalf that Janover Inc. <a className="text-white hover:text-white" href="/">Privacy Policy</a> <a className="text-white hover:text-white" href="/">Terms</a></p>
                                        </div>
                                    </div>
                                    <div className="conseq mt-3">
                                        <button className="btns back">
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_121_2)"><path d="M6.988 10L3.9805 10L0 6L3.9805 2L6.988 2L3.0075 6L6.988 10ZM12 2H8.9925L5.012 6L8.9925 10H12L8.0195 6L12 2H12Z" fill="white" /></g><defs><clipPath id="clip0_121_2"><rect width="12" height="12" fill="white" /></clipPath></defs>
                                            </svg>
                                            Back
                                        </button>
                                        <button className="btns next" disabled >Next
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="12" height="12" viewBox="0 0 24 24"><path d="M10.024 4h6.015l7.961 8-7.961 8h-6.015l7.961-8-7.961-8zm-10.024 16h6.015l7.961-8-7.961-8h-6.015l7.961 8-7.961 8z" /></svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="ques" id="ques2">
                                <div>
                                    <h1>How can I buy a home with no deposit?</h1>
                                    <div className="options">
                                        <div className="shadow-xl">
                                            <input className="form-input" id="input55" type="radio" name="ques3" hidden />
                                            <div className="hole"></div>
                                            <label onClick={(e)=>{
                                                answers2[1].ans = e.target.innerText;
                                                console.log(answers2);
                                            }}>
                                                $15,000 Government Grant
                                            </label>
                                        </div>
                                        <div className="shadow-xl">
                                            <input className="form-input" id="input66" type="radio" name="ques3" hidden />
                                            <div className="hole"></div>
                                            <label onClick={(e)=>{
                                                answers2[1].ans = e.target.innerText;
                                                console.log(answers2);
                                            }}>
                                                $15,000 Builders Cash Grant
                                            </label>
                                        </div>
                                        <div className="shadow-xl span3rd">
                                            <input className="form-input" id="input77" type="radio" name="ques3" hidden />
                                            <div className="hole"></div>
                                            <label onClick={(e)=>{
                                                answers2[1].ans = e.target.innerText;
                                                console.log(answers2);
                                            }}>
                                                Special low deposit loan assistance
                                            </label>
                                        </div>
                                    </div>
                                    <div className="conseq">
                                        <button className="btns back">
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_121_2)"><path d="M6.988 10L3.9805 10L0 6L3.9805 2L6.988 2L3.0075 6L6.988 10ZM12 2H8.9925L5.012 6L8.9925 10H12L8.0195 6L12 2H12Z" fill="white" /></g><defs><clipPath id="clip0_121_2"><rect width="12" height="12" fill="white" /></clipPath></defs>
                                            </svg>
                                            Back
                                        </button>
                                        <button className="btns submit" disabled onClick={submitAns2}>Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="welcome d-none">
                    <div>
                        <h1 className="font-bold">Welcome</h1>
                        <p>Your form has been submitted</p>
                        <button className="btns mx-auto mt-3">Back</button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;