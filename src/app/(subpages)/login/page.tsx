import { LoginForm } from "@/components";
import { db } from "@/utils/firebase";
import { onValue, ref } from "firebase/database";
import React from "react";

export default function page() {
  return <LoginForm />;
}
