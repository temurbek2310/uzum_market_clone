import styled from "styled-components";

export const ProductWrapper = styled.div`
    width: 232px;
    transition: all .3s ease-in-out;
    border-radius: 10px;

    &:hover{
        transition: all .3s ease-in-out;
        box-shadow: rgba(0,0,0,0.1) 0px 4px 12px;
    }

    .product__top{
        position: relative;

        &--img{
            width:100%;
            height: auto;
            border-radius: 10px;
        }

        &--sub{
            position: absolute;
            bottom: 4px;
            left: 0px;
            background-color: #7000ff;
            padding: 2px 8px;
            color: white;
            border-radius: 4px;
        }

        &--btn{
            position: absolute;
            top: 12px;
            right: 10px;
            border: none;
            background: transparent;
            font-size: 18px;

            &:hover{
                cursor:pointer;
            }
        }
    }

    .product__bottom {
        padding: 10px;
        position: relative;

        &--heading{
            font-size: 14px;
            margin-bottom: 5px;
        }

        &--rating{
            margin-bottom: 12px;
            color:#8b8e99;
            i {
                color: #FFd43b;
            }
        }

        &--monthly-payment{
           background-color: #ffff00;
           border-radius: 7px;
           width: fit-content;
           margin-bottom: 8px;
           padding: 2px 5px;
        }

        &--oldPrice{
            font-size: 14px;
            color: #8b8e99;
        }

        &--price{
            font-size: 18px;
        }

        &--btn{
            position: absolute;
            bottom: 10px;
            right: 10px; 
            background: transparent;
            border-radius: 50%;
            padding: 5px 5px;
            border-width: 1px;
            cursor: pointer;
        }
    }
    
`