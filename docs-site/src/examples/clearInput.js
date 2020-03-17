() => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      selected={startDate}
      onChange={date => setStartDate(date)}
    isClearable={true}
      placeholderText="I have been cleared!"
    />
  );
};
