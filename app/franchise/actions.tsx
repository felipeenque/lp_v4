"use server"

import { z } from "zod"

const franchisorFormSchema = z.object({
  name: z.string().min(2, "Nome da franquia deve ter pelo menos 2 caracteres"),
  cnpj: z.string().min(18, "CNPJ deve estar completo"),
  email: z.string().email("E-mail inválido"),
  phone: z.string().min(10, "Telefone deve ter pelo menos 10 dígitos"),
})

export async function submitFranchisorForm(formData: FormData) {
  try {
    const data = {
      name: formData.get("name") as string,
      cnpj: formData.get("cnpj") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
    }

    // Validate the form data
    const validatedData = franchisorFormSchema.parse(data)

    // Here you would typically save to database or send to an API
    // For now, we'll just simulate a successful submission
    console.log("Franchisor form submitted:", validatedData)

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return { success: true }
  } catch (error) {
    console.error("Error submitting franchisor form:", error)

    if (error instanceof z.ZodError) {
      return {
        success: false,
        error: error.errors[0].message,
      }
    }

    return {
      success: false,
      error: "Erro interno do servidor",
    }
  }
}
