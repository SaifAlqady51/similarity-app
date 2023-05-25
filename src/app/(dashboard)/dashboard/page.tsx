import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import RequestApiKey from "@/components/RequestApiKey";
import ApiDashboard from "@/components/ApiDashboard";

export const metadata: Metadata = {
  title: "Similarity API | Dashboard",
  description: "Free and open-source text similarity API",
};

const page = async () => {
  const user = await getServerSession(authOptions).then((res) => res?.user);

  if (!user) {
    return notFound();
  }

  const apiKey = await db.apiKey.findFirst({
    where: { userId: user.id, enabled:true },
  });


  return (
    <div className="max-w-7xl mt-16 mx-auto">
      {        
      apiKey?
        // @ts-expect-error Server Compoent
        <ApiDashboard /> : <RequestApiKey /> 
      }
    </div>
  );
};

export default page;
