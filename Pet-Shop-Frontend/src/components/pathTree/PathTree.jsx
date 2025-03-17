import SectionTitle from '../../shared/ui/ActionUI/SectionTitle'

export default function PathTree() {
  return (
    <div>
      <SectionTitle text='Categories' />
      <div></div>
      <NavLink text='All categories' path='/categories' />
    </div>
  )
}
