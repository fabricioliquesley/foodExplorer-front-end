import { Container, Content } from "./style";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Menu } from "../../components/Menu";
import { Button } from "../../components/Button";

import qrCode from "../../assets/qr-code.svg";

import { useState, useEffect } from "react";

export function Order() {
  const [statusMenu, setStatusMenu] = useState("close");

  const [width, setWidth] = useState(window.document.defaultView.innerWidth);

  const [step, setStep] = useState(1);

  let [total, setTotal] = useState(0);

  const [method, setMethod] = useState("pix");

  window.addEventListener("resize", () => {
    setWidth(window.document.defaultView.innerWidth);
  })

  function toggleMenu() {
    if (statusMenu == "open") {
      return setStatusMenu("close");
    }

    return setStatusMenu("open");
  }

  const orderMeals = [
    {
      img: "/src/assets/mail_example.png",
      name: "Salada Radish",
      preco: 19.4
    },
    {
      img: "/src/assets/mail_example.png",
      name: "Salada Radish",
      preco: 19
    },
    {
      img: "/src/assets/mail_example.png",
      name: "Salada Radish",
      preco: 19.45
    },
    {
      img: "/src/assets/mail_example.png",
      name: "Salada Radish",
      preco: 19.45
    },
    {
      img: "/src/assets/mail_example.png",
      name: "Salada Radish",
      preco: 19.45
    },
  ]

  useEffect(() => {
    let currentValue = total;

    orderMeals.map(orderMeal => {
      currentValue += orderMeal.preco;

      setTotal(currentValue);
    })
  }, [])

  return (
    <Container $statusMenu={statusMenu}>
      <Header onClick={() => toggleMenu()} menuStatus={statusMenu} />
      <main>
        {
          width < 1024 &&
          <Menu status={statusMenu} />
        }
        <Content $method={method}>
          <h2>
            {
              step == 1 ? "Meu pedido" : "Pagamento"
            }
          </h2>
          {
            step == 1 ?
              <div className="cards">
                {
                  orderMeals.map((orderMeal, index) => (
                    <div key={index} className="mealCard">
                      <img
                        src={orderMeal.img}
                        alt="Imagem ilustrativa do prato"
                      />
                      <div>
                        <p>{orderMeal.name}</p>
                        <span>
                          R$ {
                            String(orderMeal.preco.toFixed(2))
                              .replace(".", ",")
                          }
                        </span>
                      </div>
                    </div>
                  ))
                }
                <p>
                  Total: R$ {
                    String(total.toFixed(2))
                      .replace(".", ",")
                  }
                </p>
                <Button
                  title={"Avançar"}
                  onClick={() => setStep(2)} />
              </div>
              :
              <div className="payment">
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
                        <Button title={"Finalizar pagamento"}/>
                      </form>
                  }
                </div>
              </div>
          }
        </Content>
      </main>
      <Footer />
    </Container>
  )
}