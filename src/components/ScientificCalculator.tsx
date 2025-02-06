'use client';

import { useState } from 'react';
import { Button } from '@nextui-org/react';
import { motion } from 'framer-motion';

export default function ScientificCalculator() {
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

  const handleFunction = (func: string) => {
    try {
      let result;
      const num = parseFloat(display);
      
      switch(func) {
        case 'sin':
          result = Math.sin(num * Math.PI / 180);
          break;
        case 'cos':
          result = Math.cos(num * Math.PI / 180);
          break;
        case 'tan':
          result = Math.tan(num * Math.PI / 180);
          break;
        case 'log':
          result = Math.log10(num);
          break;
        case 'ln':
          result = Math.log(num);
          break;
        case 'sqrt':
          result = Math.sqrt(num);
          break;
        case 'square':
          result = num * num;
          break;
        default:
          result = num;
      }
      
      setDisplay(result.toFixed(8).replace(/\.?0+$/, ''));
      setEquation('');
      setShouldResetDisplay(true);
    } catch (error) {
      setDisplay('Error');
      setShouldResetDisplay(true);
    }
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

  const buttonClass = "h-12 text-sm font-semibold rounded-lg transition-transform active:scale-95 font-poppins";
  const functionButtonClass = `${buttonClass} bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white`;
  const operatorButtonClass = `${buttonClass} bg-orange-100 hover:bg-orange-200 dark:bg-gray-700 text-orange-600 dark:text-orange-400`;
  const numberButtonClass = `${buttonClass} bg-white hover:bg-orange-50 dark:bg-gray-600 text-orange-900 dark:text-white border border-orange-100 dark:border-gray-500`;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-4"
    >
      <div className="bg-white dark:bg-gray-800 p-4 rounded-xl mb-4 shadow-lg border border-orange-100 dark:border-gray-700">
        <div className="text-right mb-2 text-orange-600 dark:text-orange-400 text-sm h-6 font-poppins">
          {equation}
        </div>
        <div className="text-right text-4xl font-bold mb-2 overflow-hidden font-poppins bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent animate-gradient">
          {display}
        </div>
      </div>

      <div className="grid grid-cols-5 gap-2">
        {/* Scientific Functions */}
        <Button className={functionButtonClass} onClick={() => handleFunction('sin')}>sin</Button>
        <Button className={functionButtonClass} onClick={() => handleFunction('cos')}>cos</Button>
        <Button className={functionButtonClass} onClick={() => handleFunction('tan')}>tan</Button>
        <Button className={functionButtonClass} onClick={() => handleFunction('log')}>log</Button>
        <Button className={functionButtonClass} onClick={() => handleFunction('ln')}>ln</Button>

        <Button className={functionButtonClass} onClick={() => handleFunction('sqrt')}>√</Button>
        <Button className={functionButtonClass} onClick={() => handleFunction('square')}>x²</Button>
        <Button className={operatorButtonClass} onClick={() => handleOperator('^')}>^</Button>
        <Button className={`${buttonClass} bg-red-500 hover:bg-red-600 text-white col-span-2`} onClick={handleClear}>
          Clear
        </Button>

        {/* Numbers and Basic Operators */}
        <Button className={numberButtonClass} onClick={() => handleNumber('7')}>7</Button>
        <Button className={numberButtonClass} onClick={() => handleNumber('8')}>8</Button>
        <Button className={numberButtonClass} onClick={() => handleNumber('9')}>9</Button>
        <Button className={operatorButtonClass} onClick={() => handleOperator('/')}>/</Button>
        <Button className={operatorButtonClass} onClick={() => handleOperator('*')}>×</Button>

        <Button className={numberButtonClass} onClick={() => handleNumber('4')}>4</Button>
        <Button className={numberButtonClass} onClick={() => handleNumber('5')}>5</Button>
        <Button className={numberButtonClass} onClick={() => handleNumber('6')}>6</Button>
        <Button className={operatorButtonClass} onClick={() => handleOperator('-')}>-</Button>
        <Button className={operatorButtonClass} onClick={() => handleOperator('+')}>+</Button>

        <Button className={numberButtonClass} onClick={() => handleNumber('1')}>1</Button>
        <Button className={numberButtonClass} onClick={() => handleNumber('2')}>2</Button>
        <Button className={numberButtonClass} onClick={() => handleNumber('3')}>3</Button>
        <Button className={numberButtonClass} onClick={() => handleNumber('.')}>.</Button>
        <Button className={`${buttonClass} bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white`} onClick={handleEqual}>=</Button>

        <Button className={`${numberButtonClass} col-span-2`} onClick={() => handleNumber('0')}>0</Button>
        <Button className={numberButtonClass} onClick={() => handleNumber('(')}>(</Button>
        <Button className={numberButtonClass} onClick={() => handleNumber(')')}>)</Button>
        <Button className={operatorButtonClass} onClick={() => handleNumber('π')}>π</Button>
      </div>
    </motion.div>
  );
} 