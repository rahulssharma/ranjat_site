import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons';
import {useSelector,useDispatch} from "react-redux";
import { logout } from '../store/userSlice';

const Container=styled.div`
    height: 150px;
    width: 100%;
    background-color: #eeb5df;
    font-style: BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;;
    display: flex;
    .navContainer{
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 0  1rem;
        height: 100%;
        width: 100vw;
        color: white;
        span{
            font-weight: 500;
            font-size: 50px;
        }
        .navItems{
            display: flex;
            gap: 1rem;
            button{
                padding: 0.5rem 0.8rem;
                color: #0071c2;
                font-weight: 600;
                border: 1px solid #0071c2;
                &:hover{
                    background-color: #d3e2ed ;
            }
        }
        }
    }
`;
const Navbar = () => {    return (
        <Container>
                <div className="navContainer">
                <Link to="/" style={{color:'inherit',textDecoration:"none"}}>
                    <span >INterior Design</span>
                </Link>
                </div>    
       </Container>
    )
}

export default Navbar