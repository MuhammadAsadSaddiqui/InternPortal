import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function Page({ params }) {
  const { id } = await params;
  return (
    <>
      <Card className={"p-4 border border-gray-200 bg-slate-200"}>
        <CardHeader>
          <CardTitle className={"text-2xl font-bold"}>
            Detail About Each products
          </CardTitle>
        </CardHeader>
        <CardContent>
          <h1>Product no : {id}</h1>
        </CardContent>
      </Card>
    </>
  );
}
