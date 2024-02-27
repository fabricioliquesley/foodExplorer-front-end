import { Container } from './style';
import { Button } from "../Button";
import { HiMiniMinus, HiMiniPlus } from "react-icons/hi2";
import { CiHeart } from "react-icons/ci";

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

import { useState } from 'react';

export function Slider({ title, data }) {
    const [sliderRef, instanceRef] = useKeenSlider({
        breakpoints: {
            "(max-width: 320px)": {
                slides: {
                    perView: 1.3,
                    spacing: 16
                }
            },
            "(min-width: 321px)": {
                slides: {
                    perView: 1.4,
                    spacing: 16
                }
            },
            "(min-width: 420px)": {
                slides: {
                    perView: 1.6,
                    spacing: 16
                }
            },
            "((min-width: 426px) and (max-width: 600px))": {
                slides: {
                    perView: 2,
                    spacing: 16
                }
            },
            "((min-width: 600px) and (max-width: 768px))": {
                slides: {
                    perView: 2.5,
                    spacing: 16
                }
            },
            "(min-width: 769px)": {
                slides: {
                    perView: 4,
                    spacing: 16
                }
            },
        }
    })

    let [itemAmount, setItemAmount] = useState(0);

    function decrementItemAmount() {
        if (itemAmount > 0) {
            setItemAmount(itemAmount -= 1);
        }
    }

    function incrementItemAmount() {
        setItemAmount(itemAmount += 1);
    }

    return (
        <Container>
            <h3 className='poppins-medium'>{title}</h3>
            <div ref={sliderRef} className="keen-slider slider">
                {
                    data.map(meal => (
                        <div className="keen-slider__slide slide">
                            <button className='favoriteBtn'>
                                <CiHeart />
                            </button>
                            <img src={meal.image_path} alt="Imagem ilustrativa do prato" />
                            <p className='title poppins-medium'>
                                {meal.name}
                            </p>
                            <span className='preco roboto-regular'>
                                R$ {String(meal.preco.toFixed(2)).replace(".", ",")}
                            </span>
                            <div>
                                <button
                                    onClick={() => decrementItemAmount()}
                                >
                                    <HiMiniMinus />
                                </button>
                                <span className='roboto-regular'>
                                    {String(itemAmount).padStart(2, "0")}
                                </span>
                                <button
                                    onClick={() => incrementItemAmount()}
                                >
                                    <HiMiniPlus />
                                </button>
                            </div>
                            <Button title={"incluir"} />
                        </div>
                    ))
                }
            </div>
        </Container>
    )
}