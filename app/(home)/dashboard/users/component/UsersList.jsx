'use client'
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {useEffect, useState} from "react";

export default async function UsersPage() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await response.json();
            setUsers(data);
        }
        fetchUsers()
    }, []);

    return (
        <>
            <div className={'p-5 grid grid-cols-2 gap-2 space-y-2'}>
                {users.map((user, index) => (
                    <Card >
                        <CardHeader>
                            <CardTitle>{user.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Username: {user.username}</p>
                            <p>Email: {user.email}</p>
                            <p>Phone: {user.phone}</p>
                            <p>City: {user.address.city}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </>
    );
}
