import React, { useEffect, useState } from 'react'
import { FaHashtag } from 'react-icons/fa'
import { IoIosNotifications, IoMdAddCircle } from 'react-icons/io'
import { MdPeopleAlt } from 'react-icons/md'
import { BiSearch } from 'react-icons/bi'
import { AiFillGift, AiOutlineGif } from 'react-icons/ai'
import { BsFileEarmarkEaselFill, BsFillEmojiDizzyFill } from 'react-icons/bs'
function MainApp() {

  const [userData2, setUserData2] = useState({})
  const [userServs, setUserServs] = useState([])
  const [generalData, setGeneralData] = useState({})
  const [modal, setModal] = useState(false)
  const [SingleServData, setSingleServData] = useState({})

  async function getUserData() {
    const citiesRef = collection(db, "usuarios");
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUserData2(user)
        // ...
        const docRef = doc(db, "usuarios", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setGeneralData(docSnap.data())
          async function SideBarServers() {

            const q = query(collection(db,
              "servidores"), where("id", "in", docSnap.data().servs))
            const querySnapshot = await getDocs(q);
            const array = []
            querySnapshot.forEach((doc) => {
              array.push(doc.data())

            });
            setUserServs(array)
            // console.log(array)

          }
          SideBarServers()
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }

      } else {
        // User is signed out
        // ...
      }
    });


  }
  useEffect(() => {

  }, [])

  return (
    <div className='flex-1 h-full items-center flex flex-col text-white bg-[#36393F]'>
      <div className='w-full h-[53px] flex justify-center border-b border-b-[#18191C]'>
        <div className='w-[98%] flex items-center h-full'>

          <div className='flex w-[50%] items-center'>
            <FaHashtag className='text-[#B9BBBE] text-[25px]' />
            <span className='font-medium text-[white] inline-block ml-2 mt-[-3px]'>geral</span>
          </div>
          <div className='w-[50%] flex justify-end'>
            <div className='w-[400px] items-center flex justify-end h-full'>
              <div className='h-full flex justify-center items-center w-[40px]'>
                <svg x="0" y="0" className="icon-2xnN2Y"
                  aria-hidden="true" role="img" width="24"
                  height="24" viewBox="0 0 24 24" fill="#B9BBBE"><path fill="#B9BBBE"
                    d="M5.43309 21C5.35842 21 5.30189 20.9325 5.31494 20.859L5.99991
                 17H2.14274C2.06819 17 2.01168 16.9327 2.02453 16.8593L2.33253 
                 15.0993C2.34258 15.0419 2.39244 15 2.45074 15H6.34991L7.40991 
                 9H3.55274C3.47819 9 3.42168 8.93274 3.43453 8.85931L3.74253
                  7.09931C3.75258 7.04189 3.80244 7 3.86074 7H7.75991L8.45234
                   3.09903C8.46251 3.04174 8.51231 3 8.57049 3H10.3267C10.4014
                    3 10.4579 3.06746 10.4449 3.14097L9.75991 7H15.7599L16.4523
                     3.09903C16.4625 3.04174 16.5123 3 16.5705 3H18.3267C18.4014
                      3 18.4579 3.06746 18.4449 3.14097L17.7599 7H21.6171C21.6916
                       7 21.7481 7.06725 21.7353 7.14069L21.4273 8.90069C21.4172
                        8.95811 21.3674 9 21.3091 9H17.4099L17.0495 11.04H15.05L15.4104
                         9H9.41035L8.35035 15H10.5599V17H7.99991L7.30749 20.901C7.29732
                          20.9583 7.24752 21 7.18934 21H5.43309Z"></path><path fill="B9BBBE"
                    d="M13.4399 12.96C12.9097 12.96 12.4799 13.3898 12.4799 13.92V20.2213C12.4799
                            20.7515 12.9097 21.1813 13.4399 21.1813H14.3999C14.5325 21.1813 14.6399 21.2887 
                            14.6399 21.4213V23.4597C14.6399 23.6677 14.8865 23.7773 15.0408 23.6378L17.4858
                             21.4289C17.6622 21.2695 17.8916 21.1813
                              18.1294 21.1813H22.5599C23.0901 21.1813
                              23.5199 20.7515 23.5199 20.2213V13.92C23.5199
                               13.3898 23.0901 12.96 22.5599 12.96H13.4399Z"></path></svg>
              </div>
              <div className='h-full flex justify-center items-center w-[40px]'>
                <IoIosNotifications className='text-[25px] text-[#B9BBBE]' />
              </div>
              <div className='h-full flex justify-center items-center w-[40px]'>
                <svg x="0" y="0" className="icon-2xnN2Y"
                  aria-hidden="true" role="img"
                  width="24" height="24"
                  viewBox="0 0 24 24"><path fill="#B9BBBE"
                    d="M22 12L12.101 2.10101L10.686 
                  3.51401L12.101 4.92901L7.15096
                   9.87801V9.88001L5.73596 
                   8.46501L4.32196 9.88001L8.56496
                    14.122L2.90796 19.778L4.32196 
                    21.192L9.97896 15.536L14.222
                     19.778L15.636 18.364L14.222
                      16.95L19.171 12H19.172L20.586 
                      13.414L22 12Z"></path></svg>
              </div>
              <div className='h-full flex justify-center items-center w-[40px]'>
                <MdPeopleAlt className='text-[#B9BBBE] text-[25px]' />
              </div>
              <div className='w-[150px] ml-2 mr-3 h-full flex items-center'>
                <div className='w-full h-[50%] relative bg-[#202225]'>
                  <input className='bg-transparent w-full text-[13px] pl-2 font-medium' placeholder='Buscar' type={'search'} />
                  <BiSearch className='text-[#B9BBBE] absolute right-1 top-[5px]' />
                </div>
              </div>
              <div className='h-full text-[30px] justify-center flex items-center w-[40px]'>
                <svg x="0" y="0" className="icon-2xnN2Y"
                  aria-hidden="true" role="img"
                  width="24" height="24" viewBox="0 0 24 24"
                  fill="#96989D"><path d="M19 3H4.99C3.88 
               3 3.01 3.89 3.01 5L3 19C3 20.1 3.88 21 4.99
                21H19C20.1 21 21 20.1 21 19V5C21 3.89 20.1 3 
                19 3ZM19 15H15C15 16.66 13.65 18 12 18C10.35 
                18 9 16.66 9 15H4.99V5H19V15Z" fill="#B9BBBE"></path></svg>
              </div>
              <div className='h-full text-[30px] justify-center flex items-center w-[40px]'>
                <svg x="0" y="0" className="icon-2xnN2Y"
                  aria-hidden="true" role="img"
                  width="24" height="24" viewBox="0 0 24 24"><path fill="#B9BBBE"
                    d="M12 2C6.486 2 2 6.487 2 12C2 17.515 6.486 22 12 22C17.514
                 22 22 17.515 22 12C22 6.487 17.514 2 12 2ZM12 18.25C11.31
                  18.25 10.75 17.691 10.75 17C10.75 16.31 11.31 15.75 12 
                  15.75C12.69 15.75 13.25 16.31 13.25 17C13.25 17.691
                   12.69 18.25 12 18.25ZM13 13.875V15H11V12H12C13.104 12 14 11.103 
                   14 10C14 8.896 13.104 8 12 8C10.896 8 10 8.896 10 10H8C8 7.795
                    9.795 6 12 6C14.205 6 16 7.795 16 10C16 11.861 14.723 13.429 13 13.875Z"></path></svg>
              </div>

            </div>
          </div>

        </div>
      </div>

      <div className='w-[98%] flex flex-col justify-between flex-1'>

        <div className='flex-1 flex flex-col items-start justify-end'>
          <div className='w-[80px] h-[80px] flex justify-center items-center bg-[#4F545C] rounded-full'>
            <FaHashtag className='text-[45px] text-white' />
          </div>
          <span className='text-[35px] font-bold'>Bem vindo(a) a #geral!</span>
          <span className='text-[#A3A6AA] text-[18px]'>Este é o começo do canal #geral.</span>

        </div>

        <div className='min-h-[90px]  flex justify-center items-center w-full'>

          <div className='bg-[#40444B] flex h-[45px] rounded-md w-full'>

            <div className='w-[60px] h-full flex justify-center items-center text-[25px]'>
              <IoMdAddCircle className='text-[#B9BBBE]' />
            </div>
            <div className='flex-1 h-full'>
              <textarea placeholder={'Conversar em #geral'}
                className='w-full overflow-hidden text-[18px] resize-none text-[#DCDDDE] pl-0 p-[7px] outline-none h-full bg-transparent ' />

            </div>
            <div className='w-[40px] h-full flex justify-center items-center text-[25px]'>
              <AiFillGift className='text-[#B9BBBE]' />
            </div>
            <div className='w-[40px] h-full flex justify-center items-center text-[25px]'>
              <div className='w-[30px] flex justify-center items-center h-[25px] rounded-sm bg-[#B9BBBE]'>
                <AiOutlineGif className='text-[#40444B]' />

              </div>
            </div>
            <div className='w-[40px] h-full flex justify-center items-center text-[25px]'>
              <BsFileEarmarkEaselFill className='text-[#B9BBBE]' />
            </div>
            <div className='w-[40px] h-full flex justify-center items-center text-[25px]'>
              <BsFillEmojiDizzyFill className='text-[#B9BBBE]' />
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default MainApp
