import React, { useEffect, useState } from 'react'
import style from './css/stock.module.css';
import { products } from './DataStock';
import { useNavigate } from 'react-router-dom';
import DataContainer from './Datacontainer';
import Checkbox from '@mui/material/Checkbox';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { productProps } from './type/productOBJ';
// import axios from 'axios'; change when use api fetch products info

function Stock() {
  const [searchkey, setSearchkey] = useState<string>('');
  const [ownFilter, setOwnFilter] = useState<number[]>([]);
  const [useableFilter, setUseableFilter] = useState<number[]>([]);
  
  //const [products, setProducts] = useState<productProps[]>([]); change when use api fetch products info

  // function getproduct data by api
  // const getDataprodicts = () =>{ 
  //   try {
  //     const response = axios.get('Please URL here');
  //     setProducts(response.data)
  //   }
  //   catch(error){
  //     console.log('Error fetch ProductData:' error);
  //   }
  // }

  // useEffect(() => {
  //   getDataprodicts();
  // },[])

  const handleFilter = () => {
    console.log(ownFilter, useableFilter);
  };

  const handleSearch = () =>{
    console.log(searchkey);
  }

  const handleOwnFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    setOwnFilter((prevFilter) => {
      if (prevFilter.includes(value)) {
        return prevFilter.filter(item => item !== value);
      } else {
        return [...prevFilter, value];
      }
    });
  };

  const handleUseableFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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

  const handleAction = (action: string, item: any) => {
    if (action === 'edit') {
      navigate(`/manageStock/Edit/${item.productid}/${item.name}/${item.price}/${item.quantity}/${item.unit}/${item.myown}/${item.usesable}`);
    } else if (action === 'delete') {
      console.log(`Delete product with id: ${item.id}`);
    }
  };
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
                    <Checkbox 
                      className={style.selecterChoice}
                      icon={<RadioButtonUncheckedIcon/>}
                      checkedIcon={<RadioButtonCheckedIcon/>}
                      value={1}
                      onClick={handleOwnFilterChange}
                    />
                  <label>เป็นเจ้าของ</label>
                </div>
                <div>
                    <Checkbox 
                      className={style.selecterChoice}
                      icon={<RadioButtonUncheckedIcon/>}
                      checkedIcon={<RadioButtonCheckedIcon/>}
                      value={0}
                      onClick={handleOwnFilterChange}
                    />
                  <label>ไม่เป็นเจ้าของ</label>
                </div>
              </div>
            </div>
            <div className={style.useableFilter}>
              <div className={style.header}>การใช้งาน</div>
              <div className={style.choices}>
                  <div>
                    <Checkbox 
                      className={style.selecterChoice}
                      icon={<RadioButtonUncheckedIcon/>}
                      checkedIcon={<RadioButtonCheckedIcon/>}
                      value={1}
                      onClick={handleUseableFilterChange}
                    />
                    <label>ENABLE</label>
                  </div>
                  <div>
                    <Checkbox 
                      className={style.selecterChoice}
                      icon={<RadioButtonUncheckedIcon/>}
                      checkedIcon={<RadioButtonCheckedIcon/>}
                      value={0}
                      onClick={handleUseableFilterChange}
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
              key={index}
              info={item}
              onClick={handleAction}
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