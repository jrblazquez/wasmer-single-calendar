import type { Metadata } from "next";
import { Calendar } from "./components/Calendar";

export default function IndexPage() {
  console.log('HERE')
  return <Calendar />;
}

export const metadata: Metadata = {
  title: "Wasmer Single Day Calendar",
};
