import { Container } from "./style";
import { Logo } from "../Logo";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { PiReceipt } from "react-icons/pi";
import { Link } from "react-router-dom";

export function Header({ orderAmount, menuStatus, ...res }) {
    return (
        <Container>
            <button {...res}>
                {
                    menuStatus == "open" ? <IoCloseOutline/> : <IoMenuOutline />
                }
            </button>
            <Logo />
            <Link
                to={"/orders"}
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
        </Container>
    );
}