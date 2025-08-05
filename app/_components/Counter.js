"use client";

import { useState } from "react";

export default function counter({ users }) {
  const [count, setcount] = useState(0);

  console.log(users);
  return <button onClick={() => setcount((c) => c + 1)}>{count}</button>;
}
