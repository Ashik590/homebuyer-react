function Box({title,para,img}) {
    return (
        <div className="box">
            <div className="text-center mb-1">
                <img src={img} alt="box" />
            </div>
            <div>
                <h3 className="text-lg text-center">{title}</h3>
                <p className="text-sm text-center">
                    {para}
                </p>
            </div>
        </div>
    );
}

export default Box;