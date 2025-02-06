# Multi-Mode Calculator

A modern, feature-rich calculator application built with Next.js, React, and TypeScript. This project showcases a beautiful, responsive design with multiple calculator modes, smooth animations, and a thoughtful user experience. The entire project was developed using Cursor AI, a powerful AI-powered IDE that enabled rapid development through intelligent code generation and real-time AI assistance.

## Overview

The Multi-Mode Calculator solves the common problem of needing different types of calculations in one accessible place. Instead of switching between multiple apps or websites, users have access to:

- **Simple Calculator**: For everyday arithmetic calculations
- **Scientific Calculator**: For advanced mathematical operations
- **Currency Converter**: For quick currency conversions

## Features

### Visual Design
- Modern, clean interface with carefully chosen color schemes
- Smooth animations and transitions using Framer Motion
- Responsive design that works beautifully on all devices
- Custom animated gradient effects
- Poppins font integration for improved readability
- Light and dark mode support with animated transitions

### Calculator Modes

#### Simple Calculator
- Basic arithmetic operations (+, -, ×, ÷)
- Clean, intuitive interface
- Animated number transitions
- Error handling for invalid operations

#### Scientific Calculator
- Advanced mathematical functions (sin, cos, tan)
- Logarithmic calculations (log, ln)
- Square root and power operations
- Constants (π)
- Parentheses for complex expressions
- Beautiful orange theme with gradient animations

#### Currency Converter
- Support for major world currencies
- Real-time conversion rates
- Clean, user-friendly interface
- Detailed conversion information

### Technical Features
- Server-side rendering with Next.js
- TypeScript for type safety
- Tailwind CSS for styling
- NextUI components
- Framer Motion animations
- Theme switching with next-themes
- Custom utility functions
- Responsive grid layouts

## Technologies Used

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: 
  - Tailwind CSS
  - NextUI
  - Custom animations
- **State Management**: React Hooks
- **Animations**: Framer Motion
- **Font**: Poppins (Google Fonts)
- **Icons**: Custom SVG icons

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/multi-mode-calculator.git
   cd multi-mode-calculator
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/
│   ├── layout.tsx    # Root layout with Poppins font
│   ├── page.tsx      # Main page with calculator modes
│   └── providers.tsx # Theme and UI providers
├── components/
│   ├── SimpleCalculator.tsx
│   ├── ScientificCalculator.tsx
│   ├── CurrencyCalculator.tsx
│   ├── Navbar.tsx
│   └── icons/
│       ├── SunIcon.tsx
│       └── MoonIcon.tsx
└── lib/
    └── utils.ts      # Utility functions
```

## Design Decisions

### Typography
- Poppins font family for modern, clean typography
- Multiple font weights (400, 500, 600, 700) for visual hierarchy
- Improved letter spacing for better readability

### Colors
- Carefully chosen color palettes for both light and dark modes
- Animated gradients for visual interest
- High contrast ratios for accessibility
- Mode-specific themes (blue for simple, orange for scientific)

### Animations
- Smooth transitions between states
- Subtle hover and tap effects
- Animated theme switching
- Number display animations

## Development Environment

This project was entirely developed using **Cursor AI**, a revolutionary AI-powered IDE that combines:
- Intelligent code generation
- Real-time AI assistance
- Context-aware code suggestions
- Automated refactoring
- Smart code completion
- Integrated AI pair programming

The combination of Cursor AI's capabilities and precise prompting from Rajdip Mandal resulted in a highly efficient development process and a polished final product.

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/YourFeature`
3. Commit your changes: `git commit -m 'Add YourFeature'`
4. Push to the branch: `git push origin feature/YourFeature`
5. Open a pull request

## Credits

This project was created through the collaboration between Cursor AI and Rajdip Mandal. Special thanks to:

- **Rajdip Mandal**: Project direction and precise prompting that guided the development of this sophisticated calculator application
- **Cursor AI**: The AI-powered IDE that made this development possible through intelligent assistance and code generation
- **Next.js Team**: For the amazing framework
- **Vercel**: For hosting and deployment platform
- **NextUI Team**: For the beautiful UI components
- **Framer Motion**: For the animation library
- **Google Fonts**: For the Poppins font family

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Future Enhancements

- Add more calculator modes (e.g., Programmer, Date Calculator)
- Implement history feature
- Add keyboard support
- Include unit conversions
- Add more currency pairs
- Implement PWA support

---

Created with ❤️ by Rajdip Mandal
