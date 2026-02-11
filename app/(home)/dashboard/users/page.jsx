import UsersList from '@/app/(home)/dashboard/users/component/UsersList';
import { Suspense } from "react";
import LoadingSpinner from "@/components/shared/LoadingSpinner";

export default function UsersPage() {
    return (
        <>
            <Suspense fallback={<LoadingSpinner />}>
            <UsersList/>
            </Suspense>
        </>
    )
}