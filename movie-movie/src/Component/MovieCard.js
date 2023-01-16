import React from "react";
import './MovieCard.scss';
import styled from 'styled-components';
const MovieCard = ({ item }) => {
    var titleReplace = item.title.replace(/(<([^>]+)>)/ig,"");//정규식으로 b태그 제거
    return (
        <div className="movie-card-container" onClick="location.href='https://naver.com';">
            <CardImg image={item.image} />
            <div className="movie-text">
                <h2>{titleReplace}</h2>
                <div>{item.pubDate}년도 출시</div>
                <div className="movie-summary-row">
                    <h5>평점</h5>
                </div>
                <div className="movie-likes">{item.userRating} / 10</div>
            </div>
        </div>
    );
};
const CardImg = styled.div`
    width: 100%;
    height: 200px;
    background-image: url(${(props) => props.image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 111 !important;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    -webkit-mask-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      color-stop(0, rgba(0, 0, 0, 1)),
      color-stop(0.35, rgba(0, 0, 0, 1)),
      color-stop(0.5, rgba(0, 0, 0, 1)),
      color-stop(0.65, rgba(0, 0, 0, 1)),
      color-stop(0.85, rgba(0, 0, 0, 0.6)),
      color-stop(1, rgba(0, 0, 0, 0))
    );
    position: relative;
`;
export default MovieCard;