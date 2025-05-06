import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getDashboardData } from "~/lib/metrics.server";
import { Dashboard } from "~/components/Dashboard";
import { useFarcaster } from "~/hooks/useFarcaster";

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
  
  // Use the Farcaster hook
  useFarcaster();
  
  return <Dashboard {...dashboardData} />;
}