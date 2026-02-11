import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
export default async function UserDetails({ params }) {
    const { id } = await params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await res.json();
    return (
        <div className={'p-5'}>
            <Card>
                <CardHeader>
                    <CardTitle>{user.name}</CardTitle>
                </CardHeader>
                <CardContent>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
                </CardContent>
            </Card>
        </div>
    );
}
