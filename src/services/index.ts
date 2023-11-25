interface ResponseProps {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export function signIn(): Promise<ResponseProps> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: 'abcdefg',
        user: {
          name: 'Daniel',
          email: 'cunhacb22@gmail.com',
        },
      });
    }, 2000);
  });
}
