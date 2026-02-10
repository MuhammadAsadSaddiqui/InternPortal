import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function Page({ params }) {
  const { id, reviewid } = await params;
  return (
    <>
      <Card className={"p-4 border border-gray-200 bg-slate-200 m-5"}>
        <CardHeader>
          <CardTitle className={"text-2xl font-bold"}>
            Review About Each products
          </CardTitle>
        </CardHeader>
        <CardContent>
          <h1>
            Review About Product :{id} and review : {reviewid}
          </h1>
        </CardContent>
      </Card>
    </>
  );
}
