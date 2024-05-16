import React from 'react'
import { useQuery, useQueryClient } from 'react-query'
import { deleteTransactionApi } from '../../api/Expenses'
import { useAddExpensePopups } from '../../stores/ctxPopupAddExpense'
import SimpleButton from '../UI/Buttons/SimpleButton'
import { Card, Row } from './AddExpensePopup'
import { Close } from './Card'
import { _closeDeleteTransactionPopup } from './DeleteTransactionPopup.fct'
import Overlay from './Overlay'
import Title from './Title'

const DeleteTransactionPopup = () => {
  const clientQuery = useQueryClient()
  const idTransaction = useAddExpensePopups.getState().deleteTransactionId
  const { isFetching, isLoading, error, data, refetch } = useQuery(
    ['deleteTransaction'],
    () =>
      deleteTransactionApi({
        idTransaction
      }),
    {
      enabled: false
    }
  )

  if (error) {
    console.error('ERROR => ', error.message)
    _closeDeleteTransactionPopup()
  }

  if (data?.success === true) {
    alert('supprimée avec succès!')
    _closeDeleteTransactionPopup()
    clientQuery.resetQueries('deleteTransaction').then(() => {})
  }

  return (
    <>
      <Overlay />
      {/* POPUP add expense */}
      <Card className={'show'}>
        <Close onClick={_closeDeleteTransactionPopup} />
        <Title>Delete </Title>
        <p>Are you sure you want to delete this Transaction ?</p>
        <Row>
          <SimpleButton
            width={'30%'}
            text="No, cancel"
            bg="transparent"
            onClick={_closeDeleteTransactionPopup}
          />
          <SimpleButton
            width={'70%'}
            text="Yes, delete"
            bg={'var(--red)'}
            color={'var(--white)'}
            onClick={refetch}
            isLoading={isLoading}
            isFetching={isFetching}
          />
        </Row>
      </Card>
    </>
  )
}

export default DeleteTransactionPopup
