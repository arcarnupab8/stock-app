import React, { useState } from 'react'
import style from './css/navbar.module.css';
import { Link } from 'react-router-dom';

function Navbar() {

  const [topic, setTopic] = useState('เลือกเมนู');
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className={style.container}> 
      <div className={`${style.dropdownMenu} ${isOpen ? style.menuActive : ''}`} onClick={toggleDropdown}>
        <div className={style.topicSelected}>
          {topic === 'รายรับ/รายจ่าย' ? 
          <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" >
            <path d="M2 0C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V16C0 16.5304 0.210714 17.0391 0.585786 17.4142C0.960859 17.7893 1.46957 18 2 18H16C16.5304 18 17.0391 17.7893 17.4142 17.4142C17.7893 17.0391 18 16.5304 18 16V13.72C18.3023 13.5455 18.5536 13.2949 18.7291 12.9932C18.9045 12.6914 18.9979 12.349 19 12V6C18.9979 5.65097 18.9045 5.30857 18.7291 5.00683C18.5536 4.70509 18.3023 4.45451 18 4.28V2C18 1.46957 17.7893 0.960859 17.4142 0.585786C17.0391 0.210714 16.5304 0 16 0H2ZM2 2H16V4H10C9.46957 4 8.96086 4.21071 8.58579 4.58579C8.21071 4.96086 8 5.46957 8 6V12C8 12.5304 8.21071 13.0391 8.58579 13.4142C8.96086 13.7893 9.46957 14 10 14H16V16H2V2ZM10 6H17V12H10V6ZM13 7.5C12.6022 7.5 12.2206 7.65804 11.9393 7.93934C11.658 8.22064 11.5 8.60218 11.5 9C11.5 9.39782 11.658 9.77936 11.9393 10.0607C12.2206 10.342 12.6022 10.5 13 10.5C13.3978 10.5 13.7794 10.342 14.0607 10.0607C14.342 9.77936 14.5 9.39782 14.5 9C14.5 8.60218 14.342 8.22064 14.0607 7.93934C13.7794 7.65804 13.3978 7.5 13 7.5Z" />
          </svg> : '' || 
          topic === 'กู้ยืม' ? 
          <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 35 35" >
            <path d="M23.3333 2.91663C19.3083 2.91663 16.0416 6.18329 16.0416 10.2083C16.0416 14.2333 19.3083 17.5 23.3333 17.5C27.3583 17.5 30.625 14.2333 30.625 10.2083C30.625 6.18329 27.3583 2.91663 23.3333 2.91663ZM23.3333 14.5833C20.9125 14.5833 18.9583 12.6291 18.9583 10.2083C18.9583 7.78746 20.9125 5.83329 23.3333 5.83329C25.7541 5.83329 27.7083 7.78746 27.7083 10.2083C27.7083 12.6291 25.7541 14.5833 23.3333 14.5833ZM27.7083 23.3333H24.7916C24.7916 21.5833 23.6979 20.0083 22.0646 19.3958L13.0812 16.0416H1.45831V32.0833H10.2083V29.9833L20.4166 32.8125L32.0833 29.1666V27.7083C32.0833 25.2875 30.1291 23.3333 27.7083 23.3333ZM7.29165 29.1666H4.37498V18.9583H7.29165V29.1666ZM20.3729 29.7645L10.2083 26.9791V18.9583H12.5562L21.0437 22.1229C21.5396 22.3125 21.875 22.7937 21.875 23.3333C21.875 23.3333 18.9583 23.2604 18.5208 23.1145L15.05 21.9625L14.1312 24.7333L17.6021 25.8854C18.3458 26.1333 19.1187 26.25 19.9062 26.25H27.7083C28.2771 26.25 28.7875 26.6 29.0208 27.0812L20.3729 29.7645Z" />
          </svg> : '' || 
          topic === 'ออกบิล' ? 
          <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 35 35" >
            <path d="M29.1667 32.0833H5.83333C5.44656 32.0833 5.07563 31.9296 4.80214 31.6562C4.52865 31.3827 4.375 31.0117 4.375 30.625V4.37496C4.375 3.98819 4.52865 3.61725 4.80214 3.34376C5.07563 3.07027 5.44656 2.91663 5.83333 2.91663H29.1667C29.5534 2.91663 29.9244 3.07027 30.1979 3.34376C30.4714 3.61725 30.625 3.98819 30.625 4.37496V30.625C30.625 31.0117 30.4714 31.3827 30.1979 31.6562C29.9244 31.9296 29.5534 32.0833 29.1667 32.0833ZM27.7083 29.1666V5.83329H7.29167V29.1666H27.7083ZM11.6667 13.125H23.3333V16.0416H11.6667V13.125ZM11.6667 18.9583H23.3333V21.875H11.6667V18.9583Z" />
          </svg> : ''||
          topic === 'สต็อก' ? 
          <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 35 35" >
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 1.82288C16.6177 1.82288 15.8054 2.04163 14.9173 2.40913C14.0583 2.76496 13.0608 3.2885 11.8197 3.94038L8.80392 5.52267C7.27996 6.32183 6.06225 6.96204 5.11871 7.59058C4.14454 8.24246 3.39204 8.92788 2.84517 9.85683C2.29975 10.7829 2.05475 11.7862 1.93663 12.9806C1.82288 14.14 1.82288 15.5647 1.82288 17.3585V17.6414C1.82288 19.4352 1.82288 20.86 1.93663 22.0193C2.05475 23.2152 2.30121 24.217 2.84517 25.1431C3.39204 26.072 4.14308 26.7575 5.12017 27.4093C6.06079 28.0379 7.27996 28.6781 8.80392 29.4772L11.8197 31.0595C13.0608 31.7114 14.0583 32.235 14.9173 32.5908C15.8068 32.9583 16.6177 33.177 17.5 33.177C18.3822 33.177 19.1945 32.9583 20.0827 32.5908C20.9416 32.235 21.9391 31.7114 23.1802 31.0595L26.196 29.4787C27.72 28.6781 28.9377 28.0379 29.8797 27.4093C30.8568 26.7575 31.6079 26.072 32.1547 25.1431C32.7002 24.217 32.9452 23.2137 33.0633 22.0193C33.177 20.86 33.177 19.4352 33.177 17.6429V17.357C33.177 15.5648 33.177 14.14 33.0633 12.9806C32.9452 11.7848 32.6987 10.7829 32.1547 9.85683C31.6079 8.92788 30.8568 8.24246 29.8797 7.59058C28.9391 6.96204 27.72 6.32183 26.196 5.52267L23.1802 3.94038C21.9391 3.2885 20.9416 2.76496 20.0827 2.40913C19.1931 2.04163 18.3822 1.82288 17.5 1.82288ZM12.7895 5.90038C14.0875 5.21933 14.9975 4.74392 15.7529 4.43183C16.4879 4.12704 17.0056 4.01038 17.5 4.01038C17.9958 4.01038 18.512 4.12704 19.247 4.43183C20.0025 4.74392 20.911 5.21933 22.2089 5.90038L25.1256 7.43163C26.7152 8.26433 27.8308 8.85204 28.6664 9.40913C29.0777 9.68475 29.4 9.93996 29.6625 10.1966L24.8048 12.6248L12.4089 6.10017L12.7895 5.90038ZM10.1281 7.29746L9.87433 7.43163C8.28475 8.26433 7.16913 8.85204 6.33496 9.40913C5.97903 9.63987 5.64555 9.90353 5.33892 10.1966L17.5 16.2779L22.3956 13.8279L10.4285 7.53079C10.3155 7.47118 10.2138 7.39221 10.1281 7.29746ZM4.28454 12.1143C4.21163 12.4264 4.15475 12.7808 4.11392 13.1935C4.01183 14.2347 4.01038 15.5516 4.01038 17.4139V17.5845C4.01038 19.4483 4.01038 20.7652 4.11392 21.805C4.21454 22.8214 4.40558 23.4791 4.73079 24.0333C5.05454 24.5831 5.52267 25.0483 6.33496 25.5908C7.16913 26.1479 8.28475 26.7356 9.87433 27.5683L12.791 29.0995C14.0889 29.7806 14.9975 30.256 15.7529 30.5681C15.992 30.6672 16.2064 30.746 16.4062 30.8087V18.1752L4.28454 12.1143ZM18.5937 30.8072C18.7935 30.746 19.0079 30.6672 19.247 30.5681C20.0025 30.256 20.911 29.7806 22.2089 29.0995L25.1256 27.5683C26.7152 26.7341 27.8308 26.1479 28.6664 25.5908C29.4772 25.0483 29.9454 24.5831 30.2706 24.0333C30.5958 23.4791 30.7854 22.8229 30.886 21.805C30.9881 20.7652 30.9895 19.4483 30.9895 17.586V17.4154C30.9895 15.5516 30.9895 14.2348 30.886 13.195C30.8532 12.8318 30.7962 12.4713 30.7154 12.1158L25.8854 14.5293V18.9583C25.8854 19.2484 25.7701 19.5266 25.565 19.7317C25.3599 19.9368 25.0817 20.052 24.7916 20.052C24.5015 20.052 24.2233 19.9368 24.0182 19.7317C23.8131 19.5266 23.6979 19.2484 23.6979 18.9583V15.6245L18.5937 18.1766V30.8072Z" />
          </svg> : '' || 
          topic === 'บันทึกเวลา' ? 
          <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 35 35" >
            <path opacity="0.2" d="M29.5312 21.875L21.875 29.5312V21.875H29.5312Z" />
            <path d="M12.0312 13.125C12.0312 12.8349 12.1465 12.5567 12.3516 12.3516C12.5567 12.1465 12.8349 12.0312 13.125 12.0312H21.875C22.1651 12.0312 22.4433 12.1465 22.6484 12.3516C22.8535 12.5567 22.9688 12.8349 22.9688 13.125C22.9688 13.4151 22.8535 13.6933 22.6484 13.8984C22.4433 14.1035 22.1651 14.2188 21.875 14.2188H13.125C12.8349 14.2188 12.5567 14.1035 12.3516 13.8984C12.1465 13.6933 12.0312 13.4151 12.0312 13.125ZM13.125 18.5938H21.875C22.1651 18.5938 22.4433 18.4785 22.6484 18.2734C22.8535 18.0683 22.9688 17.7901 22.9688 17.5C22.9688 17.2099 22.8535 16.9317 22.6484 16.7266C22.4433 16.5215 22.1651 16.4062 21.875 16.4062H13.125C12.8349 16.4062 12.5567 16.5215 12.3516 16.7266C12.1465 16.9317 12.0312 17.2099 12.0312 17.5C12.0312 17.7901 12.1465 18.0683 12.3516 18.2734C12.5567 18.4785 12.8349 18.5938 13.125 18.5938ZM17.5 20.7812H13.125C12.8349 20.7812 12.5567 20.8965 12.3516 21.1016C12.1465 21.3067 12.0312 21.5849 12.0312 21.875C12.0312 22.1651 12.1465 22.4433 12.3516 22.6484C12.5567 22.8535 12.8349 22.9688 13.125 22.9688H17.5C17.7901 22.9688 18.0683 22.8535 18.2734 22.6484C18.4785 22.4433 18.5938 22.1651 18.5938 21.875C18.5938 21.5849 18.4785 21.3067 18.2734 21.1016C18.0683 20.8965 17.7901 20.7812 17.5 20.7812ZM30.625 6.5625V21.4225C30.6259 21.7098 30.5697 21.9945 30.4596 22.26C30.3495 22.5254 30.1878 22.7664 29.9838 22.9688L22.9688 29.9838C22.7664 30.1878 22.5254 30.3495 22.26 30.4596C21.9945 30.5697 21.7098 30.6259 21.4225 30.625H6.5625C5.98234 30.625 5.42594 30.3945 5.0157 29.9843C4.60547 29.5741 4.375 29.0177 4.375 28.4375V6.5625C4.375 5.98234 4.60547 5.42594 5.0157 5.0157C5.42594 4.60547 5.98234 4.375 6.5625 4.375H28.4375C29.0177 4.375 29.5741 4.60547 29.9843 5.0157C30.3945 5.42594 30.625 5.98234 30.625 6.5625ZM6.5625 28.4375H20.7812V21.875C20.7812 21.5849 20.8965 21.3067 21.1016 21.1016C21.3067 20.8965 21.5849 20.7812 21.875 20.7812H28.4375V6.5625H6.5625V28.4375ZM22.9688 22.9688V26.8926L26.8912 22.9688H22.9688Z" />
          </svg> : ''}
          <p>{topic}</p>
        </div>
        <div className={`${style.showmenuButton} ${isOpen ? style.rotate : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <g clip-path="url(#clip0_481_414)">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M13.06 15.9017C12.7788 16.1702 12.3975 16.3209 12 16.3209C11.6025 16.3209 11.2213 16.1702 10.94 15.9017L5.28201 10.4971C5.00075 10.2282 4.84279 9.86359 4.84288 9.48341C4.84297 9.10323 5.00111 8.73867 5.28251 8.4699C5.5639 8.20114 5.9455 8.0502 6.34336 8.05029C6.74122 8.05038 7.12274 8.20149 7.40401 8.47038L12 12.8621L16.596 8.47038C16.8788 8.20916 17.2576 8.06451 17.6509 8.0676C18.0442 8.07069 18.4205 8.22126 18.6988 8.48689C18.977 8.75251 19.1349 9.11194 19.1385 9.48776C19.1421 9.86357 18.9911 10.2257 18.718 10.4962L13.061 15.9027L13.06 15.9017Z" fill={`${isOpen ? "white" : "black"}`}/>
            </g>
            <defs>
              <clipPath id="clip0_481_414">
                <rect width="24" height="22.9333" fill="white" transform="matrix(-1 0 0 -1 24 23.4889)"/>
              </clipPath>
            </defs>
          </svg>
        </div>
        {isOpen && (
        <div className={style.menulist}>
          <div onClick={() => setTopic('รายรับ/รายจ่าย')}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 3C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V16.72C21.3023 16.5455 21.5536 16.2949 21.7291 15.9932C21.9045 15.6914 21.9979 15.349 22 15V9C21.9979 8.65097 21.9045 8.30857 21.7291 8.00683C21.5536 7.70509 21.3023 7.45451 21 7.28V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3H5ZM5 5H19V7H13C12.4696 7 11.9609 7.21071 11.5858 7.58579C11.2107 7.96086 11 8.46957 11 9V15C11 15.5304 11.2107 16.0391 11.5858 16.4142C11.9609 16.7893 12.4696 17 13 17H19V19H5V5ZM13 9H20V15H13V9ZM16 10.5C15.6022 10.5 15.2206 10.658 14.9393 10.9393C14.658 11.2206 14.5 11.6022 14.5 12C14.5 12.3978 14.658 12.7794 14.9393 13.0607C15.2206 13.342 15.6022 13.5 16 13.5C16.3978 13.5 16.7794 13.342 17.0607 13.0607C17.342 12.7794 17.5 12.3978 17.5 12C17.5 11.6022 17.342 11.2206 17.0607 10.9393C16.7794 10.658 16.3978 10.5 16 10.5Z" fill="black"/>
              </svg>
              <Link to='/manageIncome'>รายรับ/รายจ่าย</Link>
          </div>
          <div onClick={() => setTopic('กู้ยืม')}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M16 2C13.24 2 11 4.24 11 7C11 9.76 13.24 12 16 12C18.76 12 21 9.76 21 7C21 4.24 18.76 2 16 2ZM16 10C14.34 10 13 8.66 13 7C13 5.34 14.34 4 16 4C17.66 4 19 5.34 19 7C19 8.66 17.66 10 16 10ZM19 16H17C17 14.8 16.25 13.72 15.13 13.3L8.97 11H1V22H7V20.56L14 22.5L22 20V19C22 17.34 20.66 16 19 16ZM5 20H3V13H5V20ZM13.97 20.41L7 18.5V13H8.61L14.43 15.17C14.77 15.3 15 15.63 15 16C15 16 13 15.95 12.7 15.85L10.32 15.06L9.69 16.96L12.07 17.75C12.58 17.92 13.11 18 13.65 18H19C19.39 18 19.74 18.24 19.9 18.57L13.97 20.41Z" fill="black"/>
              </svg>
              <Link to='/manageBorrow'>กู้ยืม</Link>
          </div>
          <div onClick={() => setTopic('ออกบิล')}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M20 22H4C3.73478 22 3.48043 21.8946 3.29289 21.7071C3.10536 21.5196 3 21.2652 3 21V3C3 2.73478 3.10536 2.48043 3.29289 2.29289C3.48043 2.10536 3.73478 2 4 2H20C20.2652 2 20.5196 2.10536 20.7071 2.29289C20.8946 2.48043 21 2.73478 21 3V21C21 21.2652 20.8946 21.5196 20.7071 21.7071C20.5196 21.8946 20.2652 22 20 22ZM19 20V4H5V20H19ZM8 9H16V11H8V9ZM8 13H16V15H8V13Z" fill="black"/>
              </svg>
              <Link to='/manageBills'>ออกบิล</Link>
          </div>
          <div onClick={() => setTopic('สต็อก')}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path fill-rule="evenodd" cdivp-rule="evenodd" d="M12 1.25C11.395 1.25 10.838 1.4 10.229 1.652C9.64 1.896 8.956 2.255 8.105 2.702L6.037 3.787C4.992 4.335 4.157 4.774 3.51 5.205C2.842 5.652 2.326 6.122 1.951 6.759C1.577 7.394 1.409 8.082 1.328 8.901C1.25 9.696 1.25 10.673 1.25 11.903V12.097C1.25 13.327 1.25 14.304 1.328 15.099C1.409 15.919 1.578 16.606 1.951 17.241C2.326 17.878 2.841 18.348 3.511 18.795C4.156 19.226 4.992 19.665 6.037 20.213L8.105 21.298C8.956 21.745 9.64 22.104 10.229 22.348C10.839 22.6 11.395 22.75 12 22.75C12.605 22.75 13.162 22.6 13.771 22.348C14.36 22.104 15.044 21.745 15.895 21.298L17.963 20.214C19.008 19.665 19.843 19.226 20.489 18.795C21.159 18.348 21.674 17.878 22.049 17.241C22.423 16.606 22.591 15.918 22.672 15.099C22.75 14.304 22.75 13.327 22.75 12.098V11.902C22.75 10.673 22.75 9.696 22.672 8.901C22.591 8.081 22.422 7.394 22.049 6.759C21.674 6.122 21.159 5.652 20.489 5.205C19.844 4.774 19.008 4.335 17.963 3.787L15.895 2.702C15.044 2.255 14.36 1.896 13.771 1.652C13.161 1.4 12.605 1.25 12 1.25ZM8.77 4.046C9.66 3.579 10.284 3.253 10.802 3.039C11.306 2.83 11.661 2.75 12 2.75C12.34 2.75 12.694 2.83 13.198 3.039C13.716 3.253 14.339 3.579 15.229 4.046L17.229 5.096C18.319 5.667 19.084 6.07 19.657 6.452C19.939 6.641 20.16 6.816 20.34 6.992L17.009 8.657L8.509 4.183L8.77 4.046ZM6.945 5.004L6.771 5.096C5.681 5.667 4.916 6.07 4.344 6.452C4.09993 6.61022 3.87126 6.79102 3.661 6.992L12 11.162L15.357 9.482L7.151 5.164C7.0735 5.12313 7.00378 5.06897 6.945 5.004ZM2.938 8.307C2.888 8.521 2.849 8.764 2.821 9.047C2.751 9.761 2.75 10.664 2.75 11.941V12.058C2.75 13.336 2.75 14.239 2.821 14.952C2.89 15.649 3.021 16.1 3.244 16.48C3.466 16.857 3.787 17.176 4.344 17.548C4.916 17.93 5.681 18.333 6.771 18.904L8.771 19.954C9.661 20.421 10.284 20.747 10.802 20.961C10.966 21.029 11.113 21.083 11.25 21.126V12.463L2.938 8.307ZM12.75 21.125C12.887 21.083 13.034 21.029 13.198 20.961C13.716 20.747 14.339 20.421 15.229 19.954L17.229 18.904C18.319 18.332 19.084 17.93 19.657 17.548C20.213 17.176 20.534 16.857 20.757 16.48C20.98 16.1 21.11 15.65 21.179 14.952C21.249 14.239 21.25 13.336 21.25 12.059V11.942C21.25 10.664 21.25 9.761 21.179 9.048C21.1565 8.79901 21.1174 8.55179 21.062 8.308L17.75 9.963V13C17.75 13.1989 17.671 13.3897 17.5303 13.5303C17.3897 13.671 17.1989 13.75 17 13.75C16.8011 13.75 16.6103 13.671 16.4697 13.5303C16.329 13.3897 16.25 13.1989 16.25 13V10.714L12.75 12.464V21.125Z" fill="black"/>
              </svg>
              <Link to='/manageStock'>สต็อก</Link>
          </div>
          <div onClick={() => setTopic('บันทึกเวลา')}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path opacity="0.2" d="M20.25 15L15 20.25V15H20.25Z" fill="black"/>
                <path d="M8.25 9C8.25 8.80109 8.32902 8.61032 8.46967 8.46967C8.61032 8.32902 8.80109 8.25 9 8.25H15C15.1989 8.25 15.3897 8.32902 15.5303 8.46967C15.671 8.61032 15.75 8.80109 15.75 9C15.75 9.19891 15.671 9.38968 15.5303 9.53033C15.3897 9.67098 15.1989 9.75 15 9.75H9C8.80109 9.75 8.61032 9.67098 8.46967 9.53033C8.32902 9.38968 8.25 9.19891 8.25 9ZM9 12.75H15C15.1989 12.75 15.3897 12.671 15.5303 12.5303C15.671 12.3897 15.75 12.1989 15.75 12C15.75 11.8011 15.671 11.6103 15.5303 11.4697C15.3897 11.329 15.1989 11.25 15 11.25H9C8.80109 11.25 8.61032 11.329 8.46967 11.4697C8.32902 11.6103 8.25 11.8011 8.25 12C8.25 12.1989 8.32902 12.3897 8.46967 12.5303C8.61032 12.671 8.80109 12.75 9 12.75ZM12 14.25H9C8.80109 14.25 8.61032 14.329 8.46967 14.4697C8.32902 14.6103 8.25 14.8011 8.25 15C8.25 15.1989 8.32902 15.3897 8.46967 15.5303C8.61032 15.671 8.80109 15.75 9 15.75H12C12.1989 15.75 12.3897 15.671 12.5303 15.5303C12.671 15.3897 12.75 15.1989 12.75 15C12.75 14.8011 12.671 14.6103 12.5303 14.4697C12.3897 14.329 12.1989 14.25 12 14.25ZM21 4.5V14.6897C21.0006 14.8867 20.9621 15.082 20.8866 15.264C20.8111 15.446 20.7002 15.6112 20.5603 15.75L15.75 20.5603C15.6112 20.7002 15.446 20.8111 15.264 20.8866C15.082 20.9621 14.8867 21.0006 14.6897 21H4.5C4.10218 21 3.72064 20.842 3.43934 20.5607C3.15804 20.2794 3 19.8978 3 19.5V4.5C3 4.10218 3.15804 3.72064 3.43934 3.43934C3.72064 3.15804 4.10218 3 4.5 3H19.5C19.8978 3 20.2794 3.15804 20.5607 3.43934C20.842 3.72064 21 4.10218 21 4.5ZM4.5 19.5H14.25V15C14.25 14.8011 14.329 14.6103 14.4697 14.4697C14.6103 14.329 14.8011 14.25 15 14.25H19.5V4.5H4.5V19.5ZM15.75 15.75V18.4406L18.4397 15.75H15.75Z" fill="black"/>
              </svg>
              <Link to='/manageTimes'>บันทึกเวลา</Link>
          </div>
        </div>
        )}
      </div>
      <div className={style.signoutButton}>
        <div className={style.signoutIcon}> 
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M5 2H16C16.7956 2 17.5587 2.31607 18.1213 2.87868C18.6839 3.44129 19 4.20435 19 5V19C19 19.2652 18.8946 19.5196 18.7071 19.7071C18.5196 19.8946 18.2652 20 18 20H15" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 12V14M5 2L12.588 3.518C13.268 3.65392 13.8799 4.02121 14.3197 4.55739C14.7594 5.09358 14.9998 5.76555 15 6.459V20.78C14.9999 20.9279 14.967 21.0739 14.9037 21.2076C14.8404 21.3412 14.7482 21.4592 14.6338 21.5529C14.5194 21.6466 14.3856 21.7138 14.2422 21.7496C14.0987 21.7854 13.949 21.789 13.804 21.76L6.608 20.322C6.15444 20.2313 5.74633 19.9863 5.45314 19.6286C5.15995 19.2708 4.99982 18.8225 5 18.36V2Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <p>ออกจากระบบ</p>
      </div>
    </div>
  )
}

export default Navbar