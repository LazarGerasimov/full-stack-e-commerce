
import { UserButton } from "@clerk/nextjs/app-beta/client"; // double-check import path

const SetupPage = () => {
    return (
        <div className="p-4">
            <UserButton afterSignOutUrl="/" />
        </div>
    )
};

export default SetupPage;
