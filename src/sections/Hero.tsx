import { CutCornerButton } from "../components/CurCornerButton";
import { Hexagon } from "../components/Hexagon";
import { Circle } from "../components/Circle";

export const HeroSection = () => {
  return (
    <section className="py-24 md:py-52 overflow-x-clip">
      <div className="container">
        <p className="tracking-wider uppercase text-center font-extrabold text-zinc-500">
          Introducing BlackForge
        </p>
        <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-black text-center mt-4 max-w-3xl mx-auto">
          The Future of Blockchain is Here.
        </h1>
        <p className="text-center text-xl md:text-2xl text-zinc-400 mt-6 max-w-xl mx-auto">
          Blackforge is pioneering smart contract integrity with cutting-edge
          data solutions.
        </p>
        <div className="flex justify-center mt-10">
          <CutCornerButton className="-z-10">Get Started</CutCornerButton>
        </div>
        <div className="flex justify-center mt-24">
          <div className="inline-flex relative z-0">
            {/* NOTE: hexagons background */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Hexagon className="size-[1100px]" />
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Hexagon className="size-[1800px]" />
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Circle className="absolute left-[200px] -top-[900px]">
                <img
                  src="/public/assets/images/cube.png"
                  alt="Cube 3D image"
                  className="size-[140px]"
                />
              </Circle>

              <Circle className="absolute left-[200px] top-[270px]">
                <img
                  src="/public/assets/images/cuboid.png"
                  alt="Cuboid 3D image"
                  className="size-[140px]"
                />
              </Circle>

              <Circle className="absolute -left-[600px] -top-[80px]">
                <img
                  src="/public/assets/images/torus.png"
                  alt="Torus 3D image"
                  className="size-[140px]"
                />
              </Circle>
            </div>
            <img
              src="/assets/images/icosahedron.png"
              alt=""
              className="absolute w-[calc(100%+100px)] max-w-none -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 saturate-[10%] brightness-0 hue-rotate-[240deg]"
            />
            <img
              src="/assets/images/icosahedron.png"
              alt="Icosahedron 3D image"
              className="w-[500px]"
            />
          </div>
        </div>
        <div className="flex justify-center flex-col items-center mt-40 md:mt-80">
          <div className="h-10 w-5 outline outline-[6px] outline-fuchsia-500/10 rounded-full inline-flex justify-center pt-2">
            <div className="h-3 w-1 bg-fuchsia-500 rounded-full"></div>
          </div>
        </div>
        <p className="uppercase text-zinc-500 font-extrabold tracking-wider text-center pt-4">
          Scroll to learn more
        </p>
      </div>
    </section>
  );
};
