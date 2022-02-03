import { callFetch } from "../utils/CallFetch";

export async function getTienda(tienda) {
    try {
      const url = `${process.env.HOST_API}/tiendas/${tienda}`;
      const params = {
        method: "GET",
      };
  
      const result = await callFetch(url, params);
      return result ? result : null;
    } catch (error) {
      console.log(error)
    }
  }