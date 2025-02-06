'use client';

import { useState } from 'react';
import { Button } from '@nextui-org/react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

export default function SimpleCalculator() {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');
  const [shouldResetDisplay, setShouldResetDisplay] = useState(false);

  const handleNumber = (num: string) => {
    if (shouldResetDisplay) {
      setDisplay(num);
      setShouldResetDisplay(false);
    } else {
      setDisplay(display === '0' ? num : display + num);
    }
  };

  const handleOperator = (op: string) => {
    setShouldResetDisplay(true);
    setEquation(display + ' ' + op + ' ');
  };

  const handleEqual = () => {
    try {
      // Using Function constructor instead of eval for better security
      // eslint-disable-next-line no-new-func
      const result = new Function('return ' + equation + display)();
      setDisplay(String(result));
      setEquation('');
    } catch (error) {
      setDisplay('Error');
    }
    setShouldResetDisplay(true);
  };

  const handleClear = () => {
    setDisplay('0');
    setEquation('');
    setShouldResetDisplay(false);
  };

  const buttonVariants = {
    hover: { scale: 1.02, transition: { duration: 0.2 } },
    tap: { scale: 0.98, transition: { duration: 0.1 } },
  };

  const displayVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.2 } }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="p-6 bg-white/90 dark:bg-gray-900/90 rounded-3xl"
    >
      <motion.div 
        className="bg-white dark:bg-gray-900 p-6 rounded-2xl mb-6 shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <motion.div 
          className="text-right mb-1 text-gray-600 dark:text-gray-400 text-sm h-6 font-poppins tracking-wide"
          variants={displayVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {equation}
        </motion.div>
        <AnimatePresence mode="wait">
          <motion.div 
            key={display}
            className="text-right text-5xl font-bold mb-2 font-poppins text-gray-900 dark:text-white tracking-tight"
            variants={displayVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {display}
          </motion.div>
        </AnimatePresence>
      </motion.div>

      <div className="grid grid-cols-4 gap-2">
        <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap" className="col-span-2">
          <Button
            className="w-full h-14 bg-red-500 hover:bg-red-600 text-white text-lg font-semibold rounded-xl font-poppins"
            onClick={handleClear}
          >
            Clear
          </Button>
        </motion.div>
        {[
          { symbol: '÷', op: '/', className: 'bg-blue-100 hover:bg-blue-200 dark:bg-blue-900 dark:hover:bg-blue-800 text-blue-600 dark:text-blue-400' },
          { symbol: '×', op: '*', className: 'bg-blue-100 hover:bg-blue-200 dark:bg-blue-900 dark:hover:bg-blue-800 text-blue-600 dark:text-blue-400' },
        ].map((item) => (
          <motion.div key={item.symbol} variants={buttonVariants} whileHover="hover" whileTap="tap">
            <Button
              className={cn(
                "w-full h-14 text-lg font-semibold rounded-xl font-poppins",
                item.className
              )}
              onClick={() => handleOperator(item.op)}
            >
              {item.symbol}
            </Button>
          </motion.div>
        ))}

        {[7, 8, 9, 4, 5, 6, 1, 2, 3].map((num) => (
          <motion.div key={num} variants={buttonVariants} whileHover="hover" whileTap="tap">
            <Button
              className="w-full h-14 bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white text-lg font-semibold rounded-xl shadow-sm font-poppins"
              onClick={() => handleNumber(String(num))}
            >
              {num}
            </Button>
          </motion.div>
        ))}

        {[
          { symbol: '-', className: 'bg-blue-100 hover:bg-blue-200 dark:bg-blue-900 dark:hover:bg-blue-800 text-blue-600 dark:text-blue-400' },
          { symbol: '+', className: 'bg-blue-100 hover:bg-blue-200 dark:bg-blue-900 dark:hover:bg-blue-800 text-blue-600 dark:text-blue-400' },
          { symbol: '=', className: 'bg-blue-500 hover:bg-blue-600 text-white' },
        ].map((item) => (
          <motion.div key={item.symbol} variants={buttonVariants} whileHover="hover" whileTap="tap">
            <Button
              className={cn(
                "w-full h-14 text-lg font-semibold rounded-xl font-poppins",
                item.className
              )}
              onClick={() => item.symbol === '=' ? handleEqual() : handleOperator(item.symbol)}
            >
              {item.symbol}
            </Button>
          </motion.div>
        ))}

        <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap" className="col-span-2">
          <Button
            className="w-full h-14 bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white text-lg font-semibold rounded-xl shadow-sm font-poppins"
            onClick={() => handleNumber('0')}
          >
            0
          </Button>
        </motion.div>
        <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
          <Button
            className="w-full h-14 bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white text-lg font-semibold rounded-xl shadow-sm font-poppins"
            onClick={() => handleNumber('.')}
          >
            .
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
} 