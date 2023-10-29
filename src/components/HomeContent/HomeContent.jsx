import { motion } from 'framer-motion';
export const HomeContent = () => {
  return (
    <motion.div
      style={{
        fontSize: '30px',
        fontWeight: 'bolder',
        lineHeight: '2',
        textAlign: 'center',
        paddingTop: '200px',
        textShadow: '#558ABB 1px 0 10px',
        color: 'rgb(32, 99, 160)',
        textTransform: 'uppercase',
      }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ ease: 'easeOut', duration: 3, delay: 0.5, type: 'tween' }}
    >
      Welcome to your Phone Book!!! On this web-site you can register and create
      your own contacts book. You will be able to add contacts, delete their,
      find contact with letters in filter. Also, if you have already had an
      account, you can enter login on site. I hope that this site will help you
      to make life easier!!!
    </motion.div>
  );
};
