import Image from "next/image";

export function Mascot() {
  return (
    <div aria-hidden="true" className="group select-none">
      <Image
        src="/pinguin.gif"
        alt=""
        width={180}
        height={175}
        unoptimized
        className="animate-mascot-dance h-14 w-auto lg:h-24 xl:h-28"
      />
    </div>
  );
}

type SideGifProps = {
  src: string;
  width: number;
  height: number;
  className?: string;
  imgClassName?: string;
};

export function SideGif({
  src,
  width,
  height,
  className = "",
  imgClassName = "h-24 w-auto xl:h-28",
}: SideGifProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
    >
      <Image
        src={src}
        alt=""
        width={width}
        height={height}
        unoptimized
        className={`animate-mascot-dance ${imgClassName}`}
      />
    </div>
  );
}
