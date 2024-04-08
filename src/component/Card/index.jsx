import { Card, Typography, Row, Col } from 'antd';
import { Link } from "react-router-dom";
import './styles.css'
const { Title } = Typography;
import img from '../../assets/image.jpg'
const CardComponent = ({ title, imageUrl, id }) => {
    return (
        <Card
            hoverable
            style={{ width: 230, height: 300 }}
            cover={<img alt="example" src={imageUrl ||img }/>}  >
            <Title level={5}>{title}</Title>
            <Link to={`/profile/${id}`} target="_self">
                View Profile
            </Link>
        </Card>
    );
};
export default CardComponent; 