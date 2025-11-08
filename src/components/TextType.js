import { useEffect, useRef, useState, createElement, useMemo, useCallback } from 'react';
import { gsap } from 'gsap';
import './TextType.css';

const TextType = ({
  text,
  as: Component = 'div',
  typingSpeed = 50,
  initialDelay = 0,
  pauseDuration = 2000,
  deletingSpeed = 30,
  loop = true,
  className = '',
  showCursor = true,
  hideCursorWhileTyping = false,
  cursorCharacter = '|',
  cursorClassName = '',
  cursorBlinkDuration = 0.5,
  textColors = [],
  variableSpeed,
  onSentenceComplete,
  startOnVisible = false,
  reverseMode = false,
  noDelete = false,
  ...props
}) => {
  const [typedParts, setTypedParts] = useState([]);
  const [isVisible, setIsVisible] = useState(!startOnVisible);
  const cursorRef = useRef(null);
  const containerRef = useRef(null);
  const currentCharIndexRef = useRef(0);
  const isDeletingRef = useRef(false);
  const currentTextIndexRef = useRef(0);
  const typedPartsRef = useRef([]);

  const textArray = useMemo(() => (Array.isArray(text) ? text : [text]), [text]);

  const getRandomSpeed = useCallback(() => {
    if (!variableSpeed) return typingSpeed;
    const { min, max } = variableSpeed;
    return Math.random() * (max - min) + min;
  }, [variableSpeed, typingSpeed]);

  useEffect(() => {
    if (!startOnVisible || !containerRef.current) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [startOnVisible]);

  useEffect(() => {
    if (showCursor && cursorRef.current) {
      gsap.set(cursorRef.current, { opacity: 1 });
      gsap.to(cursorRef.current, {
        opacity: 0,
        duration: cursorBlinkDuration,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut'
      });
    }
  }, [showCursor, cursorBlinkDuration]);

  useEffect(() => {
    if (!isVisible) return;

    const executeTypingAnimation = () => {
      const currentTextIndex = currentTextIndexRef.current;
      const currentCharIndex = currentCharIndexRef.current;
      const isDeleting = isDeletingRef.current;
      const currentText = textArray[currentTextIndex];
      const processedText = reverseMode ? currentText.split('').reverse().join('') : currentText;

      if (isDeleting) {
        const newParts = [...typedPartsRef.current];
        if (newParts.length > 0) {
          const lastPart = newParts[newParts.length - 1];
          if (lastPart.text.length > 0) {
            lastPart.text = lastPart.text.slice(0, -1);
          }
          if (lastPart.text === '') {
            newParts.pop();
          }
        }
        typedPartsRef.current = newParts;
        setTypedParts(newParts);
        if (newParts.length === 0) {
          isDeletingRef.current = false;
          if (currentTextIndex === textArray.length - 1 && !loop) {
            return;
          }
          if (onSentenceComplete) {
            onSentenceComplete(textArray[currentTextIndex], currentTextIndex);
          }
          currentTextIndexRef.current = (currentTextIndex + 1) % textArray.length;
          currentCharIndexRef.current = 0;
          setTimeout(() => executeTypingAnimation(), pauseDuration);
        } else {
          setTimeout(() => executeTypingAnimation(), deletingSpeed);
        }
      } else {
        if (currentCharIndex < processedText.length) {
          const newParts = [...typedPartsRef.current];
          const currentColor = textColors.length === 0 ? '#ffffff' : textColors[currentTextIndex % textColors.length];
          if (newParts.length === 0 || newParts[newParts.length - 1].color !== currentColor) {
            newParts.push({text: processedText[currentCharIndex], color: currentColor});
          } else {
            newParts[newParts.length - 1].text += processedText[currentCharIndex];
          }
          typedPartsRef.current = newParts;
          setTypedParts(newParts);
          currentCharIndexRef.current = currentCharIndex + 1;
          setTimeout(() => executeTypingAnimation(), variableSpeed ? getRandomSpeed() : typingSpeed);
        } else if (textArray.length > 1) {
          if (!noDelete) {
            isDeletingRef.current = true;
            setTimeout(() => executeTypingAnimation(), pauseDuration);
          } else {
            if (currentTextIndex < textArray.length - 1) {
              currentTextIndexRef.current = currentTextIndex + 1;
              currentCharIndexRef.current = 0;
              setTimeout(() => executeTypingAnimation(), pauseDuration);
            }
          }
        }
      }
    };

    setTimeout(() => executeTypingAnimation(), initialDelay);

    return () => {};
  }, [
    isVisible,
    textArray,
    loop,
    initialDelay,
    reverseMode,
    variableSpeed,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    onSentenceComplete,
    textColors,
    getRandomSpeed
  ]);

  const shouldHideCursor = false;

  return createElement(
    Component,
    {
      ref: containerRef,
      className: `text-type ${className}`,
      ...props
    },
    <span className="text-type__content">
      {typedParts.map((part, index) => (
        <span key={index} style={{ color: part.color }}>
          {part.text}
        </span>
      ))}
    </span>,
    showCursor && (
      <span
        ref={cursorRef}
        className={`text-type__cursor ${cursorClassName} ${shouldHideCursor ? 'text-type__cursor--hidden' : ''}`}
      >
        {cursorCharacter}
      </span>
    )
  );
};

export default TextType;
