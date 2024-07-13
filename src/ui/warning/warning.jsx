import './warning.css'
import { MdError } from "react-icons/md";
import { IoIosWarning } from "react-icons/io";
import { AiFillLike } from "react-icons/ai";

export default function Warning({ message, type = "error" }) {
    const getClassByType = () => {
        switch (type) {
            case "error":
                return '#E7221C';
            case "warning":
                return '#D4AC0D';
            case "success":
                return '#6AC324';
            default:
                return 'error';
        }
    };
    return (
        <div className="warningClass" style={{color: getClassByType(), borderColor: getClassByType()}}>
            {message}
            {type === "error" && <MdError color='#E7221C' />}
            {type === "warning" && <IoIosWarning color='#D4AC0D' />}
            {type === "success" && <AiFillLike color='#6AC324' />}
        </div>
    );
}
