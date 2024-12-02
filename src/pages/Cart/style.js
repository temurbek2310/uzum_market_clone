import styled from "styled-components";

export const CartWrapper = styled.div`
    // padding: 30px 0px;
    .cart__title {
        font-family: 'Inter', sans-serif;
        font-size: 1.375rem;
        line-height: 1.2em;
        font-weight: 600;
        color: var(--text-gray);
        margin: 24px 0px;

        span {
            color: #7e818c;
        }
    }
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

        &--bottom {
            hr {
                background-color: #36374013;
                border-width: 1px;
            }

            .bottom__top {
                padding: 10px 0px;
                
                span {
                    margin: 2px 0px;
                    font-size: 12px;
                    font-family: 'Inter', sans-serif;
                    color: #7e818c;
                }
                
                h5 {
                    font-family: 'Inter', sans-serif;
                    font-size: 18px;
                    font-weight: 600;
                    margin: 4px 0px;
                }
            }
        }

        &--left {
            width: 70%;
            border: 1px solid rgba(54,55,64,.2);
            box-shadow: rgba(0, 0, 0, .12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
            padding: 20px 15px;
            margin-bottom: 10px; 
            border-radius: 20px;

            &--top {
                display: flex;
                align-items: center;
                gap: 10px;

                input[type="checkbox"] {
                    display: none;
                }

                label {
                    width: 18px;
                    height: 18px;
                    display: inline-block;
                    // background-color: #e6e8ed;
                    border: 2px solid #ccc;
                    border-radius: 4px;
                    cursor: pointer;
                    position: relative;
                    transition: background-color 0.3s, border-color 0.3s;
                }

                input[type="checkbox"]:checked + label {
                    background-color: #7c4dff;
                    border-color: #7c4dff;
                }

                input[type="checkbox"]:checked + label::after {
                    content: '✔';
                    color: white;
                    font-size: 12px;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    font-weight: bold;
                }
            }

            .bottom, .bottom__wrapper, .bottom__wrapper--top, .bottom__wrapper--bottom {
                display: flex;
                gap: 20px;
                align-items: center;
                
                img {
                    width: 120px;
                    height: 120px;
                }
            }

            .bottom {
                display: flex;
                align-items: center;
                gap: 20px;
                padding-bottom: 20px;
                position: relative;

                .bottom__wrapper {
                    padding: 30px 0px;
                }

                div {
                    width: inherit;
                    height: inherit;
                }

                input[type="checkbox"] {
                    display: none;
                }

                label {
                    width: 18px;
                    height: 18px;
                    display: inline-block;
                    // background-color: #e6e8ed;
                    border: 2px solid #ccc;
                    border-radius: 4px;
                    cursor: pointer;
                    position: relative;
                    transition: background-color 0.3s, border-color 0.3s;
                }

                input[type="checkbox"]:checked + label {
                    background-color: #7c4dff;
                    border-color: #7c4dff;
                }

                input[type="checkbox"]:checked + label::after {
                    content: '✔';
                    color: white;
                    font-size: 12px;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    font-weight: bold;
                }

                .bottom__wrapper--top {
                    margin-bottom: 1rem;

                    h6 {
                        font-size: 16px;
                        font-family: 'Inter', sans-serif;
                        font-weight: 500;
                        color: #1f2026;
                    }

                    button {
                        position: absolute;
                        margin-left: auto;
                        right: 0;
                        border: none;
                        background: transparent;
                        gap: 7px;
                        display: flex;
                        cursor: pointer;
                        
                        i {
                            font-size: 16px;
                            color: #4d4f59;
                        }

                        span {
                            font-size: 16px;
                            color: #4d4f59;
                        }
                    }
                }

                .bottom__wrapper--bottom {
                    .seller__wrapper {
                        display: flex;
                        gap: 5px;
                            

                        span {
                            color: #7e818c;
                            font-family: 'Inter', sans-serif;

                        }

                        a {
                            font-family: 'Inter', sans-serif;
                        }
                    }

                    .count {
                        display: flex;
                        align-items: center;

                        button {
                            width: 40px;
                            height: 40px;
                            font-size: 20px;
                            font-family: 'Roboto', sans-serif;
                            background: transparent;
                            border: 2px solid rgba(54,55,64,.2);
                            cursor: pointer;
                        }

                        .plus, .quantity {
                            border-right: none;
                        }

                        .minus, .quantity {
                            border-left: none;
                        }
                    }

                    }
                    .price {
                        font-family: 'Inter', sans-serif;
                        position: absolute;
                        right: 0;
                        // margin-bottom: 1rem;
                        
                        p {
                           font-size: 12px; 
                           line-height: 20px;
                           text-align: right;
                           color: #7f4dff;
                           font-weight: 600;
                        }

                        h3 {
                            font-size: 20px;
                            font-family: 'Inter', sans-serif;
                            color: #7f4dff;
                            line-height: 24px;
                            font-weight: 600;
                            width: fit-content;
                            margin-left: auto;
                        }

                        .oldPrice {
                            font-size: .875rem;
                            line-height: 1.5em;
                            text-decoration-line: line-through;
                            color: #7e818c;
                            margin-left: auto;
                            width: fit-content;
                        }
                    }
            }
            

        }

        &--right {
            margin-left: auto;    

            &--top, &--bottom {
                padding: 20px 10px;
                margin-bottom: 10px; 
                border-radius: 15px;
            }

            &--top {
                box-shadow: rgba(0, 0, 0, .12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
                padding: 1rem 1.25rem 1.25rem;

                h6 {
                    font-size: 16px;
                    font-family: 'Inter', sans-serif;
                    font-weight: 600;
                    color: #1f2026;
                    line-height: 1.75rem;
                    margin-bottom: 14px;
                }

                p {
                    font-family: 'Inter', sans-serif;
                    justify-content: space-between;
                    display: flex;

                    .all {
                        color: #7e818c;
                        text-align: right;
                    }
                }

                button {
                    width: 100%;
                    border: 1px solid #7000ff;
                    background-color: transparent;
                    color: #7000ff;
                    padding: 3px 0px;
                    border-radius: 2px; 
                    margin: 15px 0px;
                    cursor: pointer;
                }

                .total {
                    p {
                        font-family: 'Inter', sans-serif;

                        span {
                            color: #1f2026;
                            font-size: 20px;
                        }
                    }

                    span {
                        color: #00ad3a;
                        text-align: right;
                        display: block;
                        font-family: 'Inter', sans-serif;
                        font-size: 11px;
                        margin-top: 3px;
                    }
                }

                .officialize__btn {
                    background-color: #7000ff;
                    border: none;
                    padding: 15px 0px;
                    cursor: pointer;
                    border-radius: 12px;
                    
                    a {
                        font-family: 'Inter', sans-serif;
                        color: #fff;
                        font-size: 16px;
                    }
                }

            }   

            &--topp {
                display: flex;
                align-items: center;
                gap: 5px;

                span {
                    font-family: 'Inter', sans-serif;
                    font-size: 12px;
                    color: #7e819c; 
                }

                button {
                    background: transparent;
                    border: 2px solid #7f4dff;
                    border-radius: 3px;
                    color: #7f4dff;
                    padding: 2px;
                }
            }

            &--bottom {
                box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
                background-color: #f0f2f5;
                position: relative;

                div {
                    .delivery {
                        font-family: 'Inter', sans-serif;
                        font-size: 14px;
                        font-style: normal;
                        font-weight: 600;
                        line-height: 20px;
                        color: #1f2026;
                        margin-bottom: 10px;
                    }

                    .note {
                        font-family: 'Inter', sans-serif;
                        font-size: 14px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: 20px;
                        color: #4d4f59;
                    }

                    .fa-question {
                        position: absolute;
                        right: 15px;
                        color: #f0f2f5;
                        top: 20px;
                        cursor: pointer;
                        border-radius: 50%;
                        border: 1px solid #7e818c;
                        background-color: #7e818c;
                        padding: 2px 5px;
                    } 

                    progress {
                        width: 100%;
                        height: 5px;
                        overflow: hidden;
                        background-color: #00ad3a;
                    }

                    progress::-webkit-progress-bar {
                        /* Progressning orqa foni (Chrome, Safari) */
                        background-color: white;
                    }

                    progress::-webkit-progress-value {
                        /* To'ldirilgan joy (Chrome, Safari) */
                        background-color: #00ad3a;
                        border-radius: 10px; /* Faqat chap tomonni yumaloqlash */
                    }

                    .bottom {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                    
                        .barrier {
                            color: #00ad3a;
                            font-size: 12px;
                            font-family: 'Inter', sans-serif;
                            font-style: normal;
                            margin-left: 7px;
                            margin-top: 10px;
                            display: flex;
                            gap: 5px;
                        }

                        .barriers {
                            color: #4d4f59;
                            font-size: 12px;
                            font-family: 'Inter', sans-serif;
                            font-style: normal;
                            margin-left: 7px;
                            margin-top: 10px;
                            display: flex;
                            gap: 5px;
                        }
                    }
                }

            }
        }
    }

    :root {
        --text-gray: #1f2026;
        --background: #e6e8ed;
    }

    .empty {
        padding: 80px 0px;

        &__img {
            width: 128px;
            height: 128px;
            display: block;
            margin: 0 auto;
        }

        &__title {
            font-family: 'Inter', sans-serif;
            text-align: center;
            font-size: 1.375rem;
            line-height: 1.2em;
            font-weight: 600;
            color: var(--text-gray);
            margin: 24px 0px;
        }

        &__text {
            font-family: Inter;
            color: var(--text-gray);
            font-size: .950rem;
            text-align: center;
            font-weight: 400;
            line-height: 1.4em;
            margin-bottom: 24px;
            margin-top: 16px;
            white-space: pre-line;
        }

        &__btn {
            border-radius: 4px;
            background-color: var(--background, #e6e8ed);
            color: var(--text-gray);
            cursor: pointer;
            font-family: 'Inter', sans-serif;
            font-size: .875rem;
            font-weight: 500;
            border-width: 0px;
            height: 38px;
            padding: 7px 14px;
            display: block;
            margin: 0 auto;
        }
    }

`;