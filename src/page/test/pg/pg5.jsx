import "./pg.css"

export const Pg5 = () => {
    return(
        <div className="main">
            <div className="text">
                <a><b>How much time do you want commit to learn English?</b></a>
                <button className="pt2">Less than 30 min / week</button>
                <button className="pt2">Up to 2 hours / week</button>
                <button className="pt2">Up to 4 hours / week</button>
                <button className="pt2">More than 4 hours / week</button>
                <button className="pt2">Ask me again later</button>
            </div>
        </div>
    )
}