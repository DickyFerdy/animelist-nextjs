const getAnimeResponse = async (resource, query) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`);
  const data = await response.json();
  return data;
}

const getNestedAnimeResponse = async (resource, query, objectProperty) => {
  const response = await getAnimeResponse(resource, query);
  return response.data.flatMap(value => value[objectProperty]);
}

export {
  getAnimeResponse,
  getNestedAnimeResponse
}; 