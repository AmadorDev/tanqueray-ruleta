export async function callFetch(url, params) {
  const paramsTemp = {
    ...params,
    headers: {
      ...params?.headers,
      //   Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(url, paramsTemp);
    const result = await response.json();
    return result;
  } catch (error) {}
}
