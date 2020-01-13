const user = async (api, data) => {
  try {
    const response = await fetch(api, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
    if(response.status === 400) {
      const error = await response.json();
      return error;
    } else {
      const result = await response.json();
      return result;
    }
    
  } catch(err) {
    console.log(err);
  }
};

export default user;