export const parseList = async (response) => {
    if (response.status !== 200)
      throw Error(response.message || `Error, status ${response.status}`);
    let list = await response.json();
    if (typeof list !== 'object') {
      list = [];
    }
    return list;
};