import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;
    overflow: hidden;
`;

const LayoutContainer = ({ children }) => {
    return <Container>{children}</Container>;
};

export default LayoutContainer;
