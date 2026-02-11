'use client'
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {useParams, useRouter, useSearchParams} from "next/navigation";

export default function LoginPage() {
    const router = useRouter();
    const params = useSearchParams();
    const category = params.get("category");
    const page = params.getAll("page");
    console.log(`category : ${category} , page : [${page}]`);

  return (
    <>
        <Card className={"p-4 border border-gray-200 bg-slate-200 m-5"}>
            <CardHeader>
                <CardTitle className={'text-2xl'}>Login Page</CardTitle>
            </CardHeader>
            <CardContent className={"flex flex-row items-center justify-center "} >
                <div className={"flex flex-row items-center gap-5 p-5 m-5 border border-gray-500 bg-white w-[30%] rounded-lg" }>
                    <div className={'space-y-3'}>
                    <Label>Email</Label>
                    <Input className={'border border-gray-300 '} placeholder={'Enter Your Email'}/>
                    <Label>Password</Label>
                    <Input className={'border border-gray-300 '} placeholder={'Enter Your Password'}/>
                        <Button onClick={()=> router.push('/auth/register')} >Submit</Button>
                    </div>
                </div>
            </CardContent>
        </Card>

    </>
  );
}
