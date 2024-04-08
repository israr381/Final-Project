import { Col, Row, Input } from 'antd';
import { Link } from 'react-router-dom';
import Heading from '../Heading';
import { useState } from 'react';
import { fetchCharacters } from '../../app/feature/charactersSlice';
import { useDispatch } from 'react-redux';

const { Search } = Input;

const Header = () => {
    const dispatch = useDispatch()
    const [search, setSearch] = useState('')
    const handleSearch = (value) => {
        const Query = encodeURIComponent(value)
        dispatch(fetchCharacters({ page: 1, query: Query }))
        setSearch('')
    }
    return (
        <>
            <Row justify="space-between" align="middle">
                <Col style={{marginBottom:"4px"}} >
                    <Link to="/">
                        <Heading level={2} color={"white"}  title="Rick and Morty" />
                    </Link>
                </Col>
              
                <Col style={{marginTop:"1.8rem"}}>
                    <Search
                        placeholder="Search Character..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        enterButton
                        size="large"
                        onSearch={handleSearch}

                    />
                </Col>
            </Row>
        </>
    );
};

export default Header;
