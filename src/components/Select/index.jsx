import { useState } from "react";
import { Container, Options } from "./style";
import { IoIosArrowDown } from "react-icons/io";

export function Select({ label, className, variant }) {
    const options = [
        "Refeição",
        "Prato principal",
        "Saladas",
        "Bebidas",
        "Sobremesa"
    ]

    const statusOptions = [
        "Pendente",
        "Preparando",
        "Entregue"
    ]

    const [selected, setSelected] = useState(options[0]);
    const [selectedStatus, setSelectedStatus] = useState(statusOptions[0]);

    const [selectStatus, setSelectStatus] = useState("close");

    function toggleSelectStatus() {
        if (selectStatus == "open") {
            return setSelectStatus("close");
        }

        return setSelectStatus("open");
    }

    return (
        <Container 
            $selectStatus={selectStatus}
            $orderstatus={selectedStatus}
            className={className}
        >
            <label htmlFor="">{label}</label>
            <div
                className="select"
                onClick={toggleSelectStatus}
                onBlur={() => toggleSelectStatus()}
            >
                {
                    variant == "status" ?
                    <p className="statusOrder">{selectedStatus}</p>
                    :
                    <p>{selected}</p>
                }
                <IoIosArrowDown size={24} />
            </div>
            <Options $selectStatus={selectStatus}>
                {
                    variant == "status" ?
                    statusOptions.map((statusOption, index) => (
                        <li
                            key={index}
                            data-value={statusOption}
                            onClick={(e) => {
                                setSelectedStatus(e.target.dataset.value)
                                toggleSelectStatus()
                            }}
                        >
                            {statusOption}
                        </li>
                    ))
                    :
                    options.map((option, index) => (
                        <li
                            key={index}
                            data-value={option}
                            onClick={(e) => {
                                setSelected(e.target.dataset.value)
                                toggleSelectStatus()
                            }}
                        >
                            {option}
                        </li>
                    ))
                }
            </Options>
        </Container>
    )
}