import { styled } from "@hbsis.uikit/react";

const AppStyled = styled.div`
    body {
        background-color: rgb(238, 230, 230);
    }

    .home {
        display: flex;
        flex-direction: row;
    }

    .panel {
        width: 88%;
    }

    .small-panel {
        width: 95%;
    }

    .menu-panel {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export default AppStyled;