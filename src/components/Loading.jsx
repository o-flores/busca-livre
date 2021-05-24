import React from 'react';
import '../styles/loading.css'

class Loading extends React.Component {
  render() {
    return (
      <div className='loading-container'>
        <div className='spin' />
        <div>Carregando...</div>
      </div>
    )
  }
}

export default Loading;
