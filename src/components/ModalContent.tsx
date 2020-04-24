import React from 'react'

type Props = {
  type: string
}

const ModalContent: React.FC<Props> = ({ type }) => {
  switch (type) {
    case 'test':
      return (
        <div className="test">
          テスト
          <style jsx>{`
            .test {
              color: #fff;
            }
          `}</style>
        </div>
      )

    default:
      return <div>{type}</div>
  }
}

export default ModalContent
