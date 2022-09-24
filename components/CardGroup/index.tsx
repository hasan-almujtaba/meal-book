import { Grid } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const CardGroup = ({ children }: Props) => {
  return (
    <Grid
      mt="5"
      templateColumns={[
        'repeat(1, 1fr)',
        'repeat(2, 1fr)',
        'repeat(3, 1fr)',
        'repeat(4, 1fr)',
      ]}
      gap={6}
    >
      {children}
    </Grid>
  )
}

export default CardGroup
