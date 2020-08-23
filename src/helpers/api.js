const baseUrl = 'http://localhost:3001/todos';
const api = async (method = 'GET', uri = '', data = {}) => {
  const args = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
  return fetch(baseUrl + uri, args).then((res) => res.json());
};

export default api;
