import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getDashboardData } from "~/lib/metrics.server";
import { Dashboard } from "~/components/Dashboard";
import { sdk } from '@farcaster/frame-sdk';
import { useEffect } from "react";

export const loader = async () => {
  try {
    const dashboardData = await getDashboardData();
    return json(dashboardData);
  } catch (error) {
    console.error("Error loading dashboard data:", error);
    throw new Response("Error loading dashboard data", { status: 500 });
  }
};

export default function Index() {
  const dashboardData = useLoaderData<typeof loader>();
  
  // Integrate with Farcaster Mini Apps SDK
  useEffect(() => {
    // Tell the Farcaster client that our app is ready to be displayed
    sdk.actions.ready();
    
    // We could also add event listeners for SDK events
    sdk.on('primaryButtonClicked', () => {
      // Handle primary button click
      console.log('Primary button clicked');
    });
    
    return () => {
      // Clean up event listeners when component unmounts
      sdk.removeAllListeners();
    };
  }, []);
  
  return <Dashboard {...dashboardData} />;
}