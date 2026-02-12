import Survey from "../components/Survey";
import { useEffect } from "react";
import { useTheme } from "../hooks/useTheme";

export default function Index() {
  // Initialize theme on survey page too
  useTheme();

  return <Survey />;
}
