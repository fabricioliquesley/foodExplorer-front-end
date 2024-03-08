import { Container, Content } from "./style";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Menu } from "../../components/Menu";
import { Button } from "../../components/Button";
import { PaymentMethod } from "../../components/PaymentMethod";

import { useState, useEffect } from "react";

export function Order() {
  const [statusMenu, setStatusMenu] = useState("close");

  const [width, setWidth] = useState(window.document.defaultView.innerWidth);

  const [step, setStep] = useState(1);

  let [total, setTotal] = useState(0);

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
      <Header onClick={() => toggleMenu()} menuStatus={statusMenu} orderAmount={5} />
      <main>
        {
          width < 1024 &&
          <Menu status={statusMenu} />
        }
        <Content>
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
                {
                  width < 1024 &&
                  <Button
                    title={"Avançar"}
                    onClick={() => setStep(2)}
                  />
                }

              </div>
              :
              <PaymentMethod />
          }
          {
            width >= 1024 &&
            <>
              <h2>Pagamento</h2>
              <PaymentMethod />
            </>
          }
        </Content>
      </main>
      <Footer />
    </Container>
  )
}