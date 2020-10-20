const port = process.env.PORT || 3000

export const environment = {
  production: true,
  SOCKET_ENDPOINT: `http://localhost:${port}`
};
