import cakeImage from '../img/cake.svg';
import donutImage from '../img/donut.svg';
import iceCreamImage from '../img/ice-cream.svg';

const mockCatalog = [
  { id: 1, name: 'Cake', price: 10, description: 'Delicious chocolate cake', imageUrl: cakeImage },
  { id: 2, name: 'Donut', price: 2.5, description: 'Sweet glazed donut', imageUrl: donutImage },
  { id: 3, name: 'Ice Cream', price: 4.99, description: 'Cold and creamy', imageUrl: iceCreamImage }
];

const getCatalog = async () => {
  // Mimic async behavior
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockCatalog);
    }, 500);
  });
};

export default getCatalog;
