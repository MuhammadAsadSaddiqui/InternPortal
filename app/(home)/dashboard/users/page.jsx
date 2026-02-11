import UsersList from '@/app/(home)/dashboard/users/component/UsersList';
import { Suspense } from "react";
import LoadingSpinner from "@/components/shared/LoadingSpinner";
import UserDetails from "@/app/(home)/dashboard/users/[id]/page";

export default function UsersPage() {
    return (
        <>
            <Suspense fallback={<LoadingSpinner />}>
            <UsersList/>
            </Suspense>
            <UserDetails/>
        </>
    )
}