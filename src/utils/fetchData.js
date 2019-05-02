
const fetchData = async (url, headers) => {
  // fires and fetches after dom load (so we fetch data only once after original dom is loaded)
      const response = await fetch(url, headers);
      const data = await response.json();
      return data.data;
      
}

export default fetchData;