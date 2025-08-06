"use client"
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function QuoteGenerator() {
  const [quote, setQuote] = useState({
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela"
  });
  const [displayedQuote, setDisplayedQuote] = useState("");
  const [displayedAuthor, setDisplayedAuthor] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const quotes = [
    {
      text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      author: "Nelson Mandela"
    },
    {
      text: "The way to get started is to quit talking and begin doing.",
      author: "Walt Disney"
    },
    {
      text: "Your time is limited, so don't waste it living someone else's life.",
      author: "Steve Jobs"
    },
    {
      text: "When you become lazy, it's disrespectful to those who believe in you",
      author: "Kobe Bryant"
    },
    {
      text: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
      author: "James Cameron"
    },
    {
      text: "Life is what happens when you're busy making other plans.",
      author: "John Lennon"
    },
    {
      text: "Innovation distinguishes between a leader and a follower.",
      author: "Steve Jobs"
    },
    {
      text: "Success isn't always about greatness. It's about consistency. Consistent hard work leads to success. Greatness will come.",
      author: "Dwayne Johnson"
    },
    {
      text: "Why worship legends when you know you can join them",
      author: "Lil Nas X"
    },
    {
      text: "I never dreamt of success. I worked for it.",
      author: "Estée Lauder"
    },
    {
      text: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt"
    }
  ];

  const getRandomQuote = () => {
    setIsTyping(true);
    setDisplayedQuote("");
    setDisplayedAuthor("");
    
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  useEffect(() => {
    const startTypingTimeout = setTimeout(() => {
      setIsTyping(true);
    }, 500);
    
    const intervalId = setInterval(() => {
      getRandomQuote();
    }, 12000);
    
    return () => {
      clearInterval(intervalId);
      clearTimeout(startTypingTimeout);
    };
  }, []);

  useEffect(() => {
    setDisplayedQuote("");
    setDisplayedAuthor("");
  }, []);

  useEffect(() => {
    if (isTyping && displayedQuote.length < quote.text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedQuote(quote.text.substring(0, displayedQuote.length + 1));
      }, 100);
      
      return () => clearTimeout(timeoutId);
    } else if (displayedQuote === quote.text && displayedAuthor.length < quote.author.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedAuthor(quote.author.substring(0, displayedAuthor.length + 1));
      }, 120);
      
      return () => clearTimeout(timeoutId);
    } else if (displayedAuthor === quote.author) {
      setIsTyping(false);
    }
  }, [displayedQuote, displayedAuthor, quote, isTyping]);

  return (
    <div className="flex flex-col items-center justify-center container max-w-7xl mx-auto w-full px-4 mb-[70px] text-[16px] lg:text-[32px] relative">
      {/* Background decoration */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 dark:opacity-10">
        <div className="text-[200px] lg:text-[400px] font-bold text-gray-400 dark:text-gray-600 select-none">
          "
        </div>
      </div>

      <div className="flex flex-col justify-center relative z-10">
        {/* Enhanced quote container */}
        <motion.div 
          className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
          key={quote.text}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Quote icon */}
          <div className="absolute -top-4 -left-4 bg-blue-600 dark:bg-blue-500 text-white p-3 rounded-full shadow-lg">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
            </svg>
          </div>

          <div className="p-8 lg:p-10">
            <motion.p 
              className="text-gray-800 dark:text-gray-200 leading-relaxed font-medium mb-6 min-h-[3em]"
            >
              "{displayedQuote}
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block ml-1"
              >
                |
              </motion.span>"
            </motion.p>
            
            {/* Author section with enhanced styling */}
            <div className="flex justify-end items-center">
              <motion.p 
                className="text-right italic text-gray-600 dark:text-gray-400 text-lg lg:text-xl font-medium"
                key={quote.author}
              >
                {displayedAuthor.length > 0 ? `— ${displayedAuthor}` : ""}
                {displayedAuthor !== quote.author && (
                  <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="inline-block ml-1"
                  >
                    |
                  </motion.span>
                )}
              </motion.p>
            </div>
          </div>

          {/* Decorative gradient border */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl opacity-20 blur-sm -z-10 group-hover:opacity-30 transition-opacity duration-300" />
        </motion.div>

        {/* Progress indicator */}
        <div className="mt-6 flex justify-center space-x-2">
          {quotes.map((_, index) => (
            <motion.div
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                quotes.indexOf(quote) === index
                  ? 'w-8 bg-blue-600 dark:bg-blue-400'
                  : 'w-2 bg-gray-300 dark:bg-gray-600'
              }`}
              layoutId={`indicator-${index}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}