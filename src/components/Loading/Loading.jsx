import "./Loading.css"
import { ReactComponent as LoadingSVG } from "../../assets/Loading/LoadingSVG.svg";


const Loading = () => {
    return (
        <div className="loading">
            <div className="loading__container">
                <div className="loading_div">
                    <LoadingSVG className="loading__svg" />
                </div>
            </div>
        </div>
    )
}

export default Loading

