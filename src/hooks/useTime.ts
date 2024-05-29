const useTime = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const time = date.getHours();
  const minutes = date.getMinutes();
  const currentTime = `${year}.${month}.${day}  ${time}:${minutes}시 기준`;
  return currentTime;
};

export default useTime;
