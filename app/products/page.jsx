import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProductsPage() {
  return (
    <>
      <Card className={"p-4 border border-gray-200 bg-slate-200"}>
        <CardHeader>
          <CardTitle className={"text-2xl "}>Products List</CardTitle>
        </CardHeader>
        <CardContent>
          <h1>Product 1</h1>
          <h2>Product 2</h2>
          <h3>Product 3</h3>
        </CardContent>
      </Card>
    </>
  );
}
