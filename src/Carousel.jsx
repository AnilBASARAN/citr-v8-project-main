import { Component } from "react";
let url = "";
class Carousel extends Component{
    
    state = {
        active:0,
    }

    static defaultProps = {
        
        images : [url]
    }

    render(){
        const {images} = this.props;
        const {active} = this.state;

        return(
            <div className="carousel">
                <img src={images[active]} alt= "animal hero" />
                <div className="carousel-smaller">
                {images.map((photo,index)=>(
                    <img
                     src={photo}
                     key={photo}
                     className={active === index ? "active" : ""}
                     alt="animal thumbnail"
                     />
                ))}
                </div>
            </div>
        )
    }


}

export default Carousel;