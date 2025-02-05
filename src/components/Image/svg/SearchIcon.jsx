const SearchIcon = ({ className }) => {
  return (
    <svg
      className={className}
      width="32"
      height="32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.33 28c-7 0-12.67-5.68-12.67-12.67 0-7 5.67-12.67 12.67-12.67 6.99 0 12.66 5.67 12.66 12.67 0 6.99-5.67 12.67-12.66 12.67Z"
        stroke="#FFF"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="m29.33 29.33-2.67-2.67"
        stroke="#FFF"
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
};
export default SearchIcon;
