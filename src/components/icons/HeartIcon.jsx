import { useState } from "react";

const HeartIcon = (props) => {
  const [fill, setFill] = useState("none")

  const changeFill = (e) => {
    e.preventDefault()
    if(e._reactName == "onMouseOver") {
        setFill("#FF0051")
    } else {
        setFill("none")
    }
  }

//   const handleClick = (e) => {
//     e.preventDefault()
//     setFill("#FF0051")
//   }

  return(
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill={fill}
        stroke="currentColor"
        strokeWidth={0.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="cursor-pointer"
        {...props}
        onMouseOverCapture={(e) => { changeFill(e) }}
        onMouseOutCapture={(e) => { changeFill(e) }}
        // onClick={(e) => handleClick(e)}
    >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
    </svg>

  )

};
export default HeartIcon;
