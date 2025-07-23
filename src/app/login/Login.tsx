import Link from "next/link";

//import { useSearchParams } from 'next/navigation'

export default function Login() {
  return (
    <div className="login inside">
      <Link prefetch={true} href="/dashboard">
        bashboard
      </Link>
    </div>
  );
}
