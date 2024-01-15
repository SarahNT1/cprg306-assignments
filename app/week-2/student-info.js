import Link from "next/link";

export default function StudentInfo()
{
    return(
        <div>
            <div>
                Sarah Tenebro
            </div>
            <div>
                <Link href="https://github.com/SarahNT1?tab=repositories">
                    GitHub
                </Link>
            </div>
        </div>
    );
}
