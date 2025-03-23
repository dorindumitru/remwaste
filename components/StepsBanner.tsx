import { steps } from '../constants/steps';

export const StepsBanner = ({ activeStep }: { activeStep: number }) => {
  return (
    <div
      className="flex justify-center items-center p-4 text-white mx-auto w-full max-w-4xl">
      {Object.values(steps).map((step, index) => (
        <div
          key={index}
          className={`flex items-center flex-1 relative ${index < activeStep - 1 ? 'hidden md:flex' : 'flex'}`}
        >
          <div
            className={`mr-2 ${index < activeStep ? 'text-blue-500' : 'text-gray-500'}`}>
            {step.icon}
          </div>
          <div
            className={`text-sm ${index < activeStep ? 'text-white' : 'text-gray-500'}`}>
            {step.name}
          </div>
          {index < Object.values(steps).length - 1 &&
            <div
              className="h-px bg-gray-600 flex-1 mx-2">
            </div>}
        </div>
      ))}
    </div>
  );
}
