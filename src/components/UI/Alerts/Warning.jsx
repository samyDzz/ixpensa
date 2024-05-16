import styled from "styled-components";

const AsideComponent = ({ children, ...rest }) => {
    return <AsideComponentStyle {...rest}>{children}</AsideComponentStyle>;
};

const Text = ({ children, ...rest }) => {
    return <TextStyle {...rest}>{children}</TextStyle>;
};

const AlertWarning = ({ children, ...rest }) => {
    return <Container {...rest}>{children}</Container>;
};

// linking
AlertWarning.Text = Text;
AlertWarning.AsideComponent = AsideComponent;

export default AlertWarning;

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

const AsideComponentStyle = styled.div`
    * {
        color: var(--white);
        font-family: InterRegular;
        font-size: 16px;
    }
`;

const Container = styled.div`
    /* height: 48px; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    border-radius: 8px;
    background-color: var(--warning);
    margin-top: 16px;
    margin-bottom: 16px;
`;
