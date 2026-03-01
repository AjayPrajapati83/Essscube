"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const StatsCounter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    { label: "Events Completed", value: 150, suffix: "+" },
    { label: "Happy Clients", value: 200, suffix: "+" },
    { label: "Years Experience", value: 3, suffix: "" },
    { label: "Team Members", value: 15, suffix: "+" },
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Counter target={stat.value} isInView={isInView} suffix={stat.suffix} />
              <p className="text-gray-600 font-accent mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Counter = ({ target, isInView, suffix }: { target: number; isInView: boolean; suffix: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <h3 className="text-4xl md:text-5xl font-heading font-bold text-primary">
      {count}{suffix}
    </h3>
  );
};

export default StatsCounter;
