import React, { useState, useEffect, useCallback, useRef } from 'react';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [deviceInfo, setDeviceInfo] = useState({ isTouch: false, isMobile: false });

  const animationFrameRef = useRef();
  const lastPositionRef = useRef({ x: 0, y: 0 });
  const throttleTimerRef = useRef();

  // Throttle function to limit updates
  const throttle = useCallback((func, delay) => {
    return (...args) => {
      if (throttleTimerRef.current) return;
      throttleTimerRef.current = setTimeout(() => {
        func(...args);
        throttleTimerRef.current = null;
      }, delay);
    };
  }, []);

  // Detect device capabilities
  useEffect(() => {
    const checkDevice = () => {
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isMobile = window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

      setDeviceInfo({ isTouch: isTouchDevice, isMobile });

      // Hide cursor on touch devices
      if (isTouchDevice) {
        setIsVisible(false);
        return;
      }

      // Show cursor after a short delay for better UX
      setTimeout(() => setIsVisible(true), 500);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  // Optimized mouse move handler with RAF
  const handleMouseMove = useCallback((e) => {
    if (!isVisible) return;

    const newPosition = { x: e.clientX, y: e.clientY };

    // Only update if position has changed significantly (reduces unnecessary renders)
    if (Math.abs(newPosition.x - lastPositionRef.current.x) > 1 ||
        Math.abs(newPosition.y - lastPositionRef.current.y) > 1) {

      lastPositionRef.current = newPosition;

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      animationFrameRef.current = requestAnimationFrame(() => {
        setMousePosition(newPosition);
      });
    }
  }, [isVisible]);

  const throttledMouseMove = useCallback(throttle(handleMouseMove, 16), [handleMouseMove, throttle]); // ~60fps

  // Optimized hover handlers with debouncing
  const hoverTimeoutRef = useRef();

  const handleMouseEnter = useCallback(() => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => setIsHovering(true), 50);
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setIsHovering(false);
  }, []);

  // Click handlers
  const handleMouseDown = useCallback(() => setIsClicking(true), []);
  const handleMouseUp = useCallback(() => setIsClicking(false), []);

  useEffect(() => {
    if (!isVisible) return;

    // More efficient interactive element selection
    const interactiveSelectors = [
      'button',
      'a[href]',
      '[role="button"]',
      '[role="link"]',
      '[role="tab"]',
      'input[type="submit"]',
      'input[type="button"]',
      'select',
      'textarea',
      '.cursor-pointer',
      '[onclick]'
    ].join(', ');

    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsVisible(false);
      } else if (!deviceInfo.isTouch) {
        setIsVisible(true);
      }
    };

    document.addEventListener('mousemove', throttledMouseMove, { passive: true });
    document.addEventListener('mousedown', handleMouseDown, { passive: true });
    document.addEventListener('mouseup', handleMouseUp, { passive: true });
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Batch DOM queries for better performance
    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll(interactiveSelectors);
      interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', handleMouseEnter, { passive: true });
        element.addEventListener('mouseleave', handleMouseLeave, { passive: true });
      });
      return interactiveElements.length;
    };

    const observer = new MutationObserver(throttle(addHoverListeners, 100));
    observer.observe(document.body, { childList: true, subtree: true });

    const initialCount = addHoverListeners();

    return () => {
      document.removeEventListener('mousemove', throttledMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('visibilitychange', handleVisibilityChange);

      // Remove hover listeners from existing elements
      const elements = document.querySelectorAll(interactiveSelectors);
      elements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });

      observer.disconnect();
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      if (throttleTimerRef.current) clearTimeout(throttleTimerRef.current);
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    };
  }, [isVisible, deviceInfo.isTouch, throttledMouseMove, handleMouseDown, handleMouseUp, handleMouseEnter, handleMouseLeave, throttle]);

  // Don't render if not visible or on touch devices
  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor */}
      <div
        className={`custom-cursor ${isHovering ? 'hover' : ''} ${isClicking ? 'click' : ''}`}
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: `translate3d(-50%, -50%, 0) ${isHovering ? 'scale(1.5)' : isClicking ? 'scale(0.8)' : 'scale(1)'}`,
        }}
      />

      {/* Cursor trail */}
      <div
        className="cursor-trail"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate3d(-50%, -50%, 0)',
        }}
      />

      {/* Cursor glow */}
      <div
        className={`cursor-glow ${isHovering ? 'hover-glow' : ''}`}
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate3d(-50%, -50%, 0)',
        }}
      />
    </>
  );
};

export default CustomCursor;
