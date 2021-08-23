import { useState } from 'react'
import { connect } from "react-redux"
import { setInfo } from "../redux/actions/main"
import styles from '../styles/Home.module.css'

function Home(props) {
  const { name, setInfo } = props
  const [newName, setName] = useState("")

  return (
    <div className={styles.container}>
      <p>Enter a user name ( {name} ):</p>
      <input 
        type="text" 
        value={newName} 
        onChange={(e) => setName(e.target.value)}>

        </input>
        <button onClick={() => setInfo(newName)}>
          Search
        </button>
    </div>
  )
}

const mapStateToProps = state => {
 return { name: state.main.name }
}

const mapDispatchToProps = {
  setInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)