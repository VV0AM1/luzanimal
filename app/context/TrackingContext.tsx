"use client";
import { createContext, useContext } from "react";

type TrackingContextType = {
  trackEvent: (eventName: string, data?: Record<string, any>) => void;
};

const TrackingContext = createContext<TrackingContextType>({
  trackEvent: () => {},
});

export const useTracking = () => useContext(TrackingContext);

export function TrackingProvider({ children }: { children: React.ReactNode }) {
  const trackEvent = async (eventName: string, data?: Record<string, any>) => {
  console.log("[Tracking Event]", eventName, data);

    try {
        await fetch("/api/track-event", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ eventName, meta: data }),
        });
    } catch (err) {
        console.error("Error sending tracking event", err);
    }
    };

  return (
    <TrackingContext.Provider value={{ trackEvent }}>
      {children}
    </TrackingContext.Provider>
  );
}