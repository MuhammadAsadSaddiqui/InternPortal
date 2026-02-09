import { Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent}  from "@/components/ui/card"
import Link from "next/link";
import {Button} from "@/components/ui/button";
export default function Home() {
  return (
    <>
      <div className={'p-5 font-mono'}>
        <Card>
          <CardHeader>
            <CardTitle className={'text-2xl '}>Home Page</CardTitle>
            <CardDescription>Welcome to the Intern Portal</CardDescription>
          </CardHeader>
          <CardContent className={"flex flex-col space-y-2"}>
            <p>Content goes here</p>
            <div className={'flex gap-4'}>
            <Link href="/about"><Button>About Page</Button></Link>
            <Link href="/contact"><Button>Contact Page</Button></Link>
            <Link href="/home"><Button>Home Page</Button></Link>
            </div>
          </CardContent>
          <CardFooter>Footer Info</CardFooter>
        </Card>
      </div>
    </>
  );
}
