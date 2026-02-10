import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
export default function Home() {
  return (
    <>
      <div className={"p-5 font-mono"}>
        <Card className={"p-4 border border-gray-200 bg-slate-200 "}>
          <CardHeader>
            <CardTitle className={"text-2xl "}>Home Page</CardTitle>
            <CardDescription>Welcome to the Intern Portal</CardDescription>
          </CardHeader>
          <CardContent className={"flex flex-col space-y-2"}>
            <p>Content goes here</p>
          </CardContent>
          <CardFooter>Footer Info</CardFooter>
        </Card>
      </div>
    </>
  );
}
