import styled from "styled-components";

export const HeaderTop = styled.div`
padding: 5px 0;
background-color: rgb(231, 231, 231);

.header__top--inner{
    display: flex;
    align-items: center;
}

// HEADER TOP LEFT START
.header__top--left{
    display: flex;
    align-items: center;
    gap: 30px;

    &-btn{
        border: none;
        background-color: transparent;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 5px;
    }

    &-description span{
        font-weight: bold;
        text-decoration: underline;
    }

    
    // HEADER TOP LEFT END
    
}
    // HEADER TOP RIGHT START
        .header_top--right{
            display: flex;
            align-items: center;
            gap: 30px;
            margin-left: auto;

            a {
                &:hover{
                    color: dimgray;
                    transition: color .3s ease;
                }
            }

            &-link{
                color: blue;
                text-decoration: underline;
            }
            
            form select {
                border: none;
                background-color: transparent;
                cursor: pointer;
                transition: border .3s ease;

                &:hover{
                    border: 1px solid #222
                    transition: border .3s ease;
                 }
            }

            form select option {
                ountline: none;
                border: none;
                background-color: transparent;
            }

            
        }        
    // HEADER TOP RIGHT END
`
export const HeaderMid = styled.div``;
export const Navbar = styled.nav``;