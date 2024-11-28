import styled from "styled-components";

export const CartWrapper = styled.div`
    .cart__inner {
        display: flex;
        gap: 20px;

        &--top {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 20px;    
        }

        .top {
            margin-bottom: 20px;

            span {
                 font-size: 12px;
                 font-color: #7e818c;
                 display: inline-block;
                 margin-bottom: 10px;
            }

            h5 {
                font-size: 18px;

            }
        }

        &--left {
            width: 70%;
            box-shadow: rgba(0, 0, 0, .12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
            padding: 20px 10px;
            margin-bottom: 10px; 
            border-radius: 20px;

            .bottom, .bottom__wrapper, .bottom__wrapper--top, .bottom__wrapper--bottom {
                display: flex;
                gap: 20px;
                
                img {
                    width: 120px;
                    height: 120px;
                }
            }

            .bottom__wrapper--top {
                button {
                    margin-left: auto;
                    border: none;
                    background: transparent;
                    gap: 7px;
                    display: flex;
                    cursor: pointer;
                }
            }
        }

        &--right {
            margin-left: auto;    

            &--top, &--bottom {
                padding: 20px 10px;
                margin-bottom: 10px; 
                border-radius: 20px;
            }

            &--top {
                box-shadow: rgba(0, 0, 0, .12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
                
            }

            &--bottom {
                box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
            }
        }
    }


`;