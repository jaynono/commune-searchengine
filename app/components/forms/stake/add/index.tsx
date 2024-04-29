import Button from "@/app/components/button"
import { Input } from "@/app/components/input"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import StakingDisclaimer from "../disclaimer"
import { usePolkadot } from "@/context"
import { useGetBalanceQuery } from "@/store/api/statsApi"
import { ValidatorType } from "@/types"
import { formatTokenPrice } from "@/utils"
import { infoToast } from "@/app/components/toast"

const AddStakingForm = ({
  validator,
  callback,
}: {
  validator: ValidatorType | undefined
  callback?: () => void
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "all",
  })

  const { addStake, selectedAccount } = usePolkadot()
  const { data: balanceData } = useGetBalanceQuery(
    { wallet: String(selectedAccount?.address) },
    {
      skip: !selectedAccount,
    },
  )
  const onSubmit = (data: any) => {
    if (Number(balanceData?.balance) / 10 ** 9 < Number(data.stakeAmount)) {
      infoToast("Insufficient Balance")
      return
    }
    addStake({
      validator:
        validator?.key || String(process.env.NEXT_PUBLIC_COMSTAT_VALIDATOR),
      amount: data.stakeAmount,
      callback,
    })
  }
  return (
    <form className="space-y-2 w-full" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Input
          label={
            <div className="flex justify-between">
              <div className="text-sm text-customBlack">
                Input $COMAI Amount
              </div>
              <div className="text-sm">
                {formatTokenPrice({ amount: Number(balanceData?.balance) })}{" "}
                $COMAI
              </div>
            </div>
          }
          type="number"
          placeholder=""
          maxButton
          handleMaxClick={(e: any) => {
            e.preventDefault()
            setValue(
              "stakeAmount",
              formatTokenPrice({
                amount: Number(balanceData?.balance) - 1000,
                precision: 9,
              }),
            )
          }}
          register={register}
          name="stakeAmount"
          errors={errors["stakeAmount"]}
          rules={{
            required: "Amount is required",
            min: {
              value: 0.000001,
              message: "Minimum staking amount is 0.000001 COMAI",
            },
          }}
        />
      </div>
      <StakingDisclaimer />
      <Button
        size="large"
        variant="primary"
        // isLoading
        className="w-full justify-center"
        onClick={() => {}}
      >
        Stake $COMAI
      </Button>
    </form>
  )
}

export default AddStakingForm
