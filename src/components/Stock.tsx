import React, { useState } from 'react'
import style from './css/stock.module.css';
import { products } from './DataStock';
import { Link, useNavigate } from 'react-router-dom';

function Stock() {
  const [ownFilter, setOwnFilter] = useState('');
  const [useableFilter, setUseableFilter] = useState('');
  const [openDropdowns, setOpenDropdowns] = useState(products.map(() => false));

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (index: number) => {
    setOpenDropdowns(prevState => 
      prevState.map((isOpen, i) => i === index ? !isOpen : false)
    );
  }

  const handleClearFilters = () => {
    setOwnFilter('');
    setUseableFilter('');
  };

  const handleFilter = () => {
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
          />
          <div className={style.searchBtn}>
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="21" viewBox="0 0 19 21" fill="none">
              <ellipse cx="8.86667" cy="9.77553" rx="5.28889" ry="5.71429" stroke="#33363F" stroke-width="2"/>
              <path d="M15.6667 17.1225L13.4 14.6735" stroke="#33363F" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
        </div>
        <div className={style.filterBar}>
          <div className={style.ownFilter}>
            <div className={style.header}>My-own</div>
            <div className={style.choices}>
              <div>
                <input
                  type='radio'
                  id='1'
                  name='own_choices1'
                  value='1'
                />
                <label>เป็นเจ้าของ</label>
              </div>
              <div>
                <input
                  type='radio'
                  id='0'
                  name='own_choices2'
                  value='0'
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
                    value='1'
                  />
                  <label>ENABLE</label>
                </div>
                <div>
                  <input
                    type='radio'
                    id='0'
                    name='useable_choices2'
                    value='0'
                  />
                  <label>DISABLE</label>
                </div>
            </div>
          </div>
          <div className={style.filterBtn} onClick={handleClearFilters}>FILTER</div>
        </div>
      </div>
      <div className={style.table}>
          {products.map((item,index) => (
            <div className={`${item.usesable === 1 ? style.dataContainer : style.dataDisableContainer}`} key={index}>  
                <div className={style.header}>
                  {item.name}
                </div>
                <div className={style.info}>
                  <div className={style.pcode}>
                    <p>รหัสสินค้า :</p>
                    <label> {item.id}</label>
                  </div>
                  <div className={style.price}>
                    <p>ราคา {'('}THB{')'} :</p>
                    <label> {item.price}</label>
                  </div>
                  <div className={style.quantity}>
                    <p>จำนวน :</p>
                    <label> {item.quantity}</label>
                  </div>
                  <div className={style.unit}>
                    <p>หน่วย :</p>
                    <label> {item.unit}</label>
                  </div>
                  <div className={style.useable}>
                    <p>การใช้งาน :</p>
                    <label> {item.usesable}</label>
                  </div>
                </div>
                <div className={style.state}>
                  {item.myown == '1' ?
                    <div className={style.ownState}><p>MY-OWN</p></div>
                  : <div className={style.notownState}>MY-OWN</div>}
                  <div className={style.actionBtn}>
                    <div className={style.functionBtn} onClick={() => toggleDropdown(index)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="19" height="5" viewBox="0 0 19 5" fill="none">
                        <circle cx="2.5" cy="2.5" r="2.5" transform="rotate(-90 2.5 2.5)" fill="black"/>
                        <circle cx="16.5" cy="2.5" r="2.5" transform="rotate(-90 16.5 2.5)" fill="black"/>
                        <circle cx="9.5" cy="2.5" r="2.5" transform="rotate(-90 9.5 2.5)" fill="black"/>
                      </svg>
                    </div>
                    {openDropdowns[index] &&
                      <div className={style.functionList}>
                        <Link to={`/manageStock/Edit/${item.id}`}>แก้ไขข้อมูล</Link>
                        <Link to='/manageStock'>ลบข้อมูล</Link>
                      </div>
                    }
                  </div>
                </div>
            </div>
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