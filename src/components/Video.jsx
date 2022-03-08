import arrow from "../img/down-arrow.svg";

function Video() {
    return (
        <section id="video" className="px-4 mb_20"> 
            <h1 className="text-center mb-4 h12 relative">
                No deposit to house shopping in 6 weeks
                <img src={arrow} className='arrow' alt="arrow" />
            </h1>

            <div className="p-2 flex mx-auto" >
                <iframe style={{width:"100%",height:"450px",borderRadius:"13px"}} src="https://www.youtube.com/embed/tS0lj7WEJtY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </section>
    );
}

export default Video;