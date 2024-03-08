import { Container, OrdersContainer, StatusOrder } from "./style";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Menu } from "../../components/Menu";

import { useState } from "react";

export function OrdersHistory() {
  const [statusMenu, setStatusMenu] = useState("close");

  const [width, setWidth] = useState(window.document.defaultView.innerWidth);

  window.addEventListener("resize", () => {
    setWidth(window.document.defaultView.innerWidth);
  })

  function toggleMenu() {
    if (statusMenu == "open") {
      return setStatusMenu("close");
    }

    return setStatusMenu("open");
  }

  const user = {
    accountType: "common"
  }

  const history = [
    {
      code: "000004",
      status: "Pendente",
      date: "2024-02-22 22:04:48",
      details: "2 x strogonoff de frango, 1 x risoto de camarão, 4 x macarrão à carbonara"
    },
    {
      code: "000004",
      status: "Preparando",
      date: "2024-01-22 22:04:48",
      details: "2 x strogonoff de frango, 1 x risoto de camarão, 4 x macarrão à carbonara"
    },
    {
      code: "000004",
      status: "Entregue",
      date: "2024-02-25 19:04:49",
      details: "2 x strogonoff de frango, 1 x risoto de camarão, 4 x macarrão à carbonara"
    },
  ]

  history.map((order) => {
    order.date = order.date.split(" ");
    order.date[0] = order.date[0].split("-");
    order.date[1] = order.date[1].split(":");
  })

  return (
    <Container>
      <Header
        menuStatus={statusMenu}
        variant={user.accountType}
        orderAmount={5}
        onClick={toggleMenu}
      />
      <main>
        {
          width < 1024 &&
          <Menu status={statusMenu} variant={user.accountType} />
        }
        <h2 className="poppins-medium">Pedidos</h2>
        <OrdersContainer>
          {
            width < 1024 ?
              <>
                {
                  history.map((card, index) => (
                    <div
                      className="orderCard"
                      key={index}
                    >
                      <div>
                        <p>{card.code}</p>
                        <StatusOrder $orderstatus={card.status}>
                          <span>
                            {card.status}
                          </span>
                        </StatusOrder>
                        <p>
                          {
                            card.date[0][2]
                            + "/" +
                            card.date[0][1]
                            + " às " +
                            (card.date[1][0] - 3)
                            + "h" +
                            card.date[1][1]
                          }
                        </p>
                      </div>
                      <p>
                        {card.details}
                      </p>
                    </div>
                  ))
                }
              </>
              :
              <table>
                <thead>
                  <tr>
                    <th>Status</th>
                    <th>Código</th>
                    <th>Detalhes do pedido</th>
                    <th>Data e hora</th>
                  </tr>
                </thead>
                <tbody>
                {
                  history.map((card, index) => (
                    <tr
                      key={index}
                    >
                      <StatusOrder $orderstatus={card.status}>
                        <span>
                          {card.status}
                        </span>
                      </StatusOrder>
                      <td>{card.code}</td>
                      <td>
                        {card.details}
                      </td>
                      <td>
                        {
                          card.date[0][2]
                          + "/" +
                          card.date[0][1]
                          + " às " +
                          (card.date[1][0] - 3)
                          + "h" +
                          card.date[1][1]
                        }
                      </td>
                    </tr>
                  ))
                }
                </tbody>
              </table>
          }
        </OrdersContainer>
      </main>
      <Footer />
    </Container>
  )
}