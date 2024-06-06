import { login, signup } from "./actions";


export default function LoginPage() {
    return (
        <form className="flex flex-col gap-2">
            <div className="border-b border-gray-900/10 pb-12">
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label className="block text-sm font-medium leading-6 text-gray-900"
                            htmlFor="email">Email:</label>
                        <input className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            id="email" name="email" type="email" required />
                    </div>
                    <div className="sm:col-span-3">
                        <label className="block text-sm font-medium leading-6 text-gray-900"
                            htmlFor="password">Password:</label>
                        <input className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            id="password" name="password" type="password" required />
                    </div>
                </div>
            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button className="text-sm font-semibold leading-6 text-gray-900" formAction={login}>Log in</button>
                <button className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" formAction={signup}>Sign up</button>
            </div>
        </form>
    )}