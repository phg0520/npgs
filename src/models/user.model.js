const users = [];

export const addUser = (user) => {
  users.push(user)
};

export const removeUser = (socketId) => {
  const index = users.findIndex((user) => user.socketId === socketId);
  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
}

export const getUser = () => {
  return users;
};

// 추가적으로 필요한 사용자 관련 메소드를 추가할 수 있습니다.
