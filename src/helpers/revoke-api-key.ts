// Post request to revoke the api key
export async function revokeApiKey() {
  const response = await fetch("/api/api-key/revoke", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body:JSON.stringify({}),
    credentials: "same-origin",
  });
  const data = (await response.json()) as { error?: string };

  if (data.error) {
    throw new Error(data.error);
  }
}
