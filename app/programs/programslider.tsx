// 'use client';

// import React, { useState } from "react";
// import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

// export interface ProgramSliderProps {
//   step: number;
//   isFinished: boolean;
//   onClick?: () => void;
// }

// const datasl = ['', '', '', '', ''];

// export const ProgramSlider: React.FC<ProgramSliderProps> = ({ step, isFinished, onClick }) => {
//   const [currentStep, setCurrentStep] = useState(step);

//   function handleBack() {
//     if (currentStep > 0) {
//       setCurrentStep(currentStep - 1);
//       onClick && onClick();
//     }
//   }

//   function handleFront() {
//     if (currentStep < datasl.length - 1) {
//       setCurrentStep(currentStep + 1);
//       onClick && onClick();
//     }
//   }

//   return (
//     <div className="flex justify-between m-6">
//       <div>
//         <div className="flex gap-3">
//           {datasl.map((data, index) => (
//             <div key={index}>
//               {currentStep === index ? (
//                 <div className="bg-green-600 h-1 w-9 rounded-full"></div>
//               ) : (
//                 <div className="bg-gray-600 h-1 w-5 rounded-full"></div>
//               )}
//             </div>
//           ))}
//         </div>
//         <div>
//           {/* You can add additional elements here if needed */}
//         </div>
//       </div>
//       <div>
//         <div className="flex gap-5">
//           <div onClick={handleBack} className="bg-gray-600 rounded-full p-3 cursor-pointer">
//             <BiLeftArrowAlt className="h-8 w-16" />
//           </div>
//           <div onClick={handleFront} className="bg-gray-600 rounded-full p-3 cursor-pointer">
//             <BiRightArrowAlt className="h-8 w-16" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


'use client';

import React, { useState } from "react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

export interface ProgramSliderProps {
  initialStep?: number;
  isFinished: boolean;
}

const datasl = ['', '', '', '', ''];

export const ProgramSlider: React.FC<ProgramSliderProps> = ({ initialStep = 0, isFinished }) => {
  const [currentStep, setCurrentStep] = useState(initialStep);

  function handleBack() {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else if (currentStep === 0) {
      setCurrentStep(datasl.length - 1);
    }
  }

  function handleFront() {
    if (currentStep < datasl.length - 1) {
      setCurrentStep(currentStep + 1);
    } else if (currentStep === datasl.length - 1) {
        setCurrentStep(0);
        }
  }

  return (
    <div className="flex justify-between m-6">
      <div className="mt-8">
        <div className="flex gap-3">
          {datasl.map((data, index) => (
            <div key={index}>
              {currentStep === index ? (
                <div className="bg-green-600 h-1 w-9 rounded-full"></div>
              ) : (
                <div className="bg-gray-600 h-1 w-5 rounded-full"></div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="flex gap-5">
          <div onClick={handleBack} className="bg-gray-600 rounded-full p-3 cursor-pointer">
            <BiLeftArrowAlt className="h-10 w-10" />
          </div>
          <div onClick={handleFront} className="bg-gray-600 rounded-full p-3 cursor-pointer">
            <BiRightArrowAlt className="h-10 w-10" />
          </div>
        </div>
      </div>
    </div>
  );
}

