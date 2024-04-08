import { Typography } from 'antd';
const { Title } = Typography;

const Heading = ({ level, title, color }) => {
    return (
        <Title style={{ margin: "10px 0px", color: color }} level={level} >{title}</Title>
    )
}

export default Heading