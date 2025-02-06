'use client';

import { useState } from 'react';
import { Input, Select, SelectItem, Button } from '@nextui-org/react';
import { motion } from 'framer-motion';

type CurrencyCode = 'USD' | 'INR' | 'EUR' | 'GBP' | 'JPY' | 'AUD' | 'CAD' | 'CNY' | 'BRL' | 'CHF';

// Fixed exchange rates based on USD
const EXCHANGE_RATES: Record<CurrencyCode, number> = {
  USD: 1,
  INR: 86.56,  // As per current rate
  EUR: 0.92,   // Example rates
  GBP: 0.79,
  JPY: 148.42,
  AUD: 1.52,
  CAD: 1.35,
  CNY: 7.19,
  BRL: 4.97,
  CHF: 0.87
};

export default function CurrencyCalculator() {
  const [amount, setAmount] = useState('1');
  const [fromCurrency, setFromCurrency] = useState<CurrencyCode>('USD');
  const [toCurrency, setToCurrency] = useState<CurrencyCode>('INR');
  const [convertedAmount, setConvertedAmount] = useState('86.56'); // Initial conversion for 1 USD to INR

  const popularCurrencies = [
    { label: 'US Dollar', value: 'USD' as CurrencyCode },
    { label: 'Indian Rupee', value: 'INR' as CurrencyCode },
    { label: 'Euro', value: 'EUR' as CurrencyCode },
    { label: 'British Pound', value: 'GBP' as CurrencyCode },
    { label: 'Japanese Yen', value: 'JPY' as CurrencyCode },
    { label: 'Australian Dollar', value: 'AUD' as CurrencyCode },
    { label: 'Canadian Dollar', value: 'CAD' as CurrencyCode },
    { label: 'Chinese Yuan', value: 'CNY' as CurrencyCode },
    { label: 'Brazilian Real', value: 'BRL' as CurrencyCode },
    { label: 'Swiss Franc', value: 'CHF' as CurrencyCode },
  ];

  const handleConvert = () => {
    if (!amount || !fromCurrency || !toCurrency) return;

    const baseAmount = parseFloat(amount);
    if (isNaN(baseAmount)) return;

    // Convert to USD first (as base currency)
    const usdAmount = fromCurrency === 'USD' 
      ? baseAmount 
      : baseAmount / EXCHANGE_RATES[fromCurrency];

    // Convert from USD to target currency
    const result = toCurrency === 'USD'
      ? usdAmount
      : usdAmount * EXCHANGE_RATES[toCurrency];

    setConvertedAmount(result.toFixed(2));
  };

  // Auto-convert when any input changes
  const handleAmountChange = (value: string) => {
    setAmount(value);
    setTimeout(handleConvert, 0);
  };

  const handleFromCurrencyChange = (value: string) => {
    setFromCurrency(value as CurrencyCode);
    setTimeout(handleConvert, 0);
  };

  const handleToCurrencyChange = (value: string) => {
    setToCurrency(value as CurrencyCode);
    setTimeout(handleConvert, 0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-4 max-w-xl mx-auto"
    >
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Amount</label>
          <Input
            type="number"
            value={amount}
            onChange={(e) => handleAmountChange(e.target.value)}
            placeholder="Enter amount"
            size="lg"
            className="w-full"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">From</label>
            <Select
              selectedKeys={[fromCurrency]}
              onChange={(e) => handleFromCurrencyChange(e.target.value)}
              size="lg"
              className="w-full"
            >
              {popularCurrencies.map((currency) => (
                <SelectItem key={currency.value} value={currency.value}>
                  {currency.label} ({currency.value})
                </SelectItem>
              ))}
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">To</label>
            <Select
              selectedKeys={[toCurrency]}
              onChange={(e) => handleToCurrencyChange(e.target.value)}
              size="lg"
              className="w-full"
            >
              {popularCurrencies.map((currency) => (
                <SelectItem key={currency.value} value={currency.value}>
                  {currency.label} ({currency.value})
                </SelectItem>
              ))}
            </Select>
          </div>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl text-center">
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
            Converted Amount
          </div>
          <div className="text-4xl font-bold">
            {convertedAmount} {toCurrency}
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            1 {fromCurrency} = {(EXCHANGE_RATES[toCurrency] / EXCHANGE_RATES[fromCurrency]).toFixed(4)} {toCurrency}
          </div>
        </div>

        <Button
          className="w-full h-12 bg-blue-500 text-white"
          onClick={handleConvert}
          size="lg"
        >
          Convert
        </Button>
      </div>
    </motion.div>
  );
} 