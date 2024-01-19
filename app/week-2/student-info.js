import Link from "next/link";

export default function StudentInfo()
{
    return(
        <div>
            <div>
                Sarah Tenebro
            </div>
            <div>
                <Link className="hover:underline hover:text-green-500" href="https://github.com/SarahNT1?tab=repositories">
                    GitHub
                </Link>
            </div>
        </div>
    );
}
