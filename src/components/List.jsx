import React from 'react'
import styled from 'styled-components';
import image from '../images/scandinavian-living-room-interior-design-zoom-background.jpg'
const Container=styled.div`
    .photo{
        height: 50px;
        width: 50px;
    }

`;
const List = () => {
  return (
    <div >
      <img className='photo' src={image} alt="" />
    </div>
  )
}

export default List