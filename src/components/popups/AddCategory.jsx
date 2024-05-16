/* eslint-disable react/prop-types */
import React, { useState } from 'react'

import { Card, Row } from './AddExpensePopup'
import CardTitle from './Title'
import {
  CardFormGroup,
  CardWrapperInput,
  CardLabel,
  CardInput,
  Close
} from './Card'
import Button from '../UI/Button'
import CategoryIcon from '../../assets/category/Categories.svg'
import Loader from '../UI/Loaders/loader'

import { useAddExpensePopups } from '../../stores/ctxPopupAddExpense'
import { useQuery, useQueryClient } from 'react-query'
import { addCategoryApi } from '../../api/Expenses'

const AddCategory = ({ categories, type }) => {
  const { showAddCategory } = useAddExpensePopups((state) => state.popups)
  const setShowAddExpense = useAddExpensePopups(
    (state) => state.setShowAddExpense
  )
  const setShowAddIncome = useAddExpensePopups(
    (state) => state.setShowAddIncome
  )
  const setShowAddCategory = useAddExpensePopups(
    (state) => state.setShowAddCategory
  )

  const clientQuery = useQueryClient()

  // states
  const [title, setTitle] = useState()
  const [category, setCategory] = useState()

  // handle submit
  const HandleSubmit = (e) => {
    e.preventDefault()
    refetch()
  }

  const { isFetching, isLoading, error, data, refetch } = useQuery(
    ['addCategoryAPI'],
    () =>
      addCategoryApi({
        title,
        category,
        type: type === 'income' ? 2 : 1
      }),
    {
      enabled: false
    }
  )

  if (error) {
    console.error('ERROR => ', error.message)
  }

  if (data?.success === true) {
    clientQuery.resetQueries('addCategoryAPI').then(() => {
      alert('bien ajouté')
      setShowAddCategory(false)
      if (type === 'expense') {
        setShowAddExpense(true)
      } else {
        setShowAddIncome(true)
      }
    })
  }

  return (
    <Card className={showAddCategory ? 'show' : 'hide'}>
      <Close
        onClick={() => {
          setShowAddCategory(false)
          if (type === 'expense') {
            setShowAddExpense(true)
          } else {
            setShowAddIncome(true)
          }
        }}
      />
      <CardTitle>Add new category</CardTitle>
      <CardFormGroup>
        <CardLabel required={true}>Title</CardLabel>
        <CardWrapperInput>
          <CardInput
            placeholder="Category name"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </CardWrapperInput>
      </CardFormGroup>
      <CardFormGroup>
        <CardLabel required={true}>Category icon</CardLabel>
        <CardWrapperInput
          style={{
            padding: 18,
            flexWrap: 'wrap',
            gap: 16,
            justifyContent: 'center',
            maxHeight: 400,
            overflowY: 'scroll'
          }}
        >
          {categories.map((el) => {
            return (
              <img
                key={'icon_' + el.id}
                src={CategoryIcon}
                alt={el.name + ' icon'}
                title={el.name + ' icon'}
                style={{ width: '38px', height: '38px' }}
                onClick={() => setCategory(el.id_icon)}
              />
            )
          })}
        </CardWrapperInput>
      </CardFormGroup>
      <Row className="gap">
        <Button
          className="info"
          onClick={() => {
            setShowAddCategory(false)
            if (type === 'expense') {
              setShowAddExpense(true)
            } else {
              setShowAddIncome(true)
            }
          }}
        >
          Cancel
        </Button>
        <Button className="primary" onClick={HandleSubmit}>
          {(isLoading || isFetching) && <Loader />}
          Create new category
        </Button>
      </Row>
    </Card>
  )
}

export default AddCategory
