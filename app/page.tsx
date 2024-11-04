import type { Metadata } from "next";
import { Calendar } from "./components/Calendar";

export default function IndexPage() {
  console.info("Here");
  return <Calendar />;
}

export const metadata: Metadata = {
  title: "Wasmer Single Day Calendar",
};
