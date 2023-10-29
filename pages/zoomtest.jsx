import { useEffect, useRef, useState } from "react";
import { TransformWrapper, TransformComponent, useTransformContext, useControls } from "react-zoom-pan-pinch";
import pStyle from "@/styles/parent.module.css"

const Example = () => {

  // const ref = useRef()
  // useEffect(() => {
  //   console.log(ref.current)
  //   ref.current.addEventListener("click", (ev) => console.log('ev', ev), { capture: false })

  //   const test = document.getElementById("testt")
  //   console.log(test)
  //   test.addEventListener("mouseover", (ev) => { console.log(ev) }, { capture: true })
  // }, [])

  // const context = useTransformContext();
  // const {instance, zoomIn, zoomOut, ...rest } = useControls();
  // console.log(context, instance , rest)
  const [defaultZoom, setDefaultZoom] = useState(0);
  const [marginTop, setmarginTop] = useState(0);
  const [imageHeight, setimageHeight] = useState(0)

  useEffect(() => {
    const { innerHeight, innerWidth } = window;
    const imageHeight = innerWidth / 3.55;
    const defaultZoom = innerHeight / imageHeight;
    setDefaultZoom(+defaultZoom.toFixed(2))

    const mt = (innerHeight - imageHeight) / 2;
    setmarginTop(mt)
    setimageHeight(imageHeight)
    console.log(innerHeight, imageHeight, + defaultZoom.toFixed(2))
  }, [])



  return (
    <div className="h-screen">
      {
        defaultZoom && (
          <TransformWrapper
            initialScale={defaultZoom}
            minScale={defaultZoom}
            centerOnInit={true}
            // panning={{ lockAxisY: true }}
            onPanning={({centerView,instance,state,...rest}) => {
              console.log({state,imageHeight,marginTop},((marginTop * state.scale) + (imageHeight * state.scale)))
              instance.bounds.maxPositionY = -(marginTop * state.scale)
              instance.bounds.minPositionY = -(((marginTop + imageHeight) * state.scale) - innerHeight)
              // instance.bounds.minPositionY = -300
             }}
            //  onZoomStop={(e) => console.log(e)}
            // maxPositionY={-635}
            // minPositionY={635}
            // limitToBounds={true}
            // bounds={{
            //   top: 600,
            //   right: 100
            // }}
            // centerZoomedOut={true}
            // smooth={true}

            // defaultScale={1}
            // defaultPosiyionY={0}
            // defaultPosiyionX={0}

            // onZoomStop={(a, b) => console.log(a, b)}
            // onInit={(a, b) => console.log(a, b)}
          >
            <>
              <TransformComponent>
                <div className={`w-screen h-screen relative grid place-content-center`}>
                  <button
                    className="absolute group transition-all"
                    style={{
                      width: 220 / defaultZoom + "px",
                      // top: 498 / defaultZoom + "px",
                      top: marginTop + (imageHeight * 0.23) + "px",
                      left: "7.5%"
                    }}
                    onClick={() => console.log('hiiiii')}
                    onMouseOver={() => console.log("button hover")}
                  >
                    <img
                      src="./donap-village-building-1.png"
                      className="w-full h-full transition group-hover:scale-105"
                      width={150}
                      onMouseOver={() => console.log('hover')}
                    />
                  </button>
                  <img className="top-0 left-0 w-full" src="./donap-village.jpg" />
                </div>
              </TransformComponent>
            </>
          </TransformWrapper>
        )
      }
    </div>
  );
};

export default Example;