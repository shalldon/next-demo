import Auth from "./Login";

export default function Login({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  // console.log(await params, await searchParams, 111);

  return (
    <div className="login">
      Log in
      <Auth></Auth>
    </div>
  );
}
