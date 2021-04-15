import { SimpleGrid } from '@chakra-ui/react'
import Loading from './loading'

export default function HomeSkeleton() {
  return (
    <SimpleGrid gap="5" columns="2">
      <Loading />
      <Loading />
      <Loading />
      <Loading />
      <Loading />
      <Loading />
    </SimpleGrid>
  )
}
