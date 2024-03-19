"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function Page(){
    const{user, gitHubSignIn, firebaseSignOut} = useUserAuth();    

    const handleSignIn =()=>{
        gitHubSignIn();
    }
    const handleSignOut =()=>{
        firebaseSignOut();
    }

    return(
        <div>
            <h1 className="text-4xl font-bold"> 
                Shopping List App
            </h1>
            <div className="mt-5">
                {!user && (
                <div>
                    <div className="text-lg">
                        <button onClick={handleSignIn} className="hover:underline hover:text-green-500">Sign in with GitHub.</button>
                    </div>
                </div>
                )}
                {user && (
                    <div className="text-lg">
                        <div>
                            Signed in as {user.displayName} 
                        </div>
                        <div>
                            <button onClick={handleSignOut} className="hover:underline hover:text-green-500">Sign out</button>
                        </div>
                        <div>
                            <Link href="/week-8/shopping-list" className="hover:underline hover:text-green-500">Continue to your Shopping List</Link>
                        </div>
                    </div>
                )}
            </div>
            
        </div>
    )
}