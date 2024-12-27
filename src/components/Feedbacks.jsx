import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion"; 
import { testimonials } from "../constants";

const FeedbackCard = ({ link, logo, name }) => (
  <motion.div
    variants={textVariant()}
    className='bg-black-200 p-5 rounded-3xl xs:w-[320px] w-full flex items-center gap-4'
  >
    {/* Display logo */}
    <img src={logo} alt={`${name} logo`} className="w-10 h-10 object-cover rounded-full" />

    {/* Display clickable platform name */}
    <a href={link} target="_blank" rel="noopener noreferrer">
      <p className='text-white font-bold text-[18px] hover:underline'>{name}</p>
    </a>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>Coding Platforms</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
