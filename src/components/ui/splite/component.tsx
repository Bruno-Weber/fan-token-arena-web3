
'use client'

import { Suspense, lazy, useState, useEffect } from 'react'
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Reset error state if scene URL changes
  useEffect(() => {
    setHasError(false);
    setIsLoading(true);
  }, [scene]);

  // Fallback 3D scene if main scene fails to load
  const handleError = () => {
    console.error("Failed to load Spline scene:", scene);
    setHasError(true);
    setIsLoading(false);
  };

  const handleLoad = () => {
    console.log("Spline scene loaded successfully:", scene);
    setIsLoading(false);
  };

  return (
    <Suspense 
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <span className="loader" />
        </div>
      }
    >
      {!hasError ? (
        <Spline
          scene={scene}
          className={className}
          onError={handleError}
          onLoad={handleLoad}
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center flex-col">
          <div className="text-sm text-neutral-400 mb-2">3D scene unavailable</div>
          <div className="w-20 h-20 rounded-full bg-primary/20 animate-pulse"></div>
        </div>
      )}
    </Suspense>
  )
}
