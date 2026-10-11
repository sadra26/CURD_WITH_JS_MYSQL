const response = (statusCode, data, message, res) => {
  const results = [
    {
      statusCode: statusCode,
      message: message,
      header: {
        nim: "1234567890",
        nama: "Al-Zastrouw Sadra",
        kelas: "TI-2A",
      },
      playload: data,
    },
  ];

  res.status(statusCode).json(results);
};

export default response;
