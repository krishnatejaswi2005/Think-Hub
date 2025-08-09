import Link from "next/link";
import Image from "next/image";
import { auth, signIn, signOut } from "@/auth";
import { BadgePlus, LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
const NavBar = async () => {
	const session = await auth();
	return (
		<header className="bg-white  shadow-sm  font-work-sans ">
			<nav className="flex justify-between h-14 text-black items-center">
				<div className="logo ms-2">
					<Link href="/">
						<Image src="/logo.png" alt="logo" height={100} width={150} />
					</Link>
				</div>
				<div className="flex items-center gap-3 pe-3">
					{session && session?.user ? (
						<>
							<Link href="/startup/create">
								<span className="max-sm:hidden">Create</span>
								<BadgePlus className="size-6 sm:hidden" />
							</Link>
							<form
								action={async () => {
									"use server";
									await signOut({ redirectTo: "/" });
								}}
							>
								<button type="submit" className="cursor-pointer">
									<span className="max-sm:hidden">Logout</span>
									<LogOut className="size-6 sm:hidden text-red-500" />
								</button>
							</form>
							<Link href={`/user/${session.user?.id}`}>
								<Avatar className="size-10">
									<AvatarImage
										src={session?.user?.image || ""}
										alt={session?.user?.name || ""}
									/>
									<AvatarFallback>AV</AvatarFallback>
								</Avatar>
							</Link>
						</>
					) : (
						<form
							action={async () => {
								"use server";
								await signIn("github");
							}}
						>
							<button type="submit" className="cursor-pointer">
								Login
							</button>
						</form>
					)}
				</div>
			</nav>
		</header>
	);
};

export default NavBar;
