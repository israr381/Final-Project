import Heading from "../Heading";
import { Row, Col } from "antd"
import { Link } from 'react-router-dom';
import Image from '../Image/index';
import img from '../../assets/image.jpg';
import "./styles.css"
const Footer = () => {
    return (
        <>
            <Heading level={4} title=" Recently visited profiles:" />
            <Row gutter={[24, 8]}>
                <Col style={{
                    margin: "12px 0"
                }} >
                    <Link to={`/profile`} >
                        <Image width={30} height={30} imageUrl={img || imageUrl} />
                    </Link>
                </Col>

            </Row>
        </>
    )
}

export default Footer;