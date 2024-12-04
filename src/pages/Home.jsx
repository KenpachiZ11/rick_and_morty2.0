import React from 'react';


export const Home = () => {
  return (
    <div>Home</div>
  )
}

// import React, { useRef } from "react";
// import { useScreenshot, createFileName } from "use-react-screenshot";

// export default function App() {
//   const ref = useRef(null);

//   const [image, takeScreenShot] = useScreenshot({
//     type: "image/jpeg",
//     quality: 1.0
//   });

//   const download = (image, { name = "img", extension = "jpg" } = {}) => {
//     const a = document.createElement("a");
//     a.href = image;
//     a.download = createFileName(extension, name);
//     a.click();
//   };

//   const downloadScreenshot = () => takeScreenShot(ref.current).then(download);

//   return (
//     <div>
//       <button onClick={downloadScreenshot}>Download screenshot</button>
//       <h1>Charts</h1>


//     <div 
//       style={{ height: '100px', background: 'red', width: '200px' }}
//       ref={ref}
//     >
//       hello world

//     </div>
//     </div>
//   );
// }