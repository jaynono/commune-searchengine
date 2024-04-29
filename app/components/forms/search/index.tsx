import Button from "@/app/components/button"
import { Input } from "@/app/components/input"
import React, { useEffect } from "react"
import { useForm } from "react-hook-form"
import { FaSearch } from "react-icons/fa"
import { FaSpinner } from "react-icons/fa6"

const SearchWalletForm = ({
  wallet,
  setWallet,
  loading,
  refetch,
}: {
  wallet?: string
  setWallet: (args: string) => void,
  refetch?: () => void
  loading?: boolean
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: {
      wallet: wallet,
    },
  })

  const onSubmit = (data: any) => {
    if (data.wallet === wallet) {
      refetch?.()
    } else {
      setWallet(data.wallet)
    }
  }

  useEffect(() => {
    setValue("wallet", wallet)
  }, [setValue, wallet])

  return (
    <form className="space-y-1 w-full" onSubmit={handleSubmit(onSubmit)}>
      <div className="pt-3">
        <Input
          type="string"
          placeholder="Enter your wallet address"
          register={register}
          name="wallet"
          rules={{
            required: "Wallet is Required",
          }}
          errors={errors.wallet}
        />
      </div>
      <div className="py-3">
        <Button
          size="large"
          variant="transparent"
          className="w-full justify-center"
          prefix={<FaSearch />}
          onClick={() => { }}
        >
          {!loading && "Check Now"}
          {loading && <>Checking <FaSpinner className="spinner" /></>}
        </Button>
      </div>
    </form>
  )
}

export default SearchWalletForm
