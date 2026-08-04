import type React from "react"

interface ModalProps {
  open: boolean
  children: React.ReactNode
  title: string
  onClose: () => void
}

const Modal: React.FC<ModalProps> = ({ open, children, title, onClose }) => {
  if (!open) return null

  return (
    <div className="rf-fixed rf-inset-0 rf-flex rf-justify-center rf-items-center rf-z-50">
      <button
        type="button"
        aria-label="Close modal"
        className="rf-fixed rf-inset-0 rf-bg-black rf-bg-opacity-50 rf-w-full rf-h-full rf-cursor-default"
        onClick={onClose}
      />
      <div className="rf-bg-white rf-p-5 rf-rounded-lg rf-relative rf-w-11/12 rf-max-w-2xl rf-z-10">
        <h2 className="rf-mt-0 rf-text-md rf-pb-4">{title}</h2>
        <button
          type="button"
          className="rf-absolute rf-top-2 rf-right-4 rf-text-2xl rf-font-bold"
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  )
}

export default Modal
