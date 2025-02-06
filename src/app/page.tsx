'use client';

import { Tabs, Tab, Card } from "@nextui-org/react";
import SimpleCalculator from "@/components/SimpleCalculator";
import ScientificCalculator from "@/components/ScientificCalculator";
import CurrencyCalculator from "@/components/CurrencyCalculator";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen py-8 px-4 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-900"
    >
      <motion.div 
        className="container mx-auto max-w-4xl"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          duration: 0.3,
          ease: "easeOut"
        }}
      >
        <motion.h1 
          className="text-3xl md:text-4xl font-bold text-center mb-8 text-blue-600 dark:text-blue-400 font-poppins tracking-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          Multi-Mode Calculator
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="p-4 bg-white/80 dark:bg-gray-900/50 rounded-3xl shadow-xl"
        >
          <Card className="shadow-lg bg-white dark:bg-gray-900 border border-blue-100 dark:border-gray-800">
            <Tabs 
              aria-label="Calculator modes" 
              size="lg" 
              color="primary"
              variant="solid"
              classNames={{
                base: "w-full p-0",
                tabList: "p-0 gap-4 bg-blue-50 dark:bg-gray-800 rounded-none border-b-2 border-blue-100 dark:border-gray-700",
                cursor: "bg-white dark:bg-blue-600",
                tab: "max-w-fit h-12 px-6 text-blue-600 dark:text-gray-400 data-[hover=true]:text-blue-700 dark:data-[hover=true]:text-blue-300 font-medium font-poppins",
                tabContent: "group-data-[selected=true]:text-blue-700 dark:group-data-[selected=true]:text-blue-300 font-semibold",
                panel: "p-0",
              }}
            >
              <Tab 
                key="simple" 
                title={<span className="font-poppins">Simple</span>}
              >
                <SimpleCalculator />
              </Tab>
              <Tab 
                key="scientific" 
                title={<span className="font-poppins">Scientific</span>}
              >
                <ScientificCalculator />
              </Tab>
              <Tab 
                key="currency" 
                title={<span className="font-poppins">Currency</span>}
              >
                <CurrencyCalculator />
              </Tab>
            </Tabs>
          </Card>
        </motion.div>

        <motion.p 
          className="text-center mt-8 text-sm text-blue-600 dark:text-blue-400 font-medium tracking-wide font-poppins"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          A modern calculator for all your needs created by Rajdip Mandal
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
