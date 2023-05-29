import React, { useState } from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRange } from 'react-date-range';
import { faBed, faPerson, faCalendarDays, faCar, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { format } from 'date-fns'
import styled from 'styled-components';
import { useDispatch,useSelector } from 'react-redux';
import { dateRange, fetchHotelsByCity, persons } from '../store/userSlice';
import { Navigate, useNavigate } from 'react-router-dom';

const Container = styled.div`
  .header{
    background-color: #ffffff;
    color: #e72d9d;
    display: flex;
    justify-content: center;
    position: relative;

}

.headerContainer{
    width: 100%;
    max-width: 1024px;
    margin: 20px 0px 100px 0px;
}


.headerContainer.listMode
{
    margin: 20px 0px 0px 0px;
}


.headerList{
    display: flex;
    gap: 40px;
    margin-bottom: 50px;

}

.headerListItems{
    display: flex;
    align-items: center;
    gap: 10px;
}

.headerListItems.active{
    border: 4px solid #d31ba2;
    padding: 10px;
    border-radius: 20px;

}

.headerDesc{
    margin: 20px 0px;
}

.headerButton{
    background-color: rgb(85, 145, 229);
    color: white;
    font-weight: 500;
    border: none;
    padding: 10px;
    cursor: pointer;
    border-radius: 10px;
}

.headerSearch{
    height: 30px;
    background-color: white;
    border: 3px solid yellow;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px 0px;
    border-radius: 5px ;
    position: absolute;
    bottom: -25px;
    width: 100%;
    max-width: 1024px;
}



.headerIcon{
    color: lightgray;
}

.headerSearchItems{
    display: flex;
    align-items: center;
    gap: 10px;

}

.headerSearchInput{
    border: none;
    outline: none;
}

.headerSearchText{
    color: lightgray
}

.headerBtn{
    background-color: rgb(155, 185, 206) ;
    border: none;
    height: 30px;
    width: 80px;
}

.date{
    position: absolute;    
    top: 50px;
    z-index: 10;
}

.options{
    z-index: 10;
    position: absolute;
    top: 50px;
    background-color: white ;
    color: gray;
    border-radius: 5px;
    -webkit-box-shadow: 0px 0px 10px -5px rgba(0,0,0,0.4);
    box-shadow: 0px 0px 10px -5px rgba(0,0,0,0.4);
}

.optionItems{
    width: 200px;
    display: flex;
    justify-content: space-between;
    margin: 10px;
}


.optionCounter{
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 12px;
    color: black;
}

.optionCounterButton{
    width: 30px;
    height: 30px;
    border: 1px solid rgb(65, 137, 237);
    color: rgb(90, 161, 231);
    cursor: pointer;
    background-color: white;
}

.optionCounterButton:disabled{
    cursor: not-allowed;
}
`;



const Header = () => {
  return (
    <Container>
      <div className='header'>
        <div >
          <div className="headerList">
            <div className="headerListItems active">
              <span>PROJECTS</span>
            </div>
            <div className="headerListItems">
              <span>PRODUCTS</span>
            </div>
            <div className="headerListItems">
              <span>DESIGNWIRE</span>
            </div>
            <div className="headerListItems">
              <span>BEST OF YEAR</span>
            </div>
            <div className="headerListItems">
              <span>SPRING SHOWCASE</span>
            </div>
          </div> 
        </div>
      </div>
    </Container>
  )
}

export default Header