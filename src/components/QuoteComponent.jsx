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
    // Reset typing state
    setIsTyping(true);
    setDisplayedQuote("");
    setDisplayedAuthor("");
    
    // Get a new random quote
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  // Effect for auto-changing quotes
  useEffect(() => {
    // First quote should start typing immediately
    const startTypingTimeout = setTimeout(() => {
      setIsTyping(true);
    }, 500);
    
    // Change quotes at a comfortable interval
    const intervalId = setInterval(() => {
      getRandomQuote();
    }, 12000); // Extended to 12 seconds for comfortable reading
    
    return () => {
      clearInterval(intervalId);
      clearTimeout(startTypingTimeout);
    };
  }, []);

  // Initial setup for the first quote
  useEffect(() => {
    // Start typing the first quote on component mount
    setDisplayedQuote("");
    setDisplayedAuthor("");
  }, []);

  // Effect for typing animation of quote text
  useEffect(() => {
    if (isTyping && displayedQuote.length < quote.text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedQuote(quote.text.substring(0, displayedQuote.length + 1));
      }, 100); // Even slower for a more comfortable reading experience
      
      return () => clearTimeout(timeoutId);
    } else if (displayedQuote === quote.text && displayedAuthor.length < quote.author.length) {
      // Add a small pause before starting to type the author name
      const timeoutId = setTimeout(() => {
        setDisplayedAuthor(quote.author.substring(0, displayedAuthor.length + 1));
      }, 120); // Slightly slower author typing
      
      return () => clearTimeout(timeoutId);
    } else if (displayedAuthor === quote.author) {
      // Add a pause after typing is complete before moving to the next quote
      setIsTyping(false);
    }
  }, [displayedQuote, displayedAuthor, quote, isTyping]);

  return (
    <div className="flex flex-col items-center justify-center container max-w-7xl mx-auto w-full px-4 mb-[70px] text-[16px] lg:text-[34px]">
        
        <div className=" flex flex-col justify-center">
          <motion.p 
            className="text-xl text-black leading-relaxed border-[2px] p-[10px] w-[100%] md:w-[680px] lg:w-[680px] "
            key={quote.text}
          >
            "{displayedQuote}<motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block "
            >
              |
            </motion.span>"
          </motion.p>
          <motion.p 
            className="flex justify-end item-center w-full text-right italic text-black text-lg border-[2px] max-w-[180px] border-t-0 " 
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
  );
}