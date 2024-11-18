import './App.css'
import { AddNew } from './components/TableComponent/AddNew'
import { DeleteSelectedButton } from './components/TableComponent/DeleteSelectedButton'
import DataTable from './components/TableComponent/Table'

function App() {

  return (
    <div>
      <div className='flex justify-end gap-4'>
        <DeleteSelectedButton />
        <AddNew />
      </div>
      <DataTable />
    </div>
  )
}

export default App
