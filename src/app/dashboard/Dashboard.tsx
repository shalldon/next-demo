"use client";

import { useLinkStatus } from "next/link";

export default function Dashboard() {
  console.log(useLinkStatus(), 111)
  return <div className="dashboar">this is dashboard</div>;
}
