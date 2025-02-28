const ArrowButton = ({ className, onClick }) => {
  return (
    <svg className={className} width="75" height="75" fill="currentColor" xmlns="http://www.w3.org/2000/svg" onClick={onClick}>
      <rect rx="22" width="75" height="75" fill="currentColor" />
      <path d="M39 39v7l8-8-8-8v7h-8v2h38Z" />
    </svg>
  );
};
export default ArrowButton;
