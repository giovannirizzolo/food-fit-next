import { ReactNode } from "react";

export default function LoginLayout({
    children
}: {
    children: ReactNode
}) {
    return (
        <section className="mx-auto min-h-screen px-4 py-8 flex flex-col justify-center items-center gap-2">
            <h1>This is the layout of login page</h1>
            {children}
        </section>
    )
}