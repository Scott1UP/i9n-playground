export const sliderTemplate = `import { Slider } from '@base-ui/react/slider';

function MySlider() {
  return (
    <div className="w-64">
      <Slider.Root defaultValue={50} className="relative flex items-center h-5">
        <Slider.Track className="h-1 w-full bg-gray-300 rounded-full">
          <Slider.Indicator className="h-full bg-blue-500 rounded-full" />
          <Slider.Thumb className="block w-4 h-4 bg-white border-2 border-blue-500 rounded-full focus:outline-none" />
        </Slider.Track>
      </Slider.Root>
    </div>
  );
}`;
