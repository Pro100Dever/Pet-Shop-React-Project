import { useCategori } from '../../shared/hooks/useCategori'

export default function AnyList() {
  let { data, isLoading, isSuccess, isError } = useCategori()

  return (
    <section>
      {isLoading && <h3>...Loading</h3>}
      {isError && <h3>Error occurred</h3>}
      {isSuccess && (
        <>
          <h3>Hallo</h3>
        </>
      )}
    </section>
  )
}
