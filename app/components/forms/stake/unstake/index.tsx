import Button from "@/app/components/button"
import { Input } from "@/app/components/input"
import React from "react"
import { useForm } from "react-hook-form"
import StakingDisclaimer from "../disclaimer"
import { ValidatorType } from "@/types"
import { usePolkadot } from "@/context"
import { formatTokenPrice } from "@/utils"
import { useGetBalanceQuery } from "@/store/api/statsApi"

const UnstakingForm = ({
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

  const { selectedAccount, removeStake } = usePolkadot()
  const { data: balanceData } = useGetBalanceQuery(
    { wallet: String(selectedAccount?.address) },
    {
      skip: !selectedAccount,
    },
  )
  const onSubmit = (data: any) => {
    removeStake({
      amount: String(data.stakeAmount),
      validator: String(validator?.key),
      callback,
    })
  }
  return (
    <form className="space-y-4 w-full" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Input
          label={
            <div className="text-sm text-customBlack">Input $COMAI Amount</div>
          }
          type="number"
          placeholder=""
          register={register}
          name="stakeAmount"
          errors={errors["stakeAmount"]}
          rules={{
            required: "Unstake Amount is Required",
            min: {
              value: 0.000000001,
              message: "Minimum Unstake Amount is 0.000000001 COMAI",
            },
          }}
          maxButton
          handleMaxClick={(e: any) => {
            e.preventDefault()
            setValue(
              "stakeAmount",
              formatTokenPrice({
                amount: Number(
                  balanceData?.stakes?.find(
                    (item) => item.validator.key === validator?.key,
                  )?.amount,
                ),
                precision: 9,
              }),
            )
          }}
        />
      </div>
      {/* <StakingDisclaimer /> */}

      <Button
        size="large"
        variant="primary"
        className="w-full justify-center"
        onClick={() => {}}
      >
        Unstake $COMAI
      </Button>
    </form>
  )
}

export default UnstakingForm
