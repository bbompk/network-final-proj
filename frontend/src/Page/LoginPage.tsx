import { UserProvider } from "../components/UserProvider";
import { Login } from "../components/pages/Login";

export default function LoginPage() {
    return (
        <>
            <UserProvider>
                <Login/>
            </UserProvider>
        </>
    )
}