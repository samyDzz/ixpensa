import styled from "styled-components";

import AlertSuccessCheck from "../../../assets/icons/AlertSuccessCheck.svg";

const Text = ({ children, ...rest }) => {
    return <TextStyle {...rest}>{children}</TextStyle>;
};

const AlertSuccess = ({ children, ...rest }) => {
    return (
        <Container {...rest}>
            <ImgStyle src={AlertSuccessCheck} alt="success check icon" />
            {children}
        </Container>
    );
};

// linking
AlertSuccess.Text = Text;
export default AlertSuccess;

const ImgStyle = styled.img`
    width: 22px;
    height: 22px;
`;

const TextStyle = styled.span`
    font-family: InterRegular;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: var(--white);
`;

const Container = styled.div`
    width: fit-content;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
    margin-top: 16px;
    margin-bottom: 16px;
    padding: 10px 16px 10px 8px;
    border-radius: 8px;
    background-color: var(--success);
`;
