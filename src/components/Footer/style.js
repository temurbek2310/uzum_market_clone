import styled from "styled-components";

export const FooterWrapper = styled.div`
margin-top: 60px;
    
    .footer__top {
       display: flex;
       margin-bottom: 40px;
       justify-content: space-between;

       &--left {

            &-list {
                display: flex;
                list-style: none;
                gap: 194px;

                &-item {

                    &-heading {
                        margin: 0 0 18px 0;
                        font-size: 17px;
                        font-weight: 600;
                    }
                    
                    a {
                        p {
                            color: #8b8e99;
                            font-size: 14px;
                            margin: 0 0 14px 0;
                            cursor: pointer;
                        }
                    }
                }
            }
       }

       &--right {
            // margin-left: auto;

            h4 {
                font-size: 17px;
                font-weight: 600;
            }

            &-top-wrapper {
                // margin-bottom: 10px;
                padding: 15px 0 30px     0; 
                display: flex;
                gap: 15px;
                align-items: center;

                a {
                    display: flex;
                    align-items: center;
                    // color: #8b8e99;
                    gap: 5px;
                    font-size: 16px;
                }
            }

            &-bottom-wrapper-list {
                margin-top: 15px;
                display: flex;
                align-items: center;
                gap: 10px;
            }

            &-bottom-wrapper {
                h4 {
                    font-size: 17px;
                    font-weight: 600;
                }
            }
       }
   }

   .footer__bottom {
    
        &--left{
            padding: 16px 0px;
            display: flex;
            gap: 16px;
            align-items: center;

            h4 {
                a {
                    font-size: 15px;
                    font-weight: 600;
                    line-height: 18px;
                    letter-spacing: 0.30px;
                }
            }
        }

        &--right { 
            position: relative; 

            blockquote {
                position: absolute;
                font-weight: 400;
                line-height: 14px;
                color: #7e818c;
                right: 0; 
                top: -30px;  
            }
        }
   }
`