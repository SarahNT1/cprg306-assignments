import StudentInfo from "./student-info";

export default function Page()
{
    return(
        <main className="min-h-screen bg-black">
            <h1 className="text-gray-100">
                Shopping List
            </h1>
            <div className="text-gray-100">
                <StudentInfo/>
            </div>
        </main>
    );
}