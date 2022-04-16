import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState('default user');

  useEffect(()=> {
    fetch(url)
      .then((response)=>{
        if(response.status === 200) {
          return response.json();
        } else {
          setIsLoading(false);
          setIsError(true);
        }
      })
      .then((user)=> {
          setIsLoading(false);
          setUser(user);
      }) 
      .catch(error => {
        //catch network errors only
        setIsError(true)
        setIsLoading(false);
        }
      );
  }, []);

  if(isLoading) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    )
  }

  if(isError) {
    return (
      <>
        <h1>Error...</h1>
      </>
    )
  }

  return (
    <>
      <h1>{user.login}</h1>
    </>
  );

};

export default MultipleReturns;
