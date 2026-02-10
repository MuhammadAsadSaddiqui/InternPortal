import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function DocsPage({ params }) {
  const { slug } = await params;
  return (
    <>
      <Card className={"p-4 border border-gray-200 bg-slate-200 m-5"}>
        <CardHeader>
          <CardTitle className={"text-2xl font-bold"}>
            Docs Slugs Catch all routes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <h1>Slug : {slug}</h1>
        </CardContent>
      </Card>
    </>
  );
}
