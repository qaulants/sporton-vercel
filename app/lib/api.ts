export async function fetchAPI<T> (
  endpoint: string,
  options?: RequestInit,
): Promise<T> {
  const res = await fetch(`${process.env.NEXT_PUBLI_API_URL}${endpoint}`, {
    ...options,
    cache: options?.cache || "no-store", // kita set no store karena kita ingin mendapat data lebih real time atau lebih updated
  });

  if (!res.ok) {
    let errorMessage = `Failed to fetch data from ${endpoint}`;
    try {
      const errorData = await res.json();
      errorMessage = errorData.message || errorData.error || errorMessage;
    } catch(e) {
      console.log(e);
    }

    throw new Error(errorMessage);
  }

  return res.json();
}

