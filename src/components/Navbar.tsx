'use client';

import { Navbar as NextUINavbar, NavbarBrand, NavbarContent, Button } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { SunIcon } from "./icons/SunIcon";
import { MoonIcon } from "./icons/MoonIcon";
import { motion } from "framer-motion";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <NextUINavbar
      maxWidth="xl"
      position="sticky"
      className="border-b border-blue-100 dark:border-blue-900 bg-white/90 dark:bg-gray-950/90 backdrop-blur-lg"
    >
      <NavbarBrand>
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <p className="font-bold text-xl bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 text-transparent bg-clip-text">
            Multi-Mode Calculator
          </p>
        </motion.div>
      </NavbarBrand>

      <NavbarContent justify="end">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <Button
            isIconOnly
            radius="full"
            variant="ghost"
            className="w-10 h-10 bg-blue-50 dark:bg-blue-900/20 transition-all hover:scale-110 hover:bg-blue-100 dark:hover:bg-blue-900/40"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            <motion.div
              initial={false}
              animate={{ rotate: theme === 'dark' ? 180 : 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              {theme === "dark" ? (
                <SunIcon className="w-5 h-5 text-yellow-500 hover:text-yellow-600 transition-colors" />
              ) : (
                <MoonIcon className="w-5 h-5 text-blue-600 hover:text-blue-700 transition-colors" />
              )}
            </motion.div>
          </Button>
        </motion.div>
      </NavbarContent>
    </NextUINavbar>
  );
} 