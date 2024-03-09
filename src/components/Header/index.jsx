import { Container } from "./style";
import { Logo } from "../Logo";
import { Input } from "../Input";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { PiReceipt } from "react-icons/pi";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";

import { useState } from "react";

export function Header({ orderAmount, menuStatus, variant, ...res }) {
    const [width, setWidth] = useState(window.document.defaultView.innerWidth);

    window.addEventListener("resize", () => {
        setWidth(window.document.defaultView.innerWidth);
    })

    return (
        <Container>
            {
                width < 1024 &&
                <button {...res}>
                    {
                        menuStatus == "open" ? <IoCloseOutline /> : <IoMenuOutline />
                    }
                </button>
            }
            <Logo variant={variant} />
            {
                width >= 1024 &&
                <Input
                    variant
                    placeholder="Busque por pratos ou ingredientes"
                    type="text"
                />
            }
            {
                width < 1024 ?
                    <>
                        {
                            variant !== "admin" &&
                            <Link
                                to={"/order"}
                                className="orders"
                            >
                                {
                                    orderAmount > 0 &&
                                    <div className="ordersNotification">
                                        {orderAmount}
                                    </div>
                                }
                                <PiReceipt />
                            </Link>
                        }
                    </>
                    :
                    <>
                        {
                            variant == "admin" ?
                                <>
                                    <Link>
                                        
                                    </Link>
                                    <Link
                                        to={"/orders/control"}
                                        className="historyBtn"
                                    >
                                        Pedidos
                                    </Link>
                                    <Link
                                        to={"/create"}
                                        className="newMeal"
                                    >
                                        Novo prato
                                    </Link>
                                </>
                                :
                                <>
                                    <Link
                                        to={"/favorites"}
                                    >
                                        Meus favoritos
                                    </Link>
                                    <Link
                                        to={"/orders/history"}
                                    >
                                        Histórico pedidos
                                    </Link>
                                    <Link
                                        to={"/order"}
                                        className="orders"
                                    >
                                        <PiReceipt />
                                        <p className="poppins-regular">
                                            Pedidos ({orderAmount})
                                        </p>
                                    </Link>
                                </>
                        }
                        <button>
                            <FiLogOut />
                        </button>
                    </>
            }
        </Container>
    );
}