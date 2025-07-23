export default async function Test({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  console.log(await params, 22222)
  return <div className="test">test</div>
}
