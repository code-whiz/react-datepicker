() => {
  const [startDate, setStartDate] = useState(new Date());

  let handleColor = time => {
    return time.getHours() > 12 ? "text-success" : "text-error";
  };

  return (
    <DatePicker
    showTimeSelect={true}
      selected={startDate}
      onChange={date => setStartDate(date)}
      timeClassName={handleColor}
    />
  );
};
