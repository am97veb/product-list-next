export default async function fetchApi() {
  const response = await fetch(process.env.API_URL || "", {
    headers: {
      "x-api-key": process.env.API_KEY || "",
    },
  });

  const data = await response.json();
  return data;
}
