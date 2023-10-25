import { PiAddressBook } from 'react-icons/pi';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div>
      Hello
      <motion.div>
        Welcome to your Phone Book <PiAddressBook />
      </motion.div>
    </div>
  );
}
