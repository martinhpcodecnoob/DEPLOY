import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 180px;
    background-color:  #1A1A1A;
    position: relative;
    border: solid;
    border-left-width:0px;
    border-right-width:0px;
    border-top-width:0px;
    border-color: #303030;
    @media screen and (max-width: 960px){
        height: 61px;
    }
`;

export const LogoHora = styled.div`
    height: 10vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 20px;
    div{
        color: #fff;
        display: flex;
        margin-left: 10px;
    }
    img{
        width: 260px;
        height: 130%;
    }
    @media screen and (max-width: 960px){
        display: none;
    }
`;

export const Wrapper = styled.div`
    position: relative;
    top: 30px;
    width: 100%;
    max-width: 1300px;
    height: 30%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: auto;
    @media screen and (max-width: 960px){
        height: 100%;
        top: 0%;
    }
`;


export const LogoContainer = styled(Link)`
    @media screen and (max-width: 960px){
        margin-left: 0.5rem;
        display: flex;
        align-items: center;
        font-size: 1.2rem;
        font-family: sans-serif;
        text-decoration: none;
        p {
            /* &:nth-child(2) {
            color: #fff;
            }
    
            &:nth-child(3) {
            font-size: 1.5rem;
            font-weight: 500;
            color: #e07924;
            } */
            color: #64b2ff;
            font-weight: bold;
            font-size: 2rem;
            margin-bottom: 0;
        }
    
        svg {
            fill: #e07924;
            margin-right: 0.5rem;
        }
    }
    display: none;
`;

export const Search = styled.div`
    max-width: 1300px;
    margin-left: 0.5rem;
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    margin-top:1.6rem;
    @media screen and (max-width: 960px){
        position: absolute;
        top: 0.3rem;
        left: 10rem;
        z-index: 30;
    }
`;

export const Menu = styled.ul`
    /* position: relative; */
    height: 100%;
    display: flex;
    justify-content: space-between;
    list-style: none;

    @media screen and (max-width: 960px) {
        background-color: #1A1A1A;
        position: absolute;
        top: 50px;
        left: ${({ open }) => (open ? "0" : "-100%")}; //Import
        width: 100%;
        height: 90vh;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        transition: 0.5s all ease;
        z-index: 10;
    }
`;

export const MenuItem = styled.li`
    height: 100%;

    @media screen and (max-width: 960px) {
        width: 100%;
        height: 70px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

`;

export const MenuItemLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0.5rem 1.5rem;
    color: #64b2ff;
    font-family: 'Noto Serif', serif;
    font-size: 1rem;
    font-weight: 300;
    cursor: pointer;
    transition: 0.5s all ease;
    text-decoration: none;

    &:hover {
        color: #fff;
        background-color: #e0792a;
        transition: 0.5s all ease;

        div {
        svg {
            fill: #23394d;
        }
        }
    }

    div {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;

        svg {
        display: none;
        fill: #e0792a;
        margin-right: 0.5rem;
        }
    }

    @media screen and (max-width: 960px) {
        width: 100%;

        div {
        width: 30%;
        justify-content: left;

        svg {
            display: flex;
        }
        }
    }

    @media screen and (max-width: 880px) {
        div {
        width: 40%;
        justify-content: left;

        svg {
            display: flex;
        }
        }
    }

    @media screen and (max-width: 500px) {
        div {
        width: 60%;
        justify-content: left;

        svg {
            display: flex;
        }
        }
    }

    @media screen and (max-width: 260px) {
        div {
        width: 100%;
        justify-content: left;

        svg {
            display: flex;
        }
        }
    }
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 960px) {
        display: flex;
        align-items: center;
        cursor: pointer;

        svg {
        fill: #e07924;
        margin-right: 0.5rem;
        }
    }
`;

export const RedesSociales = styled.div`
    display: none;
    @media screen and (max-width: 960px){
        height: 10vh;
        width: 90%;
        display: flex;
        align-items: flex-end;
        a{
            text-decoration: none;
            svg{
                fill: #e07924;
            }
        }
    }
`;