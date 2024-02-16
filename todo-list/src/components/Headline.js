const Headline = ({ headline }) => {
  return (
    <h1 className="text-center text-white p-5">
      {headline} <i className="bi bi-card-checklist"></i>
    </h1>
  );
};

export default Headline;
