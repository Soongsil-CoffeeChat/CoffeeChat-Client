import React from "react";

interface IconProps {
  fill: string;
}

const MyIcon = ({ fill }: IconProps) => (
  <svg
    width="3.5rem"
    height="3.5rem"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.8415 12.9221C17.3183 13.6201 18.5775 14.7066 19.4843 16.0652C20.3911 17.4238 20.9114 19.0035 20.9895 20.6351C20.9998 20.7845 20.9801 20.9346 20.9316 21.0763C20.8832 21.2181 20.8069 21.3488 20.7072 21.4606C20.6075 21.5725 20.4865 21.6634 20.3513 21.7278C20.2161 21.7923 20.0693 21.8291 19.9196 21.8361C19.77 21.8431 19.6204 21.8202 19.4798 21.7686C19.3391 21.717 19.2102 21.6378 19.1005 21.5357C18.9909 21.4336 18.9027 21.3106 18.8412 21.174C18.7797 21.0374 18.7462 20.8898 18.7425 20.7401C18.6607 19.0068 17.9146 17.3717 16.6591 16.174C15.4036 14.9764 13.7351 14.3082 12 14.3082C10.2648 14.3082 8.59633 14.9764 7.34083 16.174C6.08532 17.3717 5.33925 19.0068 5.25747 20.7401C5.23727 21.0334 5.10299 21.3072 4.8834 21.5028C4.66381 21.6984 4.37637 21.8003 4.08262 21.7865C3.78887 21.7728 3.51218 21.6446 3.31178 21.4294C3.11139 21.2142 3.00323 20.929 3.01047 20.6351C3.08826 19.0036 3.60827 17.424 4.51483 16.0653C5.42138 14.7067 6.68035 13.6202 8.15697 12.9221C7.21049 12.1326 6.53017 11.0707 6.20855 9.88092C5.88693 8.69111 5.93963 7.43111 6.35947 6.27231C6.77931 5.11351 7.54592 4.11216 8.55502 3.40448C9.56411 2.6968 10.7667 2.31714 11.9992 2.31714C13.2317 2.31714 14.4343 2.6968 15.4434 3.40448C16.4525 4.11216 17.2191 5.11351 17.639 6.27231C18.0588 7.43111 18.1115 8.69111 17.7899 9.88092C17.4683 11.0707 16.788 12.1326 15.8415 12.9221ZM15.75 8.31256C15.75 7.318 15.3549 6.36417 14.6516 5.66091C13.9484 4.95765 12.9945 4.56256 12 4.56256C11.0054 4.56256 10.0516 4.95765 9.34832 5.66091C8.64506 6.36417 8.24997 7.318 8.24997 8.31256C8.24997 9.30712 8.64506 10.2609 9.34832 10.9642C10.0516 11.6675 11.0054 12.0626 12 12.0626C12.9945 12.0626 13.9484 11.6675 14.6516 10.9642C15.3549 10.2609 15.75 9.30712 15.75 8.31256Z"
      fill={fill}
    />
  </svg>
);

export default MyIcon;
