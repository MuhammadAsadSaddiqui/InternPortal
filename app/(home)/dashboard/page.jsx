import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import Link from "next/link";
import {Button} from "@/components/ui/button";

export default function Dashboard() {
  return (
    <>
        <Card className={"p-4 border border-gray-200 bg-slate-200 m-5"}>
            <CardHeader>
            <CardTitle className={'text-2xl'}>Dashboard</CardTitle>
            </CardHeader>
            <CardContent>
                <h1>Dashboard Implementation Soon</h1>
                <div className={"flex gap-4"}>
                <Link href={"/dashboard/settings"}><Button>Settings</Button></Link>
                <Link href={"/dashboard/users"}><Button>Users</Button></Link>
                </div>
            </CardContent>
        </Card>

    </>
  );
}
