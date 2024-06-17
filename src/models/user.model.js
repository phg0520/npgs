let users = {};

export const addUser = ({ uuid, socketId }) => {
  users[uuid] = { socketId, timestamp: Date.now() };
};

export const getUser = (uuid) => {
  return users[uuid];
};

export const removeUser = (uuid) => {
  delete users[uuid];
};

export const getUsers = () => {
  return users;
};
