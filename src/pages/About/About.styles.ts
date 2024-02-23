import styled from "styled-components";

export const AboutHolder = styled.div`
    padding: 20px;
    .hide {
        display: none;
    }
    .show {
        display: block;
    }
`;

export const Title = styled.div`
    font-size: 24px;
`;

export const SubTitle = styled.div`
    font-size: 20px;
`;

export const Instructions = styled.p`
    font-size: 16px;
`;

export const CitationHolder = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const SteamHeading = styled.div`
    cursor: pointer;
`;

export const AnimalName = styled.p`
    margin-top: 10px;
    margin-bottom: 1px;
    margin-left: 10px;
`;

export const AnimalFact = styled.li`
    font-size: 12px;
`;

export const Links = styled.div`
    width: 390px;
    overflow-wrap: break-word;
    a {
        text-decoration: none;
        color: #ff6347;
    }
    a:visited {
        color: tomato;
    }
    a:hover {
        color: #801300;
    }
`;

