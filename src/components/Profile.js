import image from "../assets/images/puppy.jpg";

function imagem() {
    return (
    <div class="card" style={{width: '18rem'}}>
        <img src={image} class="card-img-top" alt="dog"/>
        <div class="card-body">
            <h4>Cute Puppy</h4>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis dignissim neque, nec sodales sem porttitor facilisis. Morbi vitae alit eget turpis ultrices ullamcorper. </p>
        </div>
    </div>
    );

}

export default imagem();  

