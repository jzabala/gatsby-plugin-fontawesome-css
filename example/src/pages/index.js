import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCoffee,
  faAddressBook,
  faAirFreshener,
  faAmbulance,
  faAtom,
  faBus,
  faCoins,
  faDice,
} from '@fortawesome/free-solid-svg-icons'

const IndexPage = () => (
  <main
    style={{
      maxWidth: '608px',
      margin: '0 auto',
    }}
  >
    <h1 style={{ textAlign: 'center' }}>Gatsby Font Awesome example</h1>
    <div>
      <FontAwesomeIcon icon={faCoffee} size="1x" />
      <FontAwesomeIcon icon={faAddressBook} size="2x" />
      <FontAwesomeIcon icon={faAirFreshener} size="3x" />
      <FontAwesomeIcon icon={faAtom} size="4x" />
      <FontAwesomeIcon icon={faAmbulance} size="5x" />
      <FontAwesomeIcon icon={faBus} size="6x" />
      <FontAwesomeIcon icon={faCoins} size="7x" />
      <FontAwesomeIcon icon={faDice} size="8x" />
    </div>
  </main>
)

export default IndexPage
