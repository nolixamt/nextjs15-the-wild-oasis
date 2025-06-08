import React from "react";
import Image from "next/image";
import H1 from "@/app/_components/h1";
import image1 from "@/public/about-1.jpg";
import image2 from "@/public/about-2.jpg";

export default function Page() {
  return (
    <div className={"grid grid-cols-5 gap-x-16 gap-y-28"}>
      <div className={"col-span-3 space-y-8"}>
        <H1>Welcome to The Wild Oasis</H1>
        <p>
          Where nature's beauty and comfortable living blend seamlessly. Hidden
          away in the heart of the Italian Dolomites, this is your paradise away
          from home. But it's not just about the luxury cabins. It's about the
          experience of reconnecting with nature and enjoying simple pleasures
          with family.
        </p>
        <p>
          Our 8 luxury cabins provide a cozy base, but the real freedom and
          peace you'll find in the surrounding mountains. Wander through lush
          forests, breathe in the fresh air, and watch the stars twinkle above
          from the warmth of a campfire or your hot tub.
        </p>
        <p>
          This is where memorable moments are made, surrounded by nature's
          splendor. It's a place to slow down, relax, and feel the joy of being
          together in a beautiful setting.
        </p>
      </div>
      <div className={"col-span-2 grid place-items-center"}>
        <Image
          src={image1}
          alt={"family member around the fire in front of cabin"}
          placeholder={"blur"}
          quality={80}
        />
      </div>
      <div className={"col-span-2 grid place-items-center"}>
        <Image
          src={image2}
          alt={"family who manages the cabins"}
          placeholder={"blur"}
          quality={80}
        />
      </div>
      <div className={"col-span-3 space-y-8"}>
        <H1>Managed by our family since 1962</H1>
        <p>
          Since 1962, The Wild Oasis has been a cherished family-run retreat.
          Started by our grandparents, this haven has been nurtured with love
          and care, passing down through our family as a testament to our
          dedication to creating a warm, welcoming environment.
        </p>
        <p>
          Over the years, we've maintained the essence of The Wild Oasis,
          blending the timeless beauty of the mountains with the personal touch
          only a family business can offer. Here, you're not just a guest;
          you're part of our extended family. So join us at The Wild Oasis soon,
          where tradition meets tranquility, and every visit is like coming
          home.
        </p>
      </div>
    </div>
  );
}
