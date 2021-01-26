//@flow
import * as React from 'react'

// define types

type Props = {
  isOpen: boolean,
  autoClose?: boolean,
  onClose?: () => boolean,
  className: string,
  classShow?: string,
  children: React.Node
}

class Modal extends React.Component<Props> {
  render() {
    const { isOpen, children, className } = this.props
    const classShow = this.props.classShow || '';

    if (!isOpen) return null
    return (
      <div className={`modal-open ${className}`}>
        <div className={`modal mdal-main fade in ${classShow}`} id="myModal" role="dialog">
          <div className="modal-dialog" id="modal">
            <div className="modal-content">
              <div className="modal-body">{children}</div>
            </div>
          </div>
        </div>
        <div className="modal-backdrop fade in" />
      </div>
    )
  }
}

// default importing
export default Modal
