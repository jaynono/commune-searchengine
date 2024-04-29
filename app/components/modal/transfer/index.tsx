import React from "react"
import { AiFillCopy } from "react-icons/ai"
import {Modal} from "antd"
import { usePolkadot } from "@/context"
import TransferForm from "../../forms/transfer"
import { infoToast, successToast } from "../../toast"
import { useCopyToClipboard } from "@/app/hooks/useCopy"

type ITransferModal = {
  open: boolean
  setOpen: (arg: boolean) => void
}
const TransferModal = ({ open, setOpen }: ITransferModal) => {
  const { selectedAccount } = usePolkadot()
  const [copiedText, copy] = useCopyToClipboard()

  return (
    <Modal open={open} onCancel={() => setOpen(false)} centered>
      <h1 className="text-lg font-semibold leading-8">Transfer Funds</h1>
      <hr />
      <div className="w-full">
        <div className="flex p-5 rounded-2xl bg-green-100 items-start justify-between my-5 flex-col">
          <h6 className="text-sm tracking-tighter">Wallet Address:</h6>
          <h5 className="text-sm font-semibold flex items-center gap-x-3">
            {selectedAccount?.address}
            <button
              onClick={() =>
                copy(String(selectedAccount?.address))
                  .then(() => {
                    successToast("Copied to Clipboard")
                  })
                  .catch((error) => {
                    console.error("Failed to copy!", error)
                  })
              }
              className="cursor-pointer"
            >
              <AiFillCopy />
            </button>
          </h5>
        </div>
        <TransferForm />
      </div>
    </Modal>
  )
}

export default TransferModal
