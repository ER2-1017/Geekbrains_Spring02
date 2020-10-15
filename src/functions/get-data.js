/**
 * Function sends a GET-request.
 * @param {String} url the path to
 * @param {Object | null} params get-params
 * @return {JSON | null} dataset
 */
async function getDataset(url, params) {
  try {
    const response = await fetch(url, params);
    return response.json();
  } catch (e) {
    console.error(e); // TODO Replace with something better
    return null;
  }
}

export default getDataset;
