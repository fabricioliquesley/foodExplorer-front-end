import { useState } from "react";
import { Container, Options } from "./style";
import { IoIosArrowDown } from "react-icons/io";

export function Select({ label, className }) {
    const options = [
        "Refeição",
        "Prato principal",
        "Saladas",
        "Bebidas",
        "Sobremesa"
    ]

    const [selected, setSelected] = useState(options[0]);
    const [selectStatus, setSelectStatus] = useState("close");

    function toggleSelectStatus(){
        if (selectStatus == "open"){
            return setSelectStatus("close");
        }

        return setSelectStatus("open");
    }

    return (
        <Container $selectStatus={selectStatus} className={className}>
            <label htmlFor="">{label}</label>
            <div 
                className="select" 
                onClick={toggleSelectStatus}
                onBlur={() => toggleSelectStatus()}
            >
                <p>{selected}</p>
                <IoIosArrowDown size={24} />
            </div>
            <Options $selectStatus={selectStatus}>
                {
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