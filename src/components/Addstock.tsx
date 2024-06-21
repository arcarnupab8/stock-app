import React, { useState } from 'react'
import style from './css/addstock.module.css';
import { useNavigate } from 'react-router-dom';
import { Checkbox } from '@mui/material';
import { productProps } from "./type/productOBJ";

const Addstock: React.FC = () => {
  const navigate = useNavigate();
  const [info, setInfo] = useState<productProps>({
    name: '',
    productid: '',
    price: 0,
    quantity: 0,
    unit: '',
    usesable: 0,
    myown: 0,
  });

  const handlesubmit = () =>{
    console.log(info)
  }

  const handlebackBtn = () =>{
    navigate('/manageStock');
  }

  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.backBtn} onClick={handlebackBtn}>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.26709 14.3699C0.45573 13.8781 0 13.2114 0 12.5162C0 11.8211 0.45573 11.1544 1.26709 10.6625L17.6039 0.767935C18.4167 0.27607 19.5189 -0.000163907 20.6681 7.2965e-08C21.8172 0.000164053 22.9192 0.276712 23.7316 0.768809C24.544 1.26091 25.0003 1.92824 25 2.624C24.9997 3.31977 24.543 3.98697 23.7302 4.47884L10.4551 12.5162L23.7302 20.5536C24.5198 21.0481 24.957 21.7106 24.9477 22.3984C24.9384 23.0862 24.4832 23.7442 23.6803 24.2308C22.8774 24.7174 21.7909 24.9936 20.6549 24.9999C19.5189 25.0062 18.4243 24.7421 17.6068 24.2645L1.26419 14.3717L1.26709 14.3699Z" fill="black"/>
          </svg>
        </div>
        <div className={style.title}>เพิ่มรายการสินค้า</div>
      </div>
      <div className={style.content}>
        <div className={style.inputContainer}>
          <div className={style.icon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="4.33333" stroke="#33363F" stroke-width="2"/>
              <path d="M27.1991 14.9271C27.5828 15.4096 27.7746 15.6509 27.7746 16C27.7746 16.3491 27.5828 16.5904 27.1991 17.0729C25.465 19.2538 21.1047 24 16 24C10.8953 24 6.53501 19.2538 4.80088 17.0729C4.41723 16.5904 4.22541 16.3491 4.22541 16C4.22541 15.6509 4.41723 15.4096 4.80088 14.9271C6.53501 12.7462 10.8953 8 16 8C21.1047 8 25.465 12.7462 27.1991 14.9271Z" stroke="#33363F" stroke-width="2"/>
            </svg>
          </div>
          <div className={style.inputval}>
            <select name="useable" id="useable" 
                    className={style.useableinputval} onChange={(e) => setInfo({ ...info, usesable: parseInt(e.target.value) })}>
              <option value={1}>ENABLE</option>
              <option value={0}>DISABLE</option>
            </select>
          </div>
        </div>
        <div className={style.inputContainer}>
          <div className={style.icon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
              <path d="M13.5229 16.1567H9.51862" stroke="#33363F" stroke-width="2" stroke-linecap="round"/>
              <path d="M17.5272 21.3049H9.51862" stroke="#33363F" stroke-width="2" stroke-linecap="round"/>
              <path d="M7.01431 26.4532H25.3706C26.199 26.4532 26.8706 25.7816 26.8706 24.9532V11.2523C26.8706 11.0921 26.8321 10.9342 26.7583 10.792L24.7607 6.93958C24.4169 6.27647 23.7322 5.86023 22.9852 5.86023H9.39967C8.65271 5.86023 7.96801 6.27647 7.62417 6.93958L5.62656 10.792C5.55281 10.9342 5.51431 11.0921 5.51431 11.2523V24.9532C5.51431 25.7816 6.18588 26.4532 7.01431 26.4532Z" stroke="#33363F" stroke-width="2" stroke-linecap="round"/>
              <path d="M6.84909 11.0085H25.5358" stroke="#33363F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <rect x="18.862" y="14.8696" width="4.0043" height="3.86118" rx="0.5" fill="#33363F"/>
            </svg>
          </div>
          <div className={style.inputval}>
            <input
              type='text'
              placeholder='0000'
              onChange={(e) => setInfo({ ...info, productid: e.target.value })}
            />
          </div>
        </div>
        <div className={style.inputContainer}>
          <div className={style.icon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
              <path d="M16.1924 18.0544V27.746C16.1924 28.1434 16.1924 28.3421 16.064 28.4135C15.9356 28.485 15.7668 28.3803 15.429 28.171L6.46065 22.6122C5.99811 22.3255 5.76684 22.1821 5.64058 21.9553C5.51431 21.7285 5.51431 21.4564 5.51431 20.9122V11.4359M16.1924 18.0544L5.51431 11.4359M16.1924 18.0544L24.128 13.1358C25.3576 12.3736 25.9724 11.9925 25.9724 11.4359C25.9724 10.8792 25.3576 10.4981 24.128 9.73591L17.2461 5.47035C16.7335 5.15263 16.4772 4.99377 16.1924 4.99377C15.9077 4.99377 15.6514 5.15263 15.1388 5.47035L5.51431 11.4359" stroke="#33363F" stroke-width="2" stroke-linejoin="round"/>
              <path d="M25.8706 16.7308C25.8706 17.283 26.3183 17.7308 26.8706 17.7308C27.4228 17.7308 27.8706 17.283 27.8706 16.7308H25.8706ZM26.7443 11.5062L25.8706 11.9926L26.7443 11.5062ZM25.8706 12.5493V16.7308H27.8706V12.5493H25.8706ZM26.4511 9.99935L22.0583 7.27662L21.0047 8.97656L25.3974 11.6993L26.4511 9.99935ZM27.8706 12.5493C27.8706 12.296 27.8716 12.0362 27.8502 11.8131C27.8267 11.5687 27.7715 11.2954 27.618 11.0198L25.8706 11.9926C25.8434 11.9437 25.8512 11.9199 25.8593 12.0043C25.8695 12.1099 25.8706 12.2583 25.8706 12.5493H27.8706ZM25.3974 11.6993C25.6447 11.8526 25.7702 11.9316 25.8547 11.9959C25.9222 12.0473 25.8977 12.0414 25.8706 11.9926L27.618 11.0198C27.4646 10.7441 27.2614 10.5532 27.066 10.4045C26.8877 10.2687 26.6663 10.1327 26.4511 9.99935L25.3974 11.6993Z" fill="#33363F"/>
              <ellipse cx="23.5337" cy="22.6875" rx="3.33691" ry="3.30929" stroke="#33363F" stroke-width="2"/>
              <path d="M28.2053 27.3205L26.2032 25.3349" stroke="#33363F" stroke-width="2" stroke-linecap="round"/>
              <path d="M19.3888 27.8395C19.8582 27.5486 20.0029 26.9321 19.712 26.4627C19.421 25.9933 18.8046 25.8486 18.3351 26.1396L19.3888 27.8395ZM17.5272 27.8169L17.0004 26.9669L17.5272 27.8169ZM16.1925 28.4677V29.4677V28.4677ZM15.6656 27.1411L11.3802 24.4849L10.3266 26.1849L14.612 28.8411L15.6656 27.1411ZM17.0004 26.9669L16.7193 27.1411L17.773 28.8411L18.0541 28.6668L17.0004 26.9669ZM18.3351 26.1396L17.6678 26.5532L18.7214 28.2532L19.3888 27.8395L18.3351 26.1396ZM17.6678 26.5532L17.0004 26.9669L18.0541 28.6668L18.7214 28.2532L17.6678 26.5532ZM14.612 28.8411C14.8508 28.9891 15.0936 29.141 15.3146 29.2483C15.5565 29.3656 15.8456 29.4677 16.1925 29.4677V27.4677C16.2545 27.4677 16.2731 27.4903 16.1875 27.4488C16.081 27.3972 15.9394 27.3108 15.6656 27.1411L14.612 28.8411ZM16.7193 27.1411C16.4455 27.3108 16.3039 27.3972 16.1974 27.4488C16.1119 27.4903 16.1304 27.4677 16.1925 27.4677V29.4677C16.5393 29.4677 16.8284 29.3656 17.0703 29.2483C17.2913 29.141 17.5341 28.9891 17.773 28.8411L16.7193 27.1411Z" fill="#33363F"/>
            </svg>
          </div>
          <div className={style.inputval}>
            <input
              type='text'
              placeholder='Name'
              onChange={(e) => setInfo({ ...info, name: e.target.value })}
            />
          </div>
        </div>
        <div className={style.inputContainer}>
          <div className={style.icon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
              <path d="M17.6756 15.1423C17.0325 14.9835 16.3893 14.6658 15.907 14.1892C15.4246 14.0304 15.2638 13.5538 15.2638 13.2361C15.2638 12.9185 15.4246 12.4419 15.7462 12.2831C16.2286 11.9654 16.7109 11.6477 17.1933 11.8065C18.158 11.8065 18.9619 12.2831 19.4443 12.9185L20.8914 11.0123C20.409 10.5358 19.9266 10.2181 19.4443 9.90038C18.9619 9.58269 18.3188 9.42384 17.6756 9.42384V7.19999H15.7462V9.42384C14.9423 9.58269 14.1383 10.0592 13.4952 10.6946C12.852 11.4888 12.3697 12.4419 12.5305 13.395C12.5305 14.3481 12.852 15.3011 13.4952 15.9365C14.2991 16.7308 15.4246 17.2073 16.3893 17.6838C16.8717 17.8427 17.5148 18.1604 17.9972 18.4781C18.3188 18.7958 18.4796 19.2723 18.4796 19.7488C18.4796 20.2254 18.3188 20.7019 17.9972 21.1785C17.5148 21.655 16.8717 21.8138 16.3893 21.8138C15.7462 21.8138 14.9423 21.655 14.4599 21.1785C13.9776 20.8608 13.4952 20.3842 13.1736 19.9077L11.5658 21.655C12.0481 22.2904 12.5305 22.7669 13.1736 23.2435C13.9776 23.72 14.9423 24.1965 15.907 24.1965V26.2615H17.6756V23.8788C18.6404 23.72 19.4443 23.2435 20.0874 22.6081C20.8914 21.8138 21.3737 20.5431 21.3737 19.4311C21.3737 18.4781 21.0521 17.3661 20.2482 16.7308C19.4443 15.9365 18.6404 15.46 17.6756 15.1423ZM16.7109 4.02307C9.63632 4.02307 3.84802 9.74153 3.84802 16.7308C3.84802 23.72 9.63632 29.4385 16.7109 29.4385C23.7855 29.4385 29.5738 23.72 29.5738 16.7308C29.5738 9.74153 23.7855 4.02307 16.7109 4.02307ZM16.7109 27.6911C10.601 27.6911 5.61667 22.7669 5.61667 16.7308C5.61667 10.6946 10.601 5.77038 16.7109 5.77038C22.8208 5.77038 27.8052 10.6946 27.8052 16.7308C27.8052 22.7669 22.8208 27.6911 16.7109 27.6911Z" fill="black"/>
            </svg>
          </div>
          <div className={style.inputval}>
            <input
              type='text'
              placeholder='0'
              onChange={(e) => setInfo({ ...info, price: parseFloat(e.target.value) })}
            />
          </div>
        </div>
        <div className={style.inputContainer}>
          <div className={style.input1}>
            <div className={style.icon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                <path d="M16.1753 28.8461V18.1795M16.1753 28.8461L6.44861 22.767C5.98908 22.4798 5.75932 22.3362 5.63396 22.11C5.50861 21.8838 5.50861 21.6129 5.50861 21.071V11.5128M16.1753 28.8461L21.5086 25.5128L25.9019 22.767C26.3615 22.4798 26.5912 22.3362 26.7166 22.11C26.8419 21.8838 26.8419 21.6129 26.8419 21.071V11.5128M16.1753 18.1795L5.50861 11.5128M16.1753 18.1795L26.8419 11.5128M5.50861 11.5128L15.1153 5.50863C15.6307 5.18646 15.8885 5.02538 16.1753 5.02538C16.4621 5.02538 16.7198 5.18646 17.2353 5.50863L26.8419 11.5128" stroke="#33363F" stroke-width="2" stroke-linejoin="round"/>
                <path d="M20.5086 20.1794C20.5086 20.7317 20.9563 21.1794 21.5086 21.1794C22.0609 21.1794 22.5086 20.7317 22.5086 20.1794H20.5086ZM21.3832 14.9156L20.5086 15.4004L21.3832 14.9156ZM10.3119 9.02744L20.0386 15.1066L21.0986 13.4106L11.3719 7.33145L10.3119 9.02744ZM22.5086 20.1794V15.9546H20.5086V20.1794H22.5086ZM20.0386 15.1066C20.2843 15.2602 20.409 15.3393 20.4928 15.4036C20.5598 15.455 20.5356 15.4491 20.5086 15.4004L22.2579 14.4308C22.1055 14.156 21.9037 13.9651 21.7096 13.8163C21.5324 13.6805 21.3124 13.5442 21.0986 13.4106L20.0386 15.1066ZM22.5086 15.9546C22.5086 15.7025 22.5096 15.4437 22.4884 15.2214C22.4651 14.978 22.4102 14.7057 22.2579 14.4308L20.5086 15.4004C20.4816 15.3517 20.4894 15.3279 20.4975 15.412C20.5075 15.5172 20.5086 15.6648 20.5086 15.9546H22.5086Z" fill="#33363F"/>
              </svg>
            </div>
            <div className={style.inputval}>
              <input
                type='text'
                placeholder='0'
                onChange={(e) => setInfo({ ...info, quantity: parseInt(e.target.value) })}
              />
            </div>
          </div>
          <div className={style.input2}>
            <div className={style.icon}>
              UNIT
            </div>
            <div className={style.inputval}>
              <input
                type='text'
                placeholder='-'
                onChange={(e) => setInfo({ ...info, unit: e.target.value })}
              />
            </div>
          </div>
        </div>
        <div className={style.inputContainer}>
          <div className={style.inputMyownWrap}>
            <div className={style.inputval}>
              {info.myown === 1 ? (
                  <Checkbox 
                    checked={true} 
                    onChange={(e) => setInfo({ ...info, myown: e.target.checked ? 1 : 0 })}
                  />
                ):(
                  <Checkbox 
                    checked={false}
                    onChange={(e) => setInfo({ ...info, myown: e.target.checked ? 1 : 0 })}
                  />
                )}
              <label>My-own</label>
            </div>
            <div className={style.inputval}>
              {info.myown === 0 ? (
                  <Checkbox 
                    checked={true} 
                    onChange={(e) => setInfo({ ...info, myown: e.target.checked ? 0 : 1 })}
                  />
                ):(
                  <Checkbox 
                    checked={false} 
                    onChange={(e) => setInfo({ ...info, myown: e.target.checked ? 0 : 1 })}
                  />
                )}
              <label>Not-Myown</label>
            </div>
          </div>
        </div>
      </div>
      <div className={style.functionBtn}>
        <div className={style.button} onClick={handlesubmit}>ยืนยัน</div>
        <div className={style.button} onClick={handlebackBtn}>ยกเลิก</div>
      </div>
    </div>
  )
}

export default Addstock