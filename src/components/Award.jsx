import { useEffect, useState } from "react";
import { AWARDS } from "./data/Award_data";

export default function AwardsRecognition() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((p) => (p + 1) % AWARDS.length);
    }, 3000);
    return () => clearInterval(t);
  }, []);

  const visible = [
    AWARDS[index % AWARDS.length],
    AWARDS[(index + 1) % AWARDS.length],
    AWARDS[(index + 2) % AWARDS.length],
    AWARDS[(index + 3) % AWARDS.length],
  ];

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="
        max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
        grid grid-cols-1 lg:grid-cols-[2fr_5fr]
        gap-10 items-center
      ">

        {/* LEFT TEXT */}
        <div className="text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0A2540]">
            Our Awards & <br className="hidden lg:block" />
            <span className="text-[#006699]">Recognition</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-[#425466] max-w-sm mx-auto lg:mx-0">
            Celebrating excellence through industry-recognized achievements.
          </p>
        </div>

        {/* CARDS */}
        <div
          className="
            grid
            grid-cols-2
            sm:grid-cols-3
            lg:grid-cols-4
            gap-4 sm:gap-6 lg:gap-8
          "
        >
          {visible.map((item, i) => (
            <div
              key={i}
              className="
                rounded-xl
                p-4 sm:p-5 md:p-6
                border border-[#D9EAF0]
                transition
                hover:shadow-md
              "
              style={{
                backgroundColor: item.bgColor,
                backgroundImage: `url(${item.bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* ICON */}
              <div className="
                w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20
                mx-auto mb-3 sm:mb-4
                bg-white/80 rounded-lg
                flex items-center justify-center
                backdrop-blur
              ">
                <img
                  src={item.icon}
                  alt=""
                  className="max-h-10 sm:max-h-12 md:max-h-14"
                />
              </div>

              <p className="text-xs sm:text-sm font-medium text-[#0A2540] text-center leading-snug">
                {item.title}
              </p>

              <p className="mt-1 text-[11px] sm:text-xs text-[#425466] text-center">
                {item.year}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
