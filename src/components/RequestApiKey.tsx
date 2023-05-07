"use client";
import { FormEvent, useState } from "react";
import { FC } from "react";
import { toast } from "./ui/Toast";
import { createApiKey } from "@/helpers/create-api-key";
import LargeHeading from "./ui/LargeHeading";
import { Key } from "lucide-react";
import Paragraph from "./ui/Paragraph";
import CopyButton from "./CopyButton";
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";

interface RequestApiKeyProps {}

const RequestApiKey: FC<RequestApiKeyProps> = ({}) => {
  const [isCreating, setIsCreating] = useState<boolean>(false);
  const [apiKey, setApiKey] = useState<string | null>(null);
  const createNewApiKey = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsCreating(true);

    try {
      const generatedApiKey = await createApiKey();
      setApiKey(generatedApiKey);
    } catch (error) {
      if (error instanceof Error) {
        toast({
          title: "Error",
          message: error.message,
          type: "error",
        });
        return;
      }
      toast({
        title: "Error",
        message: "Something went wrong",
        type: "error",
      });
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <div className="container md:max-w-2xl">
      <div className="flex flex-col gap-6 items-center">
        <Key className="mx-auto h-12 w-12 text-gray-400 " />
        <LargeHeading>Request your API key</LargeHeading>
        <Paragraph>you haven&apos;t request an API key yet.</Paragraph>
      </div>
      <form
        onSubmit={createApiKey}
        className="mt-6 sm:flex sm:items-center"
        action="#"
      >
        <div className="relative rounded-md shadow-md sm:min-w-0 sm:flex-1">
          {apiKey ? (
            <CopyButton
              type="button"
              valueToCopy={apiKey}
              className="absolute inset-y-0 right-0 animate-in fade-in duration-300"
            />
            ) : null}
            <Input readOnly value={apiKey ?? ''} placeholder="API key" />
        </div>
        <div className="mt-3 sm:mt-0 sm:ml-4 sm:flex-shrink-0">
            <Button isLoading={isCreating} disabled={!!apiKey}>Request Key</Button>
        </div>
      </form>
    </div>
  );
};

export default RequestApiKey;
