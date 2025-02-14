const VideoPlay = ({ className }) => {
  return (
    <svg className={className} width="85" height="85" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M42.5 85C19.02 85 0 65.97 0 42.5 0 19.02 19.02 0 42.5 0 65.97 0 85 19.02 85 42.5 85 65.97 65.97 85 42.5 85Zm-5.86-57.74a1.68 1.68 0 0 0-.94-.29c-.94 0-1.7.76-1.7 1.7v27.65c0 .33.09.66.28.94.52.78 1.58.99 2.36.47l20.73-13.82c.19-.13.35-.29.47-.47.53-.78.31-1.84-.47-2.36L36.64 27.26Z"
        fill="#FFF"
      />
    </svg>
  );
};
export default VideoPlay;
