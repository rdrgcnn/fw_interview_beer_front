import { useRef, useEffect } from "react";

export const useRenderCount = (componentName: string) => {
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current += 1;
    console.warn(`The component ${componentName} has been rendered ${renderCount.current} times`);
  });
  return renderCount.current;
}