import Slider from "react-slick";
import React, {Component} from "react";
import slide1 from "../../../assets/images/homepage/slide_1.jpg";
import slide2 from "../../../assets/images/homepage/slide_2.jpg";
import slide3 from "../../../assets/images/homepage/slide_3.jpg";


export default class FocusOnSelect extends Component {

    render() {

        const settings = {
            speed: 500,
            autoplay: true,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            focusOnSelect: true
        };

        return (
            <>
                <Slider {...settings}>
                    <div>
                        <img className={"img"} src={slide1} alt={"Пример продукции"}/>
                    </div>
                    <div>
                        <img className={"img"} src={slide2} alt={"Пример продукции"}/>
                    </div>
                    <div>
                        <img className={"img"} src={slide3} alt={"Пример продукции"}/>
                    </div>
                </Slider>
            </>
        );
    }
}