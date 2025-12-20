"use client";

import { useEffect } from "react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {

  useEffect(() => {
    console.log(error) 
  }, []) // here we would add function here to send to observability services like datadog

  return (
    <div style={{ padding: '4rem 2rem', textAlign: 'center' }}>
      <h1>Oops!</h1>
      <p>Something went wrong</p>
      <button onClick={reset} style={{ padding: '0.5rem 1rem', cursor: 'pointer' }}>
        Try Again
      </button>
    </div>
  )
}