// import React, { useEffect, useState } from 'react';
// import SectionTemplate from 'components/SectionTemplate';
// import { fetchCarsList } from '../../services/api';
// import {
//   MainCarsList,
//   CarCard,
//   ImgContainer,
//   CarImg,
//   HeartIcon,
//   CarDescription,
//   DescriptionText,
//   AccentText,
//   CarDetails,
//   ButtonLearnMore,
//   ButtonLoadMore,
//   ButtonLoadMoreContainer,
// } from './CarsList.styled';
// import ModalWindow from 'components/ModalWindow';

// const CarsList = () => {
//   const [cars, setCars] = useState([]);
//   const [page, setPage] = useState(1);
//   const [visible, setVisible] = useState(true);
//   const [modalWindow, setModalWindow] = useState(false);
//   const [selectedCarId, setSelectedCarId] = useState(null);

//   useEffect(() => {
//     let isMounted = true;

//     const fetchData = async () => {
//       try {
//         const result = await fetchCarsList(page);
//         if (result.length < 12) {
//           setVisible(false);
//         }
//         if (isMounted) {
//           setCars(prevCars => [...prevCars, ...result]);
//         }
//       } catch (e) {
//         alert(e.message);
//       }
//     };

//     fetchData();

//     return () => {
//       isMounted && (isMounted = false);
//     };
//   }, [page]);

//   const handleLoadMore = () => {
//     setPage(page + 1);
//   };

//   const openModal = e => {
//     const id = e.currentTarget.id
//     setSelectedCarId(id);
//     setModalWindow(true);
//   };
//   const closeModal = () => {
//     setSelectedCarId(null);
//     setModalWindow(false);
//   };

//   return (
//     <>
//       <SectionTemplate>
//         <MainCarsList>
//           {cars.map(car => (
//             <CarCard key={car.id} id={car.id}>
//               <ImgContainer>
//                 <CarImg
//                   src={car.img || '../../assets/failIMG.jpg'}
//                   alt={car.make}
//                 />
//                 <HeartIcon />
//               </ImgContainer>

//               <CarDescription>
//                 <DescriptionText>
//                   {car.make} {<AccentText>{car.model}</AccentText>}, {car.year}
//                 </DescriptionText>
//                 <DescriptionText>{car.rentalPrice}</DescriptionText>
//               </CarDescription>
//               <CarDetails>
//                 <DescriptionText>
//                   {car.address && car.address.split(', ')[1]},{' '}
//                   {car.address && car.address.split(', ')[2]}
//                 </DescriptionText>
//                 <DescriptionText>{car.rentalCompany}</DescriptionText>
//                 <DescriptionText>{car.type}</DescriptionText>
//               </CarDetails>
//               <ButtonLearnMore type="button" id={car.id} onClick={openModal}>
//                 Learn more
//               </ButtonLearnMore>
//             </CarCard>
//           ))}
//         </MainCarsList>

//         {visible && (
//           <ButtonLoadMoreContainer>
//             <ButtonLoadMore type="button" onClick={handleLoadMore}>
//               Load more
//             </ButtonLoadMore>
//           </ButtonLoadMoreContainer>
//         )}
//       </SectionTemplate>
//       {modalWindow &&  <ModalWindow carId={selectedCarId} closeModal={closeModal} />}
//     </>
//   );
// };

// export default CarsList;
