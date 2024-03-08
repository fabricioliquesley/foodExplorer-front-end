import { Container } from "./style";
import { Button } from "../../components/Button";

import qrCode from "../../assets/qr-code.svg";

import { useState } from "react";

export function PaymentMethod() {
    const [method, setMethod] = useState("pix");

    return (
        <Container className="payment" $method={method}>
            <div className="paymentMethod">
                <label htmlFor="pix" className="pix">
                    PIX
                </label>
                <label htmlFor="credit" className="credit">
                    Crédito
                </label>
                <input
                    type="radio"
                    name="payment-Method"
                    id="pix"
                    defaultChecked
                    onClick={() => setMethod("pix")}
                />
                <input
                    type="radio"
                    name="payment-Method"
                    id="credit"
                    onClick={() => setMethod("credit")}
                />
            </div>
            <div className="selectedMethod">
                {
                    method == "pix" ?
                        <img src={qrCode} alt="" />
                        :
                        <form>
                            <div>
                                <label htmlFor="cardNumber">Número do cartão</label>
                                <input
                                    id="cardNumber"
                                    type="number"
                                    placeholder="0000 0000 0000 0000"
                                />
                            </div>
                            <div className="otherInfos">
                                <div>
                                    <label htmlFor="validity">Validade</label>
                                    <input
                                        id="validity"
                                        type="text"
                                        placeholder="04/25"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="cvc">CVC</label>
                                    <input
                                        id="cvc"
                                        type="number"
                                        placeholder="000"
                                    />
                                </div>
                            </div>
                            <Button title={"Finalizar pagamento"} />
                        </form>
                }
            </div>
        </Container>
    )
}