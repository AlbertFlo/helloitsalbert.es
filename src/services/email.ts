type ContactPayload = {
  name: string
  email: string
  message: string
}

type SendResult =
  | { ok: true }
  | { ok: false; error: string }

export async function sendContactEmail(data: ContactPayload): Promise<SendResult> {
  try {
    const response = await fetch("/.netlify/functions/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })

    const json = await response.json()

    if (!response.ok) return { ok: false, error: json.error ?? "Unknown error" }

    return { ok: true }
  } catch {
    return { ok: false, error: "Network error" }
  }
}
