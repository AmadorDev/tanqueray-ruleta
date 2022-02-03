import { callFetch } from "../utils/CallFetch";

export async function getSorteo(idTienda) {
    try {
      const url = `${process.env.HOST_API}/sorteos/${idTienda}`;
      const params = {
        method: "GET",
      };
  
      const result = await callFetch(url, params);
      return result ? result : null;
    } catch (error) {
      console.log(error)
    }
  }

  export async function setSorteo(idSorteo) {
    try {
      const url = `${process.env.HOST_API}/sorteos/${idSorteo}`;
      const params = {
        method: "PUT",
      };
  
      const result = await callFetch(url, params);
      return result ? result : null;
    } catch (error) {
      console.log(error)
    }
  }


//   export async function example(logout,id,formData) {
//     try {
//       const url = `${BASE_PATH}/polls/update/`+id;
//       const params = {
//         method: "PUT",
//       };
//       params.body = formData;
      
  
//       const result = await authFetch(url, params, logout);
//       return result ? result : null;
//     } catch (error) {}
//   }