import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
export default async function About() {
  await delay(3000);
  // throw new Error("This is a test error!");
  return (
    <>
      <div className={"p-5 font-mono "}>
        <Card className={"p-4 border border-gray-200 bg-slate-200 m-5"}>
          <CardHeader>
            <CardTitle className={"text-2xl"}>
              About Page
            </CardTitle>
            <CardDescription>Welcome to the Intern Portal</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Content goes here</p>
          </CardContent>
          <CardFooter>Footer Info</CardFooter>
        </Card>
      </div>
    </>
  );
}
