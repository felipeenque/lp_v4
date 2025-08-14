"use client"

import type React from "react"

import { forwardRef, useState } from "react"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

interface CnpjMaskedInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const CnpjMaskedInput = forwardRef<HTMLInputElement, CnpjMaskedInputProps>(
  ({ className, onChange, ...props }, ref) => {
    const [value, setValue] = useState("")

    const formatCnpj = (value: string) => {
      // Remove all non-numeric characters
      const numericValue = value.replace(/\D/g, "")

      // Apply CNPJ mask: 00.000.000/0000-00
      if (numericValue.length <= 2) {
        return numericValue
      } else if (numericValue.length <= 5) {
        return `${numericValue.slice(0, 2)}.${numericValue.slice(2)}`
      } else if (numericValue.length <= 8) {
        return `${numericValue.slice(0, 2)}.${numericValue.slice(2, 5)}.${numericValue.slice(5)}`
      } else if (numericValue.length <= 12) {
        return `${numericValue.slice(0, 2)}.${numericValue.slice(2, 5)}.${numericValue.slice(5, 8)}/${numericValue.slice(8)}`
      } else {
        return `${numericValue.slice(0, 2)}.${numericValue.slice(2, 5)}.${numericValue.slice(5, 8)}/${numericValue.slice(8, 12)}-${numericValue.slice(12, 14)}`
      }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value
      const formattedValue = formatCnpj(inputValue)

      // Limit to 18 characters (CNPJ format: 00.000.000/0000-00)
      if (formattedValue.length <= 18) {
        setValue(formattedValue)

        // Create a new event with the formatted value
        const newEvent = {
          ...e,
          target: {
            ...e.target,
            value: formattedValue,
          },
        }

        onChange?.(newEvent as React.ChangeEvent<HTMLInputElement>)
      }
    }

    return <Input {...props} ref={ref} value={value} onChange={handleChange} className={cn(className)} maxLength={18} />
  },
)

CnpjMaskedInput.displayName = "CnpjMaskedInput"
