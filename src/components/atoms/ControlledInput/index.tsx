import * as React from 'react'
import { Control, Controller, FieldValue, FieldValues, Path } from 'react-hook-form'

import { Input, Props } from '@components/atoms/Input'

interface OwnProps<Type extends FieldValues> extends Omit<Props, 'onChange' | 'value'> {
  control: Control<FieldValue<Type>>
  formField: Path<FieldValue<Type>>
}

export const ControlledInput = <T extends FieldValues>({
  formField,
  control,
  ...props
}: OwnProps<T>) => {
  return (
    <Controller
      control={control}
      name={formField}
      render={({ field }) => <Input {...props} value={field.value} onChange={field.onChange} />}
    />
  )
}
