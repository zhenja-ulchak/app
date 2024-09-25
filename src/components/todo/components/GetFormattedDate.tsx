const GetFormattedDate = () => {
    const currentDate = new Date();
    const Year = currentDate.getFullYear();
    const Day = String(currentDate.getDate()).padStart(2, '0');
    const Month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const Hours = String(currentDate.getHours()).padStart(2, '0');
    const Minutes = String(currentDate.getMinutes()).padStart(2, '0');
    const Seconds = String(currentDate.getSeconds()).padStart(2, '0');
    return `${Year}-${Month}-${Day} ${Hours}:${Minutes}:${Seconds}`;
  };

  export default GetFormattedDate