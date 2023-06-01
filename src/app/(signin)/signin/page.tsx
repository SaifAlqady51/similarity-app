import SignInButton from "@/components/SignInButton";
import UserAuthForm from "@/components/ui/UserAuthForm";
import { FC } from "react";


const page: FC = () => {


    return (
        <div className=" flex items-center justify-center flex-col h-screen mx-auto">
            <UserAuthForm />
        </div>
    );

}


export default page