import { FC, PropsWithChildren } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export type JoyCardProps = PropsWithChildren<{
  title: string
  description?: string
  isLoading?: boolean
  isError?: boolean
}>

export const JoyCard: FC<JoyCardProps> = ({
  title,
  description,
  isLoading,
  isError,
  children,
}) => {
  const content = isLoading ? 'Loading' : isError ? 'Error' : children

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description ? <CardDescription>{description}</CardDescription> : null}
      </CardHeader>
      <CardContent>{content}</CardContent>
    </Card>
  )
}
