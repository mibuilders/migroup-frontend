'use client';
import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

export default function SmoothScroll({children}) {

    useEffect( () => {
        window.scrollTo(0,0);
        
        const lenis = new Lenis({
          // Adjust the options here to change the scroll speed
          lerp: 0, // Adjust the lerp value for scroll speed (0.1 is the default)
          duration: 3, // Adjust the duration for smooth scrolling animations (1.5 seconds is the default)
          duration: 1.5, // Adjust the duration for smooth scrolling animations (1.5 seconds is the default)
          // smoothTouch: true, // Enable or disable smooth scrolling for touch devices
          smooth: true, // Enable smooth scrolling
        })
        
        function raf(time) {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }
        
        requestAnimationFrame(raf)
    }, [])

    return children
}