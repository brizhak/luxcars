import React, { useEffect, useState }  from 'react';
import { fetchCarById } from 'services/api';
import { ModalContainer, Backdrop, XIcon, CarImg, DescriptionText, AccentText, CarDetails } from './ModalWindow.styled';


export const ModalWindow = ({carId, closeModal}) => {
  const [car, setCar] = useState('')
  useEffect(()=> {
     const fetchCar = async() => {
      try {
        const result = await fetchCarById(carId)
        setCar(result)
      } catch(e) {
        alert(e.message)
      }
     }
     fetchCar()
  }, [carId])
  return (
    <Backdrop onClick={closeModal}>
    <ModalContainer>
      <XIcon onClick={closeModal}/>
      <div>
        <CarImg src={car.img} alt={car.model} />
        <DescriptionText>
          {car.make} {<AccentText>{car.model}</AccentText>}, {car.year}
        </DescriptionText>
        <CarDetails>
          <DescriptionText>
            {car.address && car.address.split(', ')[1]},{' '}
            {car.address && car.address.split(', ')[2]}
          </DescriptionText>
          <DescriptionText>{' '} {car.rentalCompany}</DescriptionText>
          <DescriptionText>{' '}{car.type}</DescriptionText>
        </CarDetails>
      </div>
    </ModalContainer>
  </Backdrop>
  )
 
  };

export default ModalWindow;
