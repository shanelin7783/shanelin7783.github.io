import styled from "styled-components";

const Container = styled.div`
    background-color: #935c1a;
    font: 86% Microsoft YaHei;
    font-weight: normal;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99999;
    overflow: hidden;
`;

const Header = styled.div`
    width: 100vw;
    position: fixed;
    top: 0;
    font-size: 4vw;
    text-align: center;
    padding: 3vw 3.5vw;
    border-bottom: 1px solid #e69331;
    -moz-box-pack: center;
    justify-content: center;
    -moz-box-align: center;
    align-items: center;
    box-sizing: border-box;
    background-color: #e69331;
`;

const Text = styled.div`
    text-align: center;
    color: #fff;
    text-shadow: rgba(0, 182, 255, 0.8) 0px 1px 5px;
`;

const LoadingContainer = () => (
    <Container id="loadOverlay">
        <Header>
            <Text>載入中...</Text>
        </Header>
    </Container>
);

export default LoadingContainer;
