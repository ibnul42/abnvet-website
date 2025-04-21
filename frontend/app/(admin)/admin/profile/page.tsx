import { getUser } from "@/lib/user";
import EditProfileForm from "./EditProfileForm";

export default async function Page() {
  const user = await getUser();

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-full max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-3xl font-semibold mb-4">Profile Details</h1>

        {/* <div className="flex items-center mb-6">
          <div>
            <h2 className="text-xl font-medium">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </div> */}

        <EditProfileForm user={user} />
      </div>
    </div>
  );
}
