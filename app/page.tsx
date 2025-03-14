import Spline from "@splinetool/react-spline/next";

export default function Home() {
  return (
    <main>
      <div className="spline ">
        <h1 className="absolute inset-0 flex items-center justify-center text-[30px] mx-[30px]">
        I created this website to post my AI improvement from the start.
        </h1>

        <div className="spline-object h-[100vh] bg-black">
          <Spline scene="https://prod.spline.design/aDldIx0Simj08Vse/scene.splinecode" />
        </div>
      </div>
      <div className=" text-white text-center mt-[100px] text-[30px] font-bold">
        Lets Get started.
        </div>
        <ul className="text-white text-center mt-[100px] text-[30px] font-bold">
          <li>1. Click on the 3D model</li>
        </ul>
    </main>
  );
}
