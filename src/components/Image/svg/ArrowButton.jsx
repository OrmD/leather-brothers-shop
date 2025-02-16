const ArrowButton = ({ className }) => {
  return (
    <svg className={className} width="75" height="75" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <rect rx="22" width="75" height="75" fill="currentColor" />
      <path d="M38 39v7l8-8-8-8v7h-8v2h8Z" />
    </svg>
  );
};
export default ArrowButton;
