

export async function fetchCars() {
   const headers = {
        'x-rapidapi-key':           
        'b537a111bamshdb70414bfb30b9cp16e0cajsnbce8b8e9e268',
        'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
      }

      const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers: headers,
      });

      const result = await response.json();

      return result;

    }

export const calculateCarRent = (city_mpg: number, year:number) => {
  const basePricePerDay = 50; // base rental price per day in dollars 
  const mileageFactor = 0.1; // Additional rate per mile driven 
  const ageFactor = 0.05; // additional rate per year of vehicle age 

  // calculate additional rate base on mileage and age  
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;



  //calculate total rental rate per day 
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  return rentalRatePerDay.toFixed(0);
};


