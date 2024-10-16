

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
