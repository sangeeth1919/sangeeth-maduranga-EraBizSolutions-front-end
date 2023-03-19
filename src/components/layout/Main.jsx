
import { Layout } from "antd";

import Header from "./Header";
import '../../assest/style.scss';
const {  Content} = Layout;

function Main({ children }) {

    return (
        <div className="main-container">
            <div><Header /></div>
            <Content  className="content-ant">{children}</Content>


        </div>

    );
}

export default Main;
