import { classNames } from "@/utils/classes"
import { ReactNode } from "react"
import {
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  Merge,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form"

interface InputProps<T extends FieldValues> {
  id?: string
  name: Path<T>
  type: string
  label?: ReactNode
  placeholder?: string
  register: UseFormRegister<T>
  errors?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
  rules?: RegisterOptions
  defaultVal?: string
  maxButton?: ReactNode
  handleMaxClick?: (e: any) => void
}

export function Input<T extends FieldValues>({
  id,
  name,
  type,
  placeholder = "",
  register,
  label = "",
  errors,
  rules,
  maxButton = false,
  handleMaxClick = () => "",
  defaultVal = "",
  ...props
}: InputProps<T>) {
  const errorMessage = errors?.message as string
  return (
    <div>
      <div className="space-y-1">
        {label ? label : ""}
        <div className="relative">
          <input
            placeholder={placeholder}
            type={type}
            step={type === "number" ? "any" : undefined}
            defaultValue={defaultVal}
            className={classNames(
              "w-full bg-white border text-sm leading-6 font-medium text-[#202223] border-border rounded-lg  px-3 py-3 focus:ring-purple focus:outline-purple ",
              errorMessage ? "!border-[#d72c0d] !bg-[#fff4f4]" : "",
            )}
            {...register(name, rules)}
            {...props}
          />
          {maxButton ? (
            <div className="absolute right-4 top-3 text-sm">
              <button
                onClick={handleMaxClick}
                className="bg-button text-white py-1 px-3 rounded-3xl text-sm"
              >
                Max
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      {errorMessage && errorMessage.length > 0 && (
        <small className="text-[11px] text-[#d72c0d] !font-normal">
          {errorMessage}
        </small>
      )}
    </div>
  )
}
