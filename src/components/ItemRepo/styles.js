import styled from "styled-components";

export const ItemContainer = styled.div`

    h3 {
        font-size: 32px;
        color: #FAFAFA;
    }

    p {
        font-size:16px;
        color: #FAFAFA60;
        margin-bottom:20px;
    }

    hr {
        color: #FAFAFA60;
        margin: 20px 0;
    }

    a {
        padding: 2px;
        color: #FFFFFF;
        text-decoration: underline;
        transition: color 0.3s;

        &:hover {
            color: blue;
        }
    }
    
    flex: 0 0 200px;
    margin-right: 12px;
    padding: 16px;
    background-color: #2a2a2a;
    border-radius: 8px;
    transition: transform 0.3s, background-color 0.3s;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);

    &:hover {
        transform: scale(1.05);
        background-color: #333;
    }
`