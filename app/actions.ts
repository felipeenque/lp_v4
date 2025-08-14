"use server"

import { redirect } from "next/navigation"

interface RequestCodeState {
  success: boolean
  message: string
}

export async function requestCode(prevState: RequestCodeState | null, formData: FormData): Promise<RequestCodeState> {
  const fullName = formData.get("full_name") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string

  if (!fullName || !email || !phone) {
    return { success: false, message: "Por favor, preencha todos os campos." }
  }

  const normalizedPhone = phone.replace(/\D/g, "")
  if (!(normalizedPhone.length >= 10 && normalizedPhone.length <= 13)) {
    return { success: false, message: "Por favor, insira um número de telefone válido com DDD." }
  }

  try {
    const response = await fetch("https://hooks.v4kuri.com.br/webhook/criar_autenticacao_2_fatores", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        full_name: fullName,
        email,
        phone: normalizedPhone,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error("Webhook Error (create):", errorData)
      return { success: false, message: errorData.message || "Não foi possível enviar o código. Tente novamente." }
    }

    return { success: true, message: "Código enviado com sucesso!" }
  } catch (error) {
    console.error("Network Error (create):", error)
    return { success: false, message: "Ocorreu um erro de conexão. Por favor, tente novamente." }
  }
}

interface ValidateCodeState {
  success: boolean
  message: string
}

export async function validateCode(email: string, phone: string, code: string): Promise<ValidateCodeState> {
  if (!code || code.length !== 6) {
    return { success: false, message: "O código deve ter 6 dígitos." }
  }

  try {
    const response = await fetch("https://hooks.v4kuri.com.br/webhook/autenticar_2_fatores", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, phone, code }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error("Webhook Error (validate):", errorData)
      return { success: false, message: errorData.message || "Código inválido ou expirado." }
    }

    // If validation is successful, the backend should confirm it.
    // Then we redirect.
  } catch (error) {
    console.error("Network Error (validate):", error)
    return { success: false, message: "Ocorreu um erro de conexão ao validar o código." }
  }

  // Redirect on successful validation
  redirect("https://match.franquia.com.br/descubra/")
}
