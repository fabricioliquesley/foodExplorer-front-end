import { Container } from './style';
import { Button } from "../Button";
import { HiMiniMinus, HiMiniPlus } from "react-icons/hi2";
import { CiHeart } from "react-icons/ci";
import { PiPencilSimple } from "react-icons/pi";

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

import { useState } from 'react';

export function Slider({ title, data, variant }) {
    // Mudanças
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loaded, setLoaded] = useState(false);

    const [sliderRef, instanceRef] = useKeenSlider({
        // mudanças
        initial: 0,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
        created() {
            setLoaded(true);
        },
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
                    perView: 3.2,
                    spacing: 16
                }
            },
        },
    })

    let [itemAmount, setItemAmount] = useState(0);

    function decrementItemAmount() {
        if (itemAmount > 0) {
            setItemAmount(itemAmount -= 1);
        }
    }

    const [width, setWidth] = useState(window.document.defaultView.innerWidth);

    window.addEventListener("resize", () => {
        setWidth(window.document.defaultView.innerWidth);
    })

    function incrementItemAmount() {
        setItemAmount(itemAmount += 1);
    }

    const user = {
        accountType: "admin"
    }

    return (
        <Container>
            <h3 className='poppins-medium'>{title}</h3>
            {
                width < 1024 ?
                    <div ref={sliderRef} className="keen-slider slider">
                        {
                            data.map((meal, index) => (
                                <div
                                    className="keen-slider__slide slide"
                                    key={index}
                                >
                                    <button className='favoriteBtn'>
                                        {
                                            variant == "admin" ?
                                                <PiPencilSimple />
                                                :
                                                <CiHeart />
                                        }
                                    </button>
                                    <img src={meal.image_path} alt="Imagem ilustrativa do prato" />
                                    <p className='title poppins-medium'>
                                        {meal.name}
                                    </p>
                                    <span className='preco roboto-regular'>
                                        R$ {String(meal.preco.toFixed(2)).replace(".", ",")}
                                    </span>
                                    {
                                        variant !== "admin" &&
                                        <>
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
                                        </>
                                    }
                                </div>
                            ))
                        }
                    </div>
                    :
                    <div className="navigation-wrapper navigation">
                        <div ref={sliderRef} className="keen-slider slider">
                            {
                                data.map((meal, index) => (
                                    <div 
                                        className="keen-slider__slide slide"
                                        key={index}
                                    >
                                        <button className='favoriteBtn'>
                                            {
                                                variant == "admin" ?
                                                    <PiPencilSimple />
                                                    :
                                                    <CiHeart />
                                            }
                                        </button>
                                        <img src={meal.image_path} alt="Imagem ilustrativa do prato" />
                                        <p className='title poppins-medium'>
                                            {meal.name}
                                        </p>
                                        <span className='preco roboto-regular'>
                                            R$ {String(meal.preco.toFixed(2)).replace(".", ",")}
                                        </span>
                                        {
                                            variant !== "admin" &&
                                            <>
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
                                            </>
                                        }
                                    </div>
                                ))
                            }
                        </div>
                        {loaded && instanceRef.current && (
                            <>
                                <Arrow
                                    left
                                    onClick={(e) =>
                                        e.stopPropagation() || instanceRef.current?.prev()
                                    }
                                    disabled={currentSlide === 0}
                                />

                                <Arrow
                                    onClick={(e) =>
                                        e.stopPropagation() || instanceRef.current?.next()
                                    }
                                    disabled={
                                        currentSlide ===
                                        instanceRef.current.track.details.slides.length - 1
                                    }
                                />
                            </>
                        )}
                    </div>
            }
        </Container>
    )
}

function Arrow(props) {
    const disabled = props.disabled ? " arrow--disabled" : "";
    return (
        <svg
            onClick={props.onClick}
            className={`arrow ${props.left ? "arrow--left" : "arrow--right"
                } ${disabled}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            {props.left && (
                <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
            )}
            {!props.left && (
                <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
            )}
        </svg>
    );
}