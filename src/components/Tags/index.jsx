import { Container, Tag } from "./style";
import { GoPlus } from "react-icons/go";
import { IoCloseOutline } from "react-icons/io5";

export function Tags({ label, data }) {
    return (
        <Container>
            <label htmlFor="">{label}</label>
            <div>
                <div className="tags">
                    {
                        data.map((tag, index) => (
                            <Tag key={index}>
                                <p>{tag}</p>
                                <button>
                                    <IoCloseOutline size={20} />
                                </button>
                            </Tag>
                        ))
                    }
                </div>
                <div className="addTag">
                    <input
                        type="text"
                        placeholder="Adicionar"
                    />
                    <button>
                        <GoPlus size={20} />
                    </button>
                </div>
            </div>
        </Container>
    )
}