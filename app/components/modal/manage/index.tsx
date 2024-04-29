import React from "react"
import {Modal} from "antd"
import ManageStakingForm from "../../forms/stake/manage"
import Link from "next/link"

type IStakingModal = {
  open: boolean
  setOpen: (arg: boolean) => void
}
const ManageStakingModal = ({ open, setOpen }: IStakingModal) => {
  return (
    <Modal open={open} onCancel={() => setOpen(false)} centered>
      <h1 className="text-lg font-semibold leading-8">Manage Stake</h1>
      <hr />
      <ManageStakingForm />
      <Link href="/portfolio" className="text-center">
        <p className="underline">Looking for your stakes? Check here.</p>
      </Link>
    </Modal>
  )
}

export default ManageStakingModal
