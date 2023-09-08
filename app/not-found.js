"use client"
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";


export default () => {
  const router = useRouter();
  return (
    <main>
      <div className="w-screen px-4 flex items-center bg-white justify-start  h-screen md:px-8">
        <div className="max-w-lg mx-auto space-y-3 text-center">
          <h3 className="text-indigo-600 font-semibold">404 Error</h3>
          <p className="text-gray-800 text-4xl font-semibold sm:text-5xl">
            Page not found
          </p>
          <p className="text-gray-600">
            Sorry, the page you requested for could not be found or has been
            removed.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button
            onClick={() => router.replace('/home')}
              type="button"
              variant="contained"
              className="block py-2 px-4 text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg"
            >
              Go back to home
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};
