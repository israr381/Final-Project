import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainLayout from "../mainLayout";
import CardComponent from "../../component/Card";
import Pagination from "../../component/Pagination";
import { Col, Row } from "antd";
import { selectData, selectDataStatus, fetchCharacters, selectPagination, selectCurrentQuery } from "../../app/feature/charactersSlice";
import "./style.css"
import {  Spin } from 'antd';

function HomePage() {
    const dispatch = useDispatch();
    const data = useSelector(selectData)
    const status = useSelector(selectDataStatus)
    const pagination = useSelector(selectPagination)
    const currentQuery = useSelector(selectCurrentQuery)

    useEffect(() => {
        dispatch(fetchCharacters({ page: 1, query: currentQuery }))
    }, [currentQuery])

    const fetchCharacter = (page = 1) => {
        dispatch(fetchCharacters({ page, query: currentQuery }))
    }

    return (
        <MainLayout>
            <Row gutter={[0, 30]} style={{gap:"2rem", justifyContent:"center", paddingBottom:"4rem"}}>
                {
                    status === "loading" ? (
                        <p> <Spin size="large" /></p>
                    ) : (
                        status === "failed" ? (
                            <p>failed to fetch!</p>
                        ) : (
                            data?.map((item => (
                                <Col key={item.id}>
                                    <CardComponent
                                        imageUrl={item.image}
                                        title={item.name}
                                        id={item.id}
                                    />
                                </Col>
                            )))
                        )
                    )

                }


            </Row>
            <Row justify="end">
                {pagination && pagination.count > 20 &&
                    <Col span={9}>
                        <Pagination
                            onChange={(page) => {
                                console.log(page, "page data here")
                                fetchCharacter(page);
                            }}
                            total={pagination.count ?? 0}
                            pageSize={20}
                        />
                    </Col>
                }
            </Row>
        </MainLayout>
    );
}

export default HomePage;
