import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Staggered Text Reveal Animation
 * Splits text into words and animates them sequentially
 */
export const useStaggeredText = (ref, options = {}) => {
  const {
    delay = 0,
    duration = 0.8,
    stagger = 0.05,
    fromOpacity = 0,
    fromY = 30,
  } = options;

  useEffect(() => {
    if (!ref.current) return;

    const words = ref.current.innerText.split(' ');
    ref.current.innerHTML = words
      .map((word) => `<span class="inline-block">${word}&nbsp;</span>`)
      .join('');

    const spans = ref.current.querySelectorAll('span');

    gsap.fromTo(
      spans,
      {
        opacity: fromOpacity,
        y: fromY,
      },
      {
        opacity: 1,
        y: 0,
        duration,
        stagger,
        delay,
        ease: 'power2.out',
      }
    );
  }, []);
};

/**
 * Scroll-Triggered Fade In Animation
 */
export const useScrollFadeIn = (ref, options = {}) => {
  const {
    duration = 0.8,
    fromOpacity = 0,
    triggerStart = 'top 80%',
    triggerEnd = 'top 20%',
    scrub = false,
  } = options;

  useEffect(() => {
    if (!ref.current) return;

    gsap.fromTo(
      ref.current,
      {
        opacity: fromOpacity,
      },
      {
        opacity: 1,
        duration,
        scrollTrigger: {
          trigger: ref.current,
          start: triggerStart,
          end: triggerEnd,
          scrub,
          markers: false,
        },
        ease: 'power2.out',
      }
    );
  }, []);
};

/**
 * Scroll-Triggered Slide In Animation
 */
export const useScrollSlideIn = (ref, options = {}) => {
  const {
    direction = 'left', // left, right, up, down
    duration = 0.8,
    distance = 100,
    triggerStart = 'top 80%',
    scrub = false,
  } = options;

  useEffect(() => {
    if (!ref.current) return;

    const fromVars = {
      opacity: 0,
    };

    switch (direction) {
      case 'left':
        fromVars.x = -distance;
        break;
      case 'right':
        fromVars.x = distance;
        break;
      case 'up':
        fromVars.y = distance;
        break;
      case 'down':
        fromVars.y = -distance;
        break;
    }

    gsap.fromTo(
      ref.current,
      fromVars,
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration,
        scrollTrigger: {
          trigger: ref.current,
          start: triggerStart,
          scrub,
        },
        ease: 'power2.out',
      }
    );
  }, [direction, distance]);
};

/**
 * Parallax Scroll Animation
 * Moves element at a different speed than scroll
 */
export const useParallax = (ref, options = {}) => {
  const { speed = 0.5, triggerStart = 'top top', triggerEnd = 'bottom top' } = options;

  useEffect(() => {
    if (!ref.current) return;

    gsap.to(ref.current, {
      y: (i, target) => -innerHeight * speed,
      scrollTrigger: {
        trigger: target,
        start: triggerStart,
        end: triggerEnd,
        scrub: 1,
        markers: false,
      },
    });
  }, [speed]);
};

/**
 * Hover Lift Animation
 * Lifts element on hover with shadow
 */
export const useHoverLift = (ref) => {
  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    element.addEventListener('mouseenter', () => {
      gsap.to(element, {
        y: -10,
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
        duration: 0.3,
        ease: 'power2.out',
      });
    });

    element.addEventListener('mouseleave', () => {
      gsap.to(element, {
        y: 0,
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
        duration: 0.3,
        ease: 'power2.out',
      });
    });

    return () => {
      element.removeEventListener('mouseenter', () => {});
      element.removeEventListener('mouseleave', () => {});
    };
  }, []);
};

/**
 * Staggered Children Animation
 */
export const useStaggerChildren = (ref, options = {}) => {
  const {
    duration = 0.6,
    stagger = 0.1,
    fromOpacity = 0,
    fromY = 30,
    triggerStart = 'top 80%',
  } = options;

  useEffect(() => {
    if (!ref.current) return;

    const children = ref.current.children;

    gsap.fromTo(
      children,
      {
        opacity: fromOpacity,
        y: fromY,
      },
      {
        opacity: 1,
        y: 0,
        duration,
        stagger,
        scrollTrigger: {
          trigger: ref.current,
          start: triggerStart,
        },
        ease: 'power2.out',
      }
    );
  }, []);
};

/**
 * Counter Animation
 * Animates numbers from 0 to target
 */
export const useCounterAnimation = (ref, target, options = {}) => {
  const { duration = 2, decimals = 0, triggerStart = 'top 80%' } = options;

  useEffect(() => {
    if (!ref.current) return;

    const obj = { value: 0 };

    gsap.fromTo(
      obj,
      { value: 0 },
      {
        value: target,
        duration,
        scrollTrigger: {
          trigger: ref.current,
          start: triggerStart,
        },
        onUpdate: () => {
          ref.current.innerText = obj.value.toFixed(decimals);
        },
        ease: 'power2.out',
      }
    );
  }, [target, duration, decimals]);
};

/**
 * Rotate Animation
 */
export const useRotateAnimation = (ref, options = {}) => {
  const { duration = 3, from = 0, to = 360 } = options;

  useEffect(() => {
    if (!ref.current) return;

    gsap.fromTo(
      ref.current,
      { rotation: from },
      {
        rotation: to,
        duration,
        repeat: -1,
        ease: 'none',
      }
    );
  }, []);
};

/**
 * Text Color Change on Scroll
 */
export const useScrollColorChange = (ref, fromColor, toColor, options = {}) => {
  const { triggerStart = 'top center', triggerEnd = 'bottom center' } = options;

  useEffect(() => {
    if (!ref.current) return;

    gsap.fromTo(
      ref.current,
      { color: fromColor },
      {
        color: toColor,
        scrollTrigger: {
          trigger: ref.current,
          start: triggerStart,
          end: triggerEnd,
          scrub: 1,
        },
      }
    );
  }, [fromColor, toColor]);
};

/**
 * Floating Animation
 */
export const useFloatingAnimation = (ref, options = {}) => {
  const { duration = 4, distance = 20 } = options;

  useEffect(() => {
    if (!ref.current) return;

    gsap.to(ref.current, {
      y: distance,
      duration,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
  }, [duration, distance]);
};

/**
 * Auto-play video on scroll into view
 */
export const useScrollVideoPlay = (videoRef) => {
  useEffect(() => {
    if (!videoRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current?.play().catch(() => {});
        } else {
          videoRef.current?.pause();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, []);
};

export default {
  useStaggeredText,
  useScrollFadeIn,
  useScrollSlideIn,
  useParallax,
  useHoverLift,
  useStaggerChildren,
  useCounterAnimation,
  useRotateAnimation,
  useScrollColorChange,
  useFloatingAnimation,
  useScrollVideoPlay,
};
