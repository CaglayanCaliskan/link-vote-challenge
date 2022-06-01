const LinkItem = () => {
  return (
    <div className='link'>
      <div className='vote-box'>
        <span>0</span>
        <p>POINTS</p>
      </div>
      <div className='info'>
        <div className='title'>Stack Overflow</div>
        <div className='url'>www.asdasd</div>
        <div className='vote-update'>
          <div className='vote vote-up'> &uarr; Up Vote</div>
          <div className='vote vote-down'>&#8595; Down Vote</div>
        </div>
      </div>
      <div className='btn delete-box'>x</div>
    </div>
  );
};

export default LinkItem;
