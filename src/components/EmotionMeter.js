let emotion = "SAD"

function Emoji(){
    return emotion === "HAPPY" ? (
        <i className="fas fa-smile-beam fa-5x"></i>
    ) : emotion === "SAD" ? (<i className="fas fa-frown fa-5x"></i>) : null;
}

export default Emoji;