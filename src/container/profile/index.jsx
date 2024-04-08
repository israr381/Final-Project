import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"; // Import the useSelector hook
import MainLayout from "../mainLayout";
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Row, Col } from "antd";
import Image from '../../component/Image';
import Heading from '../../component/Heading';
import Typography from '../../component/Typography';
import { fetchSingleCharacter, selectSingleCharacter } from "../../app/feature/charactersSlice";

const Profile = () => {
    const { id } = useParams(); 
    const dispatch = useDispatch();
    const singleCharacter = useSelector(selectSingleCharacter);

    useEffect(() => {
        const fetchCharacter = async () => {
            try {
                dispatch(fetchSingleCharacter(id));
            } catch (error) {
                throw error;
            }
        };
        fetchCharacter();
    }, [dispatch, id]);



   

    return (
        <MainLayout>
            <Row justify="center" style={{ paddingBottom: '20px' }} >
                <Col span={10} offset={1}>
                    <Link to="/" target="_self">
                        <ArrowLeftOutlined /> Back to Homepage
                    </Link>
                </Col>
            </Row>
            <Row justify={"center"}>
                <Col span={9}>
                    <Image width={'100%'} height={400} imageUrl={singleCharacter.image} />
                </Col>
            </Row>
            <Row justify={"center"}>
                <Col span={3}>
                    <Heading level={4} title="Name:" />
                </Col>
                <Col span={3} offset={3} style={{marginTop:"1rem"}}>
                    <Typography title={singleCharacter.name} />
                </Col>
            </Row>
            <Row justify={"center"}>
                <Col span={3}>
                    <Heading level={4} title="Status:" />
                </Col>
                <Col span={3} offset={3}>
                    <Typography title={singleCharacter.status} />
                </Col>
            </Row>
            <Row justify={"center"}>
                <Col span={3}>
                    <Heading level={4} title="Species:" />
                </Col>
                <Col span={3} offset={3}>
                    <Typography title={singleCharacter.species} />
                </Col>
            </Row>
            <Row justify={"center"}>
                <Col span={3}>
                    <Heading level={4} title="Gender:" />
                </Col>
                <Col span={3} offset={3}>
                    <Typography title={singleCharacter.gender} />
                </Col>
            </Row>
            <Row justify={"center"}>
                <Col span={3}>
                    <Heading level={4} title="Location name:" />
                </Col>
                <Col span={3} offset={3}>
                    <Typography title={singleCharacter.location?.name} />
                </Col>
            </Row>
        </MainLayout>
    );
};

export default Profile;
