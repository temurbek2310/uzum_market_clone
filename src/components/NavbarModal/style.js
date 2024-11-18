import styled from "styled-components";

export const NavbarMenu = styled.div`
    position: absolute;
    top:0px;
    left:0px;
    background:white;
    padding: 20px 0px;
    color:black;
    width: 100%;
    height: auto;
    z-index: 100;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

   .navbar__modal--left {
    width: 280px;
    position: relative;


    &::before {
        content: "";
        width:1px;
        height: 100%;
        position: absolute;
        top:0;
        right:0px;
        background: dimgray;
        opacity: 0.3;

    }

        &-link--inner {
                    display:flex;
                    align-items:center;
                    gap:10px;
            }

        &-list {
            list-style:none;

            li {
                padding: 10px 20px 10px 10px;
                      transition: all .3s ease-in-out;

                cursor: pointer;

                &:hover {
                     background: rgb(200, 200, 200);
                    transition: all .3s ease-in-out;
                }
            }

            li a {
                    display:flex;
                    align-items:center;


                    &:hover {
                        h5 {
                                color:#7000FF;

                        
                        }
                    }

            i{
            margin-left:auto;
                opacity: 0.3;
            }


                h5 {
                font-size: 14px;
                }
            }
   }
   
   }
`