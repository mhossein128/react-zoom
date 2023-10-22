import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const Example = () => {
  return (
    <TransformWrapper initialScale={4}>
      <TransformComponent >
        <img src="./img2.jpg" className="h-[100vh]" alt="test" />
        {/* <div className="w-[1000px] h-[1000px] bg-gradient-to-r from-blue-600 via-yellow-600 to-red-600"></div> */}
      </TransformComponent>
    </TransformWrapper>
  );
};

export default Example;