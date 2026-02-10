import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
export default function Contact() {
  return (
    <>
      <div className={"p-5 font-mono"}>
        <Card className={"p-4 border border-gray-200 bg-slate-200 m-5"}>
          <CardHeader>
            <CardTitle className={"text-2xl "}>Contact Page</CardTitle>
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
