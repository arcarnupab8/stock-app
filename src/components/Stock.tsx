import React, { useState } from 'react'
import style from './css/stock.module.css';
import { products } from './DataStock';
import { Link, useNavigate } from 'react-router-dom';
import DataContainer from './Datacontainer';

function Stock() {
  const [searchkey, setSearchkey] = useState('');
  const [ownFilter, setOwnFilter] = useState([]);
  const [useableFilter, setUseableFilter] = useState([]);
  const [selectedOwn, setSelectedOwn] = useState(false);
  const [selectedUsesable, setSelectedUsesable] = useState(false);

  const handleFilter = () => {
    console.log(ownFilter, useableFilter);
  };

  const handleSearch = () =>{
    console.log(searchkey);
  }

  const handleOwnFilterChange = (event) => {
    const value = parseInt(event.target.value);
    setOwnFilter((prevFilter) => {
      if (prevFilter.includes(value)) {
        return prevFilter.filter(item => item !== value);
      } else {
        return [...prevFilter, value];
      }
    });
  };

  const handleUseableFilterChange = (event) => {
    const value = parseInt(event.target.value);
    setUseableFilter((prevFilter) => {
      if (prevFilter.includes(value)) {
        return prevFilter.filter(item => item !== value);
      } else {
        
        return [...prevFilter, value];
      }
    });
  };

  const navigate = useNavigate();
  const handleaddBtn = () =>{
    navigate('/manageStock/add');
  }
  return (
    <div className={style.container}>
      <div className={style.filter}>
        <div className={style.searchBar}>
          <input
            type='text'
            placeholder='รหัสสินค้า/ ชื่อ/ ราคา/ ...'
            value={searchkey}
            onChange={(e) => setSearchkey(e.target.value)}
          />
          <div className={style.searchBtn} onClick={handleSearch}>
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="21" viewBox="0 0 19 21" fill="none">
              <ellipse cx="8.86667" cy="9.77553" rx="5.28889" ry="5.71429" stroke="#33363F" stroke-width="2"/>
              <path d="M15.6667 17.1225L13.4 14.6735" stroke="#33363F" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
        </div>
        <div className={style.filterBar}>
          <div className={style.filterInputs}>
            <div className={style.ownFilter}> 
              <div className={style.header}>My-own</div>
              <div className={style.choices}>
                <div>
                  <input
                    type='radio'
                    id='1'
                    name='own_choices1'
                    value={1}
                    onChange={handleOwnFilterChange}
                  />
                  <label>เป็นเจ้าของ</label>
                </div>
                <div>
                  <input
                    type='radio'
                    id='0'
                    name='own_choices2'
                    value={0}
                    onChange={handleOwnFilterChange}
                  />
                  <label>ไม่เป็นเจ้าของ</label>
                </div>
              </div>
            </div>
            <div className={style.useableFilter}>
              <div className={style.header}>การใช้งาน</div>
              <div className={style.choices}>
                  <div>
                    <input
                      type='radio'
                      id='1'
                      name='useable_choices1'
                      value={1}
                      onChange={handleUseableFilterChange}
                    />
                    <label>ENABLE</label>
                  </div>
                  <div>
                    <input
                      type='radio'
                      id='0'
                      name='useable_choices2'
                      value={0}
                      onChange={handleUseableFilterChange}
                    />
                    <label>DISABLE</label>
                  </div>
              </div>
            </div>
          </div>
          <div className={style.filterBtn} onClick={handleFilter}>FILTER</div>
        </div>
      </div>
      <div className={style.table}>
          {products.map((item,index) => (
            <DataContainer
              name={item.name}
              productid={item.id}
              price={item.price}
              quantity={item.quantity}
              unit={item.unit}
              usesable={item.usesable}
              myown={item.myown}
            />
          ))}
          <div className={style.addBtn} onClick={handleaddBtn}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                <path d="M15 7.5L15 22.5" stroke="white" stroke-width="2" stroke-linecap="round"/>
                <path d="M22.5 15L7.5 15" stroke="white" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
      </div>
    </div>
  )
}

export default Stock