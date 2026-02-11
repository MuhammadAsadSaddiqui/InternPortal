'use client'
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {useEffect, useState} from "react";
import Link from "next/link";

export default function UsersList() {
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
                            <Link href={`/dashboard/users/${user.id}`}>Name : {user.name}</Link>
                        </CardHeader>
                        <CardContent>
                            <p>Username: {user.username}</p>

                        </CardContent>
                    </Card>
                ))}
            </div>
        </>
    );
}
