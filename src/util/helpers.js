export const randomNumbers = () => {
    let randomNumbers = ""
    for (let i = 0; i < 5; i++) {
        const random = Math.floor(Math.random() * 10);
        randomNumbers += random
    }
    return randomNumbers
}

export const addCommasToNumber = (number) => {
    if (number === undefined) {
      return ""
    }
    const findDot = number.toString().includes('.')
    if (findDot) {
      const [jeongsu, sosiuuu] = number.toString().split('.')
      return jeongsu.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '.' + sosiuuu
    }
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const dateFormat = (dateString) => {
  const date = new Date(dateString);

  // 년, 월, 일을 가져옵니다.
  const year = date.getFullYear().toString();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  // "YYYY-MM-DD" 형식으로 반환합니다.
  return `${year}-${month}-${day}`;
};