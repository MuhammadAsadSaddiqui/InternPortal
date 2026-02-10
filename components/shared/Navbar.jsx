"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { Card } from "@/components/ui/card";

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (href) => pathname === href;
  return (
    <>
      <Card className={"flex flex-row items-center gap-5 p-5 m-5"}>
        <Link href="/">
          <Button variant={isActive("/") ? "default" : "outline"}>Home</Button>
        </Link>
        <Link href="/about">
          <Button variant={isActive("/about") ? "default" : "outline"}>
            About us
          </Button>
        </Link>
        <Link href="/contact">
          <Button variant={isActive("/contact") ? "default" : "outline"}>
            Contact us
          </Button>
        </Link>
        <Link href="/dashboard">
          <Button variant={isActive("/dashboard") ? "default" : "outline"}>
            Dashboard
          </Button>
        </Link>
        <Link href="/auth/login">
          <Button variant={isActive("/auth/login") ? "default" : "outline"}>
            Login
          </Button>
        </Link>
        <Link href="/auth/register">
          <Button variant={isActive("/auth/register") ? "default" : "outline"}>
            Register
          </Button>
        </Link>
        <Link href="/products">
          <Button
              className={`${isActive("/products") ? "bg-blue-700" : "bg-red-700"}`}
          >
            Products
          </Button>
        </Link>
      </Card>
    </>
  );
}
