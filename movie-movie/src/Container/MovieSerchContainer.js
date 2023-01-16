import React, { Fragment, useState } from "react";
import { Input, Row, Col } from "antd";
import MovieCard from "../Component/MovieCard";
import axios from "axios";

const { Search } = Input;

const MovieSearchContainer = () => {
    const [query, setQuery] = useState("");//query는 state값, setQuery는 state값을 변경하는 함수
    const [items, setItems] = useState();
    const handleQuery = (e) => {
        setQuery(e.target.value);
    }
    const onKeyPress = (e) =>{
        if(e.key=='Enter'){
            handleButton();
        }
    }

    const handleButton = async () => {
        try {
            const res = await axios.get(`http://localhost:3001/naver/getNaverMovie`, {
                params: {
                    query: query
                }
            });
            if (res && res.status === 200) {
                const { data } = res;
                console.log(data);
                setItems(data.items);
            }
        }
        catch (e) {
            console.log('error', e);
        }
    };
    return (
        <Fragment>
            <div style={{ display: 'flex', margin: '0px auto', padding: '2rem', width: '200px' }}>
                <Search
                    placeholder="영화를 검색해 보세요."
                    onSearch={(value) => console.log(value)}
                    onChange={handleQuery}
                    onClick={handleButton}
                    onKeyDown={onKeyPress}
                />
            </div>
            <div>
                <Row>
                    {items && items.map((item) => {
                        return (
                            <Col xs={24} sm={12} md={6} lg={4} xl={4}>
                                <MovieCard item={item}></MovieCard>;
                            </Col>
                        );
                    })}
                </Row>
            </div>
        </Fragment>
    );

};
export default MovieSearchContainer;